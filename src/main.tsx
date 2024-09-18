import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './AppRoutes.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <AppRoutes/>
      </Router>
    </RecoilRoot>
  </StrictMode>,
)
