import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext';


 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <BrowserRouter>
          <PlayerContextProvider>
          <App/>
          </PlayerContextProvider>
      
     </BrowserRouter>
   
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
