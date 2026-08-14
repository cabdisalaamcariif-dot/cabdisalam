import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Education: React.FC = () => {
  const { education } = usePortfolio();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'University':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'Bootcamp':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      case 'Certification':
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'University':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Bootcamp':
        return 'bg-teal-500/10 text-teal-400 border-teal-500/30';
      case 'Certification':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'University':
        return 'Jaamacad';
      case 'Bootcamp':
        return 'Tababar Xooggan (Bootcamp)';
      case 'Certification':
        return 'Shahaado';
      default:
        return type;
    }
  };

  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Socdaalka Waxbarashada & Xirfadda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Waxbarashada & <span className="text-emerald-400">Shahaadooyinka</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Taariikhdayda waxbarasho, tababarrada gaarka ah ee dhisidda mareegaha, iyo shahaadooyinka farsamo ee la xaqiijiyay.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-800" />

          {education.map((item, index) => (
            <div
              key={item.id}
              id={`education-card-${item.id}`}
              className="relative flex flex-col sm:flex-row items-start gap-6 group"
            >
              {/* Timeline marker node */}
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 items-center justify-center shrink-0 z-10 shadow-lg group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                {getTypeIcon(item.type)}
              </div>

              {/* Education Card Content */}
              <div className="flex-1 w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-all duration-300 shadow-xl">
                
                {/* Card Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getTypeBadge(
                        item.type
                      )}`}
                    >
                      {getTypeName(item.type)}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400/90">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 shrink-0 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills acquired */}
                {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Xirfadaha & Aqoonaha La Bartay:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsAcquired.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-300"
                        >
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
