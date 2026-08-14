/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';

const MainPortfolioContent: React.FC = () => {
  const { isAdminViewOpen, setIsAdminViewOpen, isAdminLoggedIn } = usePortfolio();

  // Keyboard shortcut Ctrl + Shift + A (or Cmd + Shift + A) to toggle secret admin portal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminViewOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsAdminViewOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Public Navigation (NO Admin Link) */}
      <Navbar />

      {/* Main Public Portfolio Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Public Footer */}
      <Footer />

      {/* Hidden Admin Management Flow */}
      {isAdminViewOpen && (
        <>
          {!isAdminLoggedIn ? (
            <AdminLogin onCancel={() => setIsAdminViewOpen(false)} />
          ) : (
            <AdminDashboard onClose={() => setIsAdminViewOpen(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <MainPortfolioContent />
    </PortfolioProvider>
  );
}
