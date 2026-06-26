# Generate original PNG posters and backdrops for all A3 films via magi (Gemini).
# Requires GEMINI_API_KEY in ~/.claude/settings.json or the environment.
# Usage: .\scripts\run-magi-artwork.ps1 [-FeaturedOnly] [-DelaySeconds 15]

param(
  [switch]$FeaturedOnly,
  [int]$DelaySeconds = 12
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

$magi = Join-Path $env:USERPROFILE '.claude\skills\magi\scripts\magi.ps1'
if (-not (Test-Path $magi)) {
  Write-Error "magi.ps1 not found at $magi"
}

if (-not $env:GEMINI_API_KEY) {
  $settings = Join-Path $env:USERPROFILE '.claude\settings.json'
  if (Test-Path $settings) {
    $cfg = Get-Content $settings -Raw | ConvertFrom-Json
    if ($cfg.env.GEMINI_API_KEY) { $env:GEMINI_API_KEY = $cfg.env.GEMINI_API_KEY }
  }
}
if (-not $env:GEMINI_API_KEY) {
  Write-Error 'GEMINI_API_KEY not set. Add it to ~/.claude/settings.json env block.'
}

Write-Host "Generating shot lists from films catalogue..."
node scripts/generate-magi-shotlists.mjs

$postersDir = Join-Path $root 'public\images\posters'
$backdropsDir = Join-Path $root 'public\images\backdrops'
New-Item -ItemType Directory -Force -Path $postersDir, $backdropsDir | Out-Null

function Invoke-MagiBatch {
  param(
    [string]$Label,
    [string]$ShotlistPath,
    [string]$OutDir
  )

  if ($FeaturedOnly) {
    $featured = @('nairobi-after-dark', 'the-rift', 'savannah', 'kenya-rugby-safari-sevens')
    $all = Get-Content $ShotlistPath -Raw | ConvertFrom-Json
    $filtered = @($all | Where-Object { $featured -contains $_.name })
    $tmp = Join-Path $env:TEMP "magi-$Label-featured.json"
    $filtered | ConvertTo-Json -Depth 4 | Set-Content $tmp -Encoding UTF8
    $ShotlistPath = $tmp
    Write-Host "$Label batch: $($filtered.Count) featured titles only"
  }

  Write-Host ""
  Write-Host "=== $Label ===" -ForegroundColor Cyan
  & $magi -Shotlist $ShotlistPath -OutDir $OutDir
  return $LASTEXITCODE
}

$posterCode = Invoke-MagiBatch -Label 'Posters' -ShotlistPath (Join-Path $root 'scripts\magi-shotlist-posters.json') -OutDir $postersDir
if ($DelaySeconds -gt 0) {
  Write-Host "Waiting ${DelaySeconds}s before backdrops (rate limit)..."
  Start-Sleep -Seconds $DelaySeconds
}
$backdropCode = Invoke-MagiBatch -Label 'Backdrops' -ShotlistPath (Join-Path $root 'scripts\magi-shotlist-backdrops.json') -OutDir $backdropsDir

Write-Host ""
if ($posterCode -ne 0 -or $backdropCode -ne 0) {
  Write-Host 'Some images failed (often HTTP 429 quota). Re-run later or use -FeaturedOnly first.' -ForegroundColor Yellow
  exit 1
}

Write-Host 'All magi artwork generated. Run npm run build to deploy.' -ForegroundColor Green
