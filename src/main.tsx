import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
