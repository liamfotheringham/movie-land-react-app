import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

document.body.innerHTML = '<div id="app"></div>';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element.');
}
