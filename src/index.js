import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Utilisation de Router pour encapsuler toute l'application */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />  {/* Ajoute la route pour la page Contact */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// Si tu veux mesurer la performance de ton application, utilise reportWebVitals
reportWebVitals();
