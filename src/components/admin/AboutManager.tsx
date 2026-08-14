import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Image as ImageIcon, CheckCircle, Save, Sparkles } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const AboutManager: React.FC = () => {
  const { profile, updateProfile } = usePortfolio();

  const [formData, setFormData] = useState({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const photoPresets = [
    {
      name: 'Cabdisalaam Portrait (Primary)',
      url: '/images/hhhh.jpeg',
    },
    {
      name: 'Cabdisalaam Workspace (About)',
      url: '/images/hhhh.jpeg',
    },
    {
      name: 'Coding & Terminal Desk',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'Minimalist Workspace',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-400" />
            <span>Profile & Bio Content Editor</span>
          </h2>
          <p className="text-xs text-slate-400">
            Edit your personal biography, contact numbers, email address, and imagery.
          </p>
        </div>

        {savedSuccess && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold animate-fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Profile updated successfully!</span>
          </div>
        )}
      </div>

      {/* Main Edit Form */}
      <form onSubmit={handleSave} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
        
        {/* Core Identity */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
            1. Core Identity & Titles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Primary Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Subtitle / Tagline</label>
              <input
                type="text"
                value={formData.subTitle}
                onChange={(e) => setFormData({ ...formData, subTitle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
            2. Contact Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* First Person Bio Paragraphs */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
            3. About Me Story (Written in First Person)
          </h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Hero Section Short Intro</label>
              <textarea
                rows={2}
                value={formData.shortIntro}
                onChange={(e) => setFormData({ ...formData, shortIntro: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">About Me Paragraph 1 (Introduction & Tech Origin)</label>
              <textarea
                rows={3}
                value={formData.bioParagraph1}
                onChange={(e) => setFormData({ ...formData, bioParagraph1: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">About Me Paragraph 2 (Frontend Focus & Specialization)</label>
              <textarea
                rows={3}
                value={formData.bioParagraph2}
                onChange={(e) => setFormData({ ...formData, bioParagraph2: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">About Me Paragraph 3 (Vision & Future Horizons)</label>
              <textarea
                rows={2}
                value={formData.bioParagraph3}
                onChange={(e) => setFormData({ ...formData, bioParagraph3: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Photos & Presets */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
            4. Photos & Imagery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400">Hero Avatar Photo URL</label>
              <input
                type="text"
                value={formData.avatarUrl}
                onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img src={formData.avatarUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400">About Section Photo URL</label>
              <input
                type="text"
                value={formData.aboutPhotoUrl}
                onChange={(e) => setFormData({ ...formData, aboutPhotoUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
              />
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img src={formData.aboutPhotoUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="pt-1 space-y-1">
            <span className="text-[11px] text-slate-400">Quick photo presets:</span>
            <div className="flex flex-wrap gap-1.5">
              {photoPresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, avatarUrl: preset.url, aboutPhotoUrl: preset.url })}
                  className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 hover:border-emerald-500/50 text-[11px] text-slate-300"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile Updates</span>
          </button>
        </div>

      </form>

    </div>
  );
};
