import React from 'react';
import {
  User,
  Lightbulb,
  Smartphone,
  Zap,
  BookOpen,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { profile } = usePortfolio();

  const highlights = [
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      title: 'Ku Habboon Taleefannada & Shaashadaha',
      description:
        'Waxaan dhisaa mareego si heersare ah uga shaqeeya dhammaan shaashadaha, laga bilaabo taleefannada gacanta ilaa kombuyuutarrada waaweyn.',
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-400" />,
      title: 'Koodh Nadiif ah & Xawaare Dheereeya',
      description:
        'Waxaan qoraa koodh nidaamsan oo sahlan in la kordhiyo, leh xawaare degdeg ah iyo hab-dhaqan fudud oo soo jiidasho leh.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      title: 'Barasho Joogto ah oo Tignoolajiyadeed',
      description:
        'Waxaan mar walba la socdaa heerarka ugu dambeeya ee web-ka, qaababka cusub ee React, iyo qalabka naqshadeynta casriga ah.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      title: 'Xallinta Caqabadaha Dhabta ah',
      description:
        'Waxaan fikradaha u beddelaa mareego dhab ah oo xalliya baahiyaha ganacsiga una fududeeya macaamiisha adeegsiga.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>I Baro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Igu <span className="text-emerald-400">Saabsan</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Faahfaahin ku saabsan taariikhdayda, xiisaha tignoolajiyada, iyo u heellanaanta dhisidda mareegaha casriga ah.
          </p>
        </div>

        {/* Main About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo & Quick Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-35 transition duration-300" />
              
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    id="about-profile-image"
                    src={profile.aboutPhotoUrl}
                    alt={`${profile.name} at work`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        '/images/hhhh.jpegj';
                    }}
                  />
                </div>
                
                {/* Overlay details */}
                <div className="p-5 bg-slate-950/95 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{profile.name}</h4>
                      <p className="text-xs text-emerald-400 font-medium">{profile.title}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                      Diyaar u ah Shaqo
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
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
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3.5 text-center">
                <p className="text-2xl font-black text-emerald-400 font-mono">100%</p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">U Heellanaan</p>
              </div>
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3.5 text-center">
                <p className="text-2xl font-black text-teal-400 font-mono">5+</p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Xirfadaha Muhiimka ah</p>
              </div>
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3.5 text-center">
                <p className="text-2xl font-black text-indigo-400 font-mono">14+</p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Mashaariic La Dhisay</p>
              </div>
            </div>

          </div>

          {/* Right Column: First-Person Story & Feature Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span>Qofka Aan Ahay & Shaqadayda</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>{profile.bioParagraph1}</p>
                <p>{profile.bioParagraph2}</p>
                <p>{profile.bioParagraph3}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                  #WebDevelopment
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-teal-400">
                  #FrontendEngineer
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">
                  #ReactDeveloper
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400">
                  #TailwindCSS
                </span>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
