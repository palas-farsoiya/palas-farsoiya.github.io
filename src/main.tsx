import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// The site used HashRouter until 2026; keep old links like /#/people working.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

createRoot(document.getElementById('root')!).render(<App />);
