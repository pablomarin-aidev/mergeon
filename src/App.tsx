import React, { useState, useEffect } from 'react';
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
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import DeleteData from './components/DeleteData';

type Page = 'home' | 'terms' | 'privacy' | 'delete-data';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'terminos-y-condiciones') {
        setCurrentPage('terms');
      } else if (hash === 'politica-de-privacidad') {
        setCurrentPage('privacy');
      } else if (hash === 'delete-data') {
        setCurrentPage('delete-data');
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsConditions />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'delete-data':
        return <DeleteData />;
      default:
        return (
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
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;