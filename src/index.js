import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import './pages/Style.scss';
import './index.scss';
import SidebarProvider from './utils/SidebarContext';

import { BrowserRouter as Router } from "react-router-dom";
const root = createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <React.StrictMode>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </React.StrictMode>
  </SidebarProvider>
  
);