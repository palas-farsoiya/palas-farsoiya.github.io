import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const container = document.getElementById('root');
  if (!container) {
    document.body.innerHTML = '<h1>Error: Root element not found</h1>';
    throw new Error('Root element not found');
  }
  
  createRoot(container).render(<App />);
} catch (error) {
  console.error('Failed to render app:', error);
  document.body.innerHTML = `<h1>Error loading app: ${error.message}</h1>`;
}