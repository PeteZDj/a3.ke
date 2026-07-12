import type { Film } from '../types';
import { filmDetails, filmCrew } from '../data/filmMeta';

// Generates a short, believable screenplay excerpt for a title and triggers a
// client-side .txt download (no server round-trip / MIME config needed).

function center(text: string, width = 60): string {
  const pad = Math.max(0, Math.floor((width - text.length) / 2));
  return ' '.repeat(pad) + text;
}

export function buildScriptExcerpt(film: Film): string {
  const details = filmDetails(film);
  const crew = filmCrew(film);
  const writer = crew.find((c) => /screenplay|writer/i.test(c.role))?.name ?? film.director;
  const locs = details.locations;
  const chars = film.cast.filter((c) => /^[A-Z][a-z]/.test(c)).slice(0, 3);
  const A = (chars[0] ?? 'ASHA').toUpperCase().split(' ')[0];
  const B = (chars[1] ?? 'JUMA').toUpperCase().split(' ')[0];
  const L1 = (locs[0] ?? 'NAIROBI').toUpperCase();
  const L2 = (locs[1] ?? L1).toUpperCase();

  const L: string[] = [];
  L.push('');
  L.push('');
  L.push(center(film.title.toUpperCase()));
  L.push('');
  L.push(center(`A3 Studios ${film.ai ? 'AI Original' : 'Original'}`));
  L.push('');
  L.push(center(`Written by ${writer}`));
  L.push(center(`Directed by ${film.director}`));
  L.push('');
  L.push('');
  L.push(center('— EXCERPT · FIRST PAGES —'));
  L.push('');
  L.push(center(`© ${film.year} A3 Studios · Not for distribution`));
  L.push('');
  L.push('');
  L.push('');
  L.push('FADE IN:');
  L.push('');
  L.push(`EXT. ${L1} - DAWN`);
  L.push('');
  L.push(wrap(`The city wakes. ${film.logline}`));
  L.push('');
  L.push(`${A} moves through the crowd, eyes searching. Something is`);
  L.push('about to change.');
  L.push('');
  L.push(`                    ${A}`);
  L.push('          (to no one in particular)');
  L.push('     Not today. Not like this.');
  L.push('');
  L.push(`${B} appears at the edge of the frame, watching.`);
  L.push('');
  L.push(`                    ${B}`);
  L.push('     You always say that. And here we are.');
  L.push('');
  L.push('CUT TO:');
  L.push('');
  L.push(`INT. ${L2} - LATER`);
  L.push('');
  L.push(wrap(`The two of them, alone with the weight of what comes next. ${film.synopsis.split('. ')[0]}.`));
  L.push('');
  L.push(`                    ${A}`);
  L.push('     Then we do it together. All the way.');
  L.push('');
  L.push('They share a look. A decision made.');
  L.push('');
  L.push('SMASH CUT TO:');
  L.push('');
  L.push('MAIN TITLE:');
  L.push('');
  L.push(center(film.title.toUpperCase()));
  L.push('');
  L.push('');
  L.push('                                        [ excerpt ends ]');
  L.push('');
  L.push(`To license the full screenplay for ${film.title}, contact A3 Studios`);
  L.push('at licensing@a3.ke.');
  L.push('');
  return L.join('\n');
}

function wrap(text: string, width = 62): string {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > width) { lines.push(cur.trim()); cur = w; }
    else cur += ' ' + w;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines.join('\n');
}

export function downloadScript(film: Film): void {
  const text = buildScriptExcerpt(film);
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${film.slug}-screenplay-excerpt.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
