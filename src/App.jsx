import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';


function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col justify-between bg-white text-google-text-main font-sans antialiased'>
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


export default function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route path='about' element={<About />} />

          <Route path="*" element={<div className="container-custom py-20 text-center">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}