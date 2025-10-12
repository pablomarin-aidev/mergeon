import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AIAgent from './components/AIAgent';
import ManagerPlatform from './components/ManagerPlatform';
import Analytics from './components/Analytics';
import Features from './components/Features';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950">
        <Header />
        <main>
          <Hero />
          <AIAgent />
          <ManagerPlatform />
          <Analytics />
          <Features />
          <Results />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;