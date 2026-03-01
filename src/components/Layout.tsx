import { Link, Outlet, useLocation } from 'react-router-dom';
import { Flame, Crosshair, Menu, X, Bell, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AIChatbot from './AIChatbot';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Redeem Codes', path: '/codes', highlight: true },
    { name: 'Updates', path: '/updates' },
    { name: 'Characters', path: '/characters' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-ff-orange text-white text-xs font-bold text-center py-1.5 uppercase tracking-wider">
        <span className="animate-pulse inline-block mr-2">🔴 LIVE</span>
        OB48 Patch Notes are out! Read the full breakdown now.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-ff-dark/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-ff-gray rounded-lg overflow-hidden border border-white/10 group-hover:border-ff-orange/50 transition-colors">
                <Crosshair className="absolute w-8 h-8 text-ff-teal opacity-20" />
                <Flame className="w-6 h-6 text-ff-orange z-10 drop-shadow-[0_0_8px_rgba(255,69,0,0.8)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold leading-none tracking-wide text-white">
                  FREEFIRE<span className="text-ff-orange">HUB</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold leading-none mt-0.5">
                  #1 Updates & News
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-white'
                      : link.highlight
                      ? 'text-ff-orange hover:bg-ff-orange/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.highlight && <span className="mr-1.5">🔥</span>}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex items-center gap-2 bg-ff-teal/10 text-ff-teal hover:bg-ff-teal/20 px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors border border-ff-teal/20">
                <Bell className="w-4 h-4" />
                Notify Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-ff-dark"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider ${
                      location.pathname === link.path
                        ? 'bg-white/10 text-white'
                        : link.highlight
                        ? 'text-ff-orange bg-ff-orange/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {link.highlight && <span className="mr-2">🔥</span>}
                        {link.name}
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </div>
                  </Link>
                ))}
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-ff-teal/10 text-ff-teal hover:bg-ff-teal/20 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-colors border border-ff-teal/20">
                  <Bell className="w-4 h-4" />
                  Enable Push Notifications
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-ff-dark border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-ff-orange" />
                <span className="font-display text-2xl font-bold tracking-wide text-white">
                  FREEFIRE<span className="text-ff-orange">HUB</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm max-w-sm">
                The #1 destination for Free Fire game updates, daily active redeem codes, patch notes, and character tier lists. Powered by AI for real-time accuracy.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/codes" className="hover:text-ff-orange transition-colors">Today's Redeem Codes</Link></li>
                <li><Link to="/updates" className="hover:text-white transition-colors">OB48 Patch Notes</Link></li>
                <li><Link to="/characters" className="hover:text-white transition-colors">Character Tier List</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#0088cc] transition-colors flex items-center gap-2">Telegram Channel</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">YouTube Shorts</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-colors flex items-center gap-2">WhatsApp Group</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 FreeFire Hub. Not affiliated with Garena.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
