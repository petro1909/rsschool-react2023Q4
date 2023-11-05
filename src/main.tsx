import ReactDOM from 'react-dom/client';
import App from './components/app/app.js';
import { ErrorBoundary } from './components/error/errorBoundary/errorBoundary.js';
import './style.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
