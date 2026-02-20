import { createRoot } from 'react-dom/client'
import './index.css'
import Effects from './Effects.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className="main-container">
    <Effects />
    <App />
  </div>
)
