import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'typeface-open-sans'
import '@fontsource/oswald'
import {Context} from "./Context";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Context>
              <App />
          </Context>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);