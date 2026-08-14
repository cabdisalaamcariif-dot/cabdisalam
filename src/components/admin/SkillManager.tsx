import React, { useState } from 'react';
import {
  Wrench,
  Plus,
  Edit2,
  Trash2,
  TrendingUp,
  Sparkles,
  Check,
  X,
  RotateCcw,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Skill } from '../../types';
import { initialSkills } from '../../data/initialData';

export const SkillManager: React.FC = () => {
  const { skills, addSkill, updateSkill, deleteSkill } = usePortfolio();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Skill, 'id'>>({
    name: '',
    percentage: 80,
    category: 'Core Language',
    description: '',
    color: '#10b981',
  });

  const handleOpenAddModal = () => {
    setEditingSkillId(null);
    setFormData({
      name: '',
      percentage: 75,
      category: 'Framework',
      description: '',
      color: '#10b981',
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (skill: Skill) => {
    setEditingSkillId(skill.id);
    setFormData({
      name: skill.name,
      percentage: skill.percentage,
      category: skill.category,
      description: skill.description,
      color: skill.color,
    });
    setIsModalOpen(true);
  };

  const handleSaveSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingSkillId) {
      updateSkill(editingSkillId, formData);
    } else {
      addSkill(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-emerald-400" />
            <span>Skill & Proficiency Manager</span>
          </h2>
          <p className="text-xs text-slate-400">
            Skills are automatically ordered from highest to lowest percentage on the public portfolio.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors self-start sm:self-center"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Skill</span>
        </button>
      </div>

      {/* Skills List */}
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-colors"
          >
            {/* Left: Rank, Name, Bar & Category */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-300 flex items-center justify-center">
                  #{index + 1}
                </span>
                <span className="font-bold text-slate-100 text-base">{skill.name}</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] font-semibold text-slate-400 border border-slate-800">
                  {skill.category}
                </span>
              </div>

              {/* Progress bar preview */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                <span className="font-mono font-bold text-emerald-400 text-sm">
                  {skill.percentage}%
                </span>
              </div>

              <p className="text-xs text-slate-400 line-clamp-1">{skill.description}</p>
            </div>

            {/* Right: Quick % Slider & Action Buttons */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => updateSkill(skill.id, { percentage: Math.max(5, skill.percentage - 5) })}
                  className="px-2 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono hover:bg-slate-800 text-slate-300"
                  title="Decrease 5%"
                >
                  -5%
                </button>
                <button
                  onClick={() => updateSkill(skill.id, { percentage: Math.min(100, skill.percentage + 5) })}
                  className="px-2 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono hover:bg-slate-800 text-slate-300"
                  title="Increase 5%"
                >
                  +5%
                </button>
              </div>

              <button
                onClick={() => handleOpenEditModal(skill)}
                className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800"
                title="Edit Skill Details"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => deleteSkill(skill.id)}
                className="p-2 rounded-lg bg-slate-950 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-800"
                title="Delete Skill"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">
                {editingSkillId ? 'Edit Skill' : 'Add New Skill'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSkill} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Skill Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Next.js, TypeScript, Vue..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
                />
              </div>

              {/* Percentage with Interactive Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">Proficiency Percentage</label>
                  <span className="font-mono font-bold text-emerald-400 text-sm">{formData.percentage}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={formData.percentage}
                  onChange={(e) => setFormData({ ...formData, percentage: parseInt(e.target.value) })}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100"
                >
                  <option value="Core Language">Core Language (HTML, CSS, JS...)</option>
                  <option value="Framework">Framework / Library (React, Vue...)</option>
                  <option value="Styling">Styling (Tailwind, SASS...)</option>
                  <option value="Tool">Tool / Environment (Git, Vite...)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Short explanation of practical competencies..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
                >
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
