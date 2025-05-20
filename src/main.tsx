import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Services from './pages/Services'
import { Route } from 'react-router-dom'

createRoot(document.getElementById("root")!).render(<App />);
