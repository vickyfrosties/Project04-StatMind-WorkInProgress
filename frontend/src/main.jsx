import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes.jsx';

const router = createBrowserRouter(routes);

createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider future={{
      v7_startTransition: true,
    }} router={router} />


  </StrictMode>,
);