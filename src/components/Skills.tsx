import React, { useState } from 'react';
import {
  Wrench,
  Sparkles,
  Code,
  Layers,
  Terminal,
  Cpu,
  Palette,
  CheckCircle,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Sorted strictly from highest percentage to lowest
  const sortedSkills = [...skills].sort((a, b) => b.percentage - a.percentage);

  const getSkillLevel = (percentage: number) => {
    if (percentage >= 85) return { label: 'Khabiir / Sare', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (percentage >= 70) return { label: 'Heer Sare', color: 'text-teal-400 bg-teal-500/10 border-teal-500/30' };
    if (percentage >= 55) return { label: 'Xirfadle', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
    if (percentage >= 45) return { label: 'Dhexdhexaad', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' };
    return { label: 'Aasaas / Barasho Socota', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
  };

  const getProgressBarColor = (percentage: number) => {
    if (percentage >= 80) return 'from-emerald-500 to-teal-400';
    if (percentage >= 65) return 'from-teal-500 to-cyan-400';
    if (percentage >= 55) return 'from-cyan-500 to-indigo-400';
    if (percentage >= 45) return 'from-indigo-500 to-blue-400';
    return 'from-blue-500 to-teal-400';
  };

  const additionalTools = [
    { name: 'Git & GitHub', category: 'Maareynta Koodhka', desc: 'Laamaha, Keydinta Koodhka & Wada-shaqeynta' },
    { name: 'Naqshadeynta Responsive-ka', category: 'Qaab-dhismeedka UI', desc: 'U Habeynta Shaashadaha Kala Duwan & Media Queries' },
    { name: 'Adeegsiga DOM & APIs', category: 'Farsamada Web-ka', desc: 'Fetch API, Async/Await & Maareynta Dhacdooyinka' },
    { name: 'VS Code & DevTools', category: 'Qalabka Shaqada', desc: 'Koodh-qorista Casriga ah, Cilad-bixinta & Xawaaraha' },
    { name: 'Mabaadi\'da UI / UX', category: 'Naqshadeynta', desc: 'Nidaaminta Muuqaalka, Farta & Fududaynta Isticmaalka' },
    { name: 'Hab-dhiska Koodhka Nadiifka ah', category: 'Injineernimada', desc: 'Koodh Nidaamsan, Dib-u-isticmaalka & Heerarka Sare' },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Awoodaha Farsamada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Xirfadahayga & <span className="text-emerald-400">Karti-farsameedkayga</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Waxay u habeysan yihiin si toos ah heerka ugu sarreeya ilaa kan socda, iyagoo muujinaya aqoontayda dhabta ah ee koodh-qorista.
          </p>
        </div>

        {/* Main Skills Grid with Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Progress Bars Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Xirfadaha Muhiimka ah (Heerka Aqoonta)
              </span>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Hoos u socod 90% → 40%
              </span>
            </div>

            {sortedSkills.map((skill, index) => {
              const level = getSkillLevel(skill.percentage);
              const gradient = getProgressBarColor(skill.percentage);

              return (
                <div
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3.5 hover:border-slate-700 transition-all duration-200 group shadow-lg"
                >
                  {/* Top line: Name, Level, and Percentage */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-sm text-slate-200 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-100">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${level.color}`}
                      >
                        {level.label}
                      </span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 shadow-sm`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Skill Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Workflow, Tools & Practices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tech Stack Summary Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-lg">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-400" />
                <span>Habka Shaqada & Qalabka Horumarinta</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Marka laga reebo luqadaha aasaasiga ah ee frontend-ka, waxaan adeegsadaa qalabka ugu casrisan si aan u bixiyo xalal lagu kalsoonaan karo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {additionalTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-200">{tool.name}</h4>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Roadmap Card */}
            <div className="bg-gradient-to-br from-emerald-950/30 via-slate-900/90 to-slate-900/90 border border-emerald-500/20 rounded-2xl p-6 space-y-3.5 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Halka aan Hiigsanayo & Barashada Cusub</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Waxaan hadda si firfircoon u sii baranayaa Next.js, TypeScript, xiriirinta server-ka (Full-Stack APIs), iyo nidaamyada keydka xogta si aan u noqdo injineer dhammeystiran.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                  ⚡ TypeScript
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                  ▲ Next.js App Router
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                  🗄️ Node.js & REST
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
