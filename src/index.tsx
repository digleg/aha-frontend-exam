import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './fonts/Ubuntu/Ubuntu-Bold.ttf';
import './fonts/Ubuntu/Ubuntu-Light.ttf';
import './fonts/Ubuntu/Ubuntu-Medium.ttf';
import './fonts/Ubuntu/Ubuntu-Regular.ttf';
import './fonts/Open_Sans/OpenSans-VariableFont_wdth.ttf';

import { store } from './redux/store';
import App from './App';

import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);
