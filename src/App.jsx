//THIRD CHARTERED ACCOUNTANTS WEBSITE

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
// import WhyChooseUs from './components/Why';
import Serv from './components/Serv';
import Contact from './components/Contact';

export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Serv />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
