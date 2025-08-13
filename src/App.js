// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import Developers from './pages/Developers';
import Investment from './pages/Investment';
import NewsEvents from './pages/NewsEvents';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <ChatWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
