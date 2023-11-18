import React from 'react'
import ReactDOM from 'react-dom/client'
import MammaMiaApp from './MammaMiaApp.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MammaMiaApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
