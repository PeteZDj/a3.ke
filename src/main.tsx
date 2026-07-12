import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Fade out the branded preloader once the app has painted its first frame.
function dismissLoader() {
  const loader = document.getElementById('a3-loader');
  if (!loader) return;
  loader.classList.add('a3-loader--done');
  window.setTimeout(() => loader.remove(), 700);
}
requestAnimationFrame(() => requestAnimationFrame(() => window.setTimeout(dismissLoader, 400)));
