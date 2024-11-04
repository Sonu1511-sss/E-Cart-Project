import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopProvider from './component/Context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopProvider>
        <App />
      </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>
);
