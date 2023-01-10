import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme';
import {BrowserRouter} from 'react-router-dom';

export const AppContext = createContext({
  user: 'NONE'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{
          user: 'CLIENT',
        }}>
          <App/>
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
);
