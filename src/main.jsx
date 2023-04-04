import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ul>
      <li> Página inicial</li>
      <li> Cadastro</li>
      <li> Sobre</li>
    </ul>

  </React.StrictMode>,
)
