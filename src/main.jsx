import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import netflixReducer from './store/index';
import postsReducer from './store/indexing'
import './index.css';

const store = configureStore({
  reducer: {
    netflix: netflixReducer, // Add your slice to the store
    posts: postsReducer
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
