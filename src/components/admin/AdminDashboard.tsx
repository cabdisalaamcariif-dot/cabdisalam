import React, { useState } from 'react';
import {
  LayoutDashboard,
  Layers,
  Wrench,
  User,
  GraduationCap,
  Mail,
  Settings,
  LogOut,
  ExternalLink,
  RotateCcw,
  Sparkles,
  CheckCircle,
  Eye,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectManager } from './ProjectManager';
import { SkillManager } from './SkillManager';
import { AboutManager } from './AboutManager';
import { EducationManager } from './EducationManager';
import { MessagesManager } from './MessagesManager';

interface AdminDashboardProps {
  onClose: () => void;
}

type TabType = 'projects' | 'skills' | 'about' | 'education' | 'messages' | 'settings';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const {
    profile,
    projects,
    skills,
    education,
    messages,
    logoutAdmin,
    resetToDefaults,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [resetConfirm, setResetConfirm] = useState(false);

  const unreadMessagesCount = messages.filter((m) => !m.read).length;

  const handleLogout = () => {
    logoutAdmin();
    onClose();
  };

  const handleResetData = () => {
    resetToDefaults();
    setResetConfirm(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col lg:flex-row overflow-hidden">
      
      {/* Admin Sidebar */}
      <aside className="w-full lg:w-72 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between shrink-0">
        
        {/* Sidebar Header */}
        <div>
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center font-bold text-sm text-emerald-400">
                  CC
                </div>
              </div>
              <div>
                <h1 className="font-bold text-slate-100 text-sm">{profile.name}</h1>
                <p className="text-[11px] text-emerald-400 font-mono">Portfolio Admin</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="lg:hidden p-2 text-xs bg-slate-800 rounded-lg text-slate-300"
            >
              Close
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="p-3 space-y-1">
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'projects'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4" />
                <span>Projects</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-950 text-[10px] font-mono text-slate-400">
                {projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'skills'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4" />
                <span>Skills (Ordered)</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-950 text-[10px] font-mono text-slate-400">
                {skills.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'about'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <User className="w-4 h-4" />
                <span>About & Bio</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'education'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-950 text-[10px] font-mono text-slate-400">
                {education.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'messages'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Messages Inbox</span>
              </div>
              {unreadMessagesCount > 0 ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px]">
                  {unreadMessagesCount} new
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-slate-950 text-[10px] font-mono text-slate-400">
                  {messages.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'settings'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4" />
                <span>Settings & Reset</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>View Live Portfolio</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full py-2.5 px-3 rounded-xl bg-rose-950/30 hover:bg-rose-900/50 border border-rose-900/40 text-rose-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout Admin</span>
          </button>
        </div>

      </aside>

      {/* Main Admin Content View */}
      <main className="flex-1 overflow-y-auto bg-slate-950 p-4 sm:p-8 space-y-6">
        
        {/* Top Mini Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Projects</p>
            <p className="text-2xl font-black font-mono text-emerald-400 mt-1">{projects.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Skills</p>
            <p className="text-2xl font-black font-mono text-teal-400 mt-1">{skills.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Education Records</p>
            <p className="text-2xl font-black font-mono text-indigo-400 mt-1">{education.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Inquiries Received</p>
            <p className="text-2xl font-black font-mono text-amber-400 mt-1">{messages.length}</p>
          </div>
        </div>

        {/* Tab Components */}
        {activeTab === 'projects' && <ProjectManager />}
        {activeTab === 'skills' && <SkillManager />}
        {activeTab === 'about' && <AboutManager />}
        {activeTab === 'education' && <EducationManager />}
        {activeTab === 'messages' && <MessagesManager />}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-400" />
                <span>Portfolio System Data & Backup</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                All changes made in this control panel persist securely in browser storage. You can restore original default portfolio values at any time.
              </p>

              <div className="pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-rose-300">Reset to Default Portfolio Data</h4>
                    <p className="text-xs text-rose-200/70">
                      Restores initial skills (HTML 90%, CSS 70%, JS 60%, React 50%, Tailwind 40%), original projects, and profile.
                    </p>
                  </div>

                  {resetConfirm ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleResetData}
                        className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs"
                      >
                        Confirm Reset
                      </button>
                      <button
                        onClick={() => setResetConfirm(false)}
                        className="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setResetConfirm(true)}
                      className="px-4 py-2.5 rounded-xl bg-rose-900/50 hover:bg-rose-800/60 text-rose-200 border border-rose-800 text-xs font-bold transition-colors flex items-center gap-2 shrink-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Portfolio Data</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
