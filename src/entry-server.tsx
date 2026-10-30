import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render() {
  const initialYear = new Date().getFullYear();
  const html = renderToString(
    <StrictMode>
      <App initialYear={initialYear} />
    </StrictMode>
  );

  return { html, initialYear };
}
