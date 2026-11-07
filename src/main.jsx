import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

import NavBar from './components/layout/NavBar';
import App from './components/section/HeroBanner';
import Footer from './components/layout/Footer';
import BuildAndBelong from './components/section/Build_and_Belong';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <BuildAndBelong />
    <Footer />
  </StrictMode>
)
