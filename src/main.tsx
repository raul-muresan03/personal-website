import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root')!;
const initialYear = Number(container.dataset.year) || new Date().getFullYear();
const app = (
  <React.StrictMode>
    <App initialYear={initialYear} />
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
