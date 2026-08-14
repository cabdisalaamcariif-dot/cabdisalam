import React from 'react';
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  MessageSquareShare,
  Twitter,
  Heart,
  ArrowUp,
  Lock,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { profile, setIsAdminViewOpen } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Bogga Hore', href: '#home' },
    { name: 'Igu Saabsan', href: '#about' },
    { name: 'Xirfadaha', href: '#skills' },
    { name: 'Mashaariicda', href: '#projects' },
    { name: 'Waxbarashada', href: '#education' },
    { name: 'Xiriirka', href: '#contact' },
  ];

  return (
    <footer id="portfolio-footer" className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center font-bold text-sm text-emerald-400">
                  CC
                </div>
              </div>
              <span className="font-extrabold text-slate-100 text-lg">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Khabiir ku takhasusay dhisidda mareegaha casriga ah ee xawaaraha sarreeya, isagoo adeegsanaya HTML, CSS, JavaScript, React, iyo Tailwind CSS.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/252${profile.phone.replace(/^0+/, '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="WhatsApp"
              >
                <MessageSquareShare className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Qaybaha Mareegta
            </p>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Xiriir Toos ah
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-emerald-400 transition-colors font-mono">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-emerald-400 transition-colors truncate">
                  {profile.email}
                </a>
              </div>
              <p className="text-slate-400 pt-1">
                {profile.location}
              </p>
            </div>
          </div>

          {/* Back to top & Tech Stack */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Xirfadaha Muhiimka ah
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">HTML 90%</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">CSS 70%</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">JS 60%</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">React 50%</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Tailwind 40%</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>Ku Noqo Kor</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">{profile.name}</span>. Dhammaan xuquuqda way dhowran yihiin.
          </p>
          
          <div className="flex items-center gap-4">
            <span>Waxaa lagu dhisay React & Tailwind CSS</span>
            
            {/* Discreet Admin entry point (secure icon) */}
            <button
              id="admin-secret-trigger"
              onClick={() => setIsAdminViewOpen(true)}
              className="text-slate-400 hover:text-slate-400 transition-colors p-1 rounded-sm cursor-pointer"
              title="Qaybta Maamulka"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
