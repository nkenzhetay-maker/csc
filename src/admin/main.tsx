import { createRoot } from 'react-dom/client';
import '../index.css';
import AdminApp from './AdminApp';
import ErrorBoundary from '../components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <AdminApp />
  </ErrorBoundary>
);
