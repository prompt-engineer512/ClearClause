import React from 'react';
import { 
  Shield, 
  History as HistoryIcon, 
  Settings as SettingsIcon, 
  Info, 
  Mail, 
  User, 
  ArrowLeft
} from 'lucide-react';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  hasActiveAnalysis: boolean;
  onResetAnalysis?: () => void;
  historyCount: number;
  user: { email: string; name: string } | null;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  hasActiveAnalysis,
  onResetAnalysis,
  historyCount,
  user,
  onOpenAuth
}) => {
  return (
    <header className="sticky top-0 z-40 w-full h-[60px] border-b border-[#2a2e35] bg-[#181b1f]/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-6">
          <button
            id="nav-brand-btn"
            onClick={() => {
              setActivePage('home');
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="ClearClause Logo"
              className="w-7 h-7 rounded-md object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white font-['Space_Grotesk']">
                ClearClause
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-[#121417] text-[#94a3b8] border border-[#2a2e35]">
                AI Legal
              </span>
            </div>
          </button>

          {/* If inside an active analysis on home page, show quick "New Analysis" link */}
          {hasActiveAnalysis && activePage === 'home' && onResetAnalysis && (
            <button
              id="nav-new-analysis-btn"
              onClick={onResetAnalysis}
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-[#94a3b8] hover:text-white px-2.5 py-1 rounded-md bg-[#121417] border border-[#2a2e35] hover:border-slate-600 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span>New Analysis</span>
            </button>
          )}
        </div>

        {/* Center/Right Nav Links */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <button
            id="nav-analysis-btn"
            onClick={() => setActivePage('home')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'home'
                ? 'text-[#3b82f6] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f1f5f9]'
            }`}
          >
            Analysis
          </button>

          <button
            id="nav-history-btn"
            onClick={() => setActivePage('history')}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'history'
                ? 'text-[#3b82f6] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f1f5f9]'
            }`}
          >
            <span>History</span>
            {historyCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[10px] font-semibold rounded-full bg-[#121417] text-[#3b82f6] border border-[#2a2e35]">
                {historyCount}
              </span>
            )}
          </button>

          <button
            id="nav-about-btn"
            onClick={() => setActivePage('about')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'about'
                ? 'text-[#3b82f6] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f1f5f9]'
            }`}
          >
            About
          </button>

          <button
            id="nav-contact-btn"
            onClick={() => setActivePage('contact')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'contact'
                ? 'text-[#3b82f6] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f1f5f9]'
            }`}
          >
            Contact
          </button>

          <button
            id="nav-settings-btn"
            onClick={() => setActivePage('settings')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'settings'
                ? 'text-[#3b82f6] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f1f5f9]'
            }`}
          >
            Settings
          </button>

          {/* User Auth or Profile Button */}
          <div className="ml-2 pl-2 border-l border-[#2a2e35] flex items-center">
            {user ? (
              <button
                id="nav-profile-btn"
                onClick={() => setActivePage('settings')}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#f1f5f9] bg-[#121417] hover:bg-[#1c1f26] border border-[#2a2e35] rounded-full transition cursor-pointer"
                title={user.email}
              >
                <div className="w-5 h-5 rounded-full bg-[#3b82f6] flex items-center justify-center text-white text-[10px] font-bold uppercase">
                  {user.name ? user.name[0] : user.email[0]}
                </div>
                <span className="hidden md:inline max-w-[110px] truncate text-[#94a3b8]">
                  {user.name || user.email.split('@')[0]}
                </span>
              </button>
            ) : (
              <button
                id="nav-login-btn"
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#3b82f6] hover:bg-blue-600 rounded-lg transition shadow-sm cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
};
