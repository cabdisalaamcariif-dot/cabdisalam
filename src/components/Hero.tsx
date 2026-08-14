import React from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  FolderGit2,
  Code2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Github,
  Linkedin,
  MessageSquareShare,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { profile, skills, projects } = usePortfolio();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Action */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Diyaar u ah Shaqooyinka Madaxa-bannaan & Kuwa Joogtada ah</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Asc, Waxaan ahay <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <Code2 className="w-6 h-6 text-emerald-400" />
                <span>{profile.title} & Khabiirka UI</span>
              </p>
            </div>

            {/* First-person Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.shortIntro}
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                id="hero-phone-pill"
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-mono">{profile.phone}</span>
              </a>
              <a
                id="hero-email-pill"
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>{profile.email}</span>
              </a>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Muqdisho, Soomaaliya</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>Eeg Mashaariicdayda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                id="hero-contact-btn"
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Ila Soo Xiriir</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ila Xiriir:</span>
              <a
                id="hero-whatsapp-link"
                href={`https://wa.me/252${profile.phone.replace(/^0+/, '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-500/20 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="WhatsApp Me"
              >
                <MessageSquareShare className="w-4 h-4" />
              </a>
              <a
                id="hero-github-link"
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-500/20 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-500/20 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Profile Card & Visual Stats */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Outer Decorative frame */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 opacity-30 blur-xl animate-pulse" />
              
              <div className="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 shadow-2xl backdrop-blur-xl space-y-5">
                
                {/* Photo with frame */}
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                  <img
                    id="hero-profile-image"
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // fallback to local photo if needed
                      (e.currentTarget as HTMLImageElement).src =
                        '/images/hhhh.jpeg';
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                      <p className="text-xs font-semibold text-slate-200">{profile.name}</p>
                      <p className="text-[10px] text-emerald-400 font-mono">{profile.title}</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                      {skills.length} Xirfadood
                    </div>
                  </div>
                </div>

                {/* Top Skills Quick Bar */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>Xirfadaha Muhiimka ah (Isku Xigxiga)</span>
                    <span className="text-emerald-400">90% — 40%</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {skills.map((skill) => (
                      <div
                        key={skill.id}
                        className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-2 text-center transition-all hover:border-emerald-500/40"
                      >
                        <div className="text-xs font-bold text-slate-200 truncate">{skill.name}</div>
                        <div className="text-[11px] font-mono text-emerald-400 font-semibold">{skill.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Facts list */}
                <div className="grid grid-cols-2 gap-2.5 pt-1 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400">Shaashadaha Ku Habboon</p>
                      <p className="text-xs font-semibold text-slate-200">Taleefan & Kumbuyuutar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400">Qalabka Casriga ah</p>
                      <p className="text-xs font-semibold text-slate-200">React & Tailwind</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
