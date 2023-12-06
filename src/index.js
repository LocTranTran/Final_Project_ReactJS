import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import './pages/Style.scss';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </React.StrictMode>
);