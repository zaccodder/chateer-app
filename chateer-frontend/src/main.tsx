import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { store } from './store.ts';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Toaster
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            position: 'top-center',
          }}
        />
      </Router>
    </Provider>
  </StrictMode>
);
