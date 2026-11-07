import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

import NavBar from './components/layout/NavBar';
// import Footer from './components/layout/Footer.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>
)
