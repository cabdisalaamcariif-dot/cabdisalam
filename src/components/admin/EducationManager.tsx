import React, { useState } from 'react';
import { GraduationCap, Plus, Edit2, Trash2, Calendar, Check, X } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Education } from '../../types';

export const EducationManager: React.FC = () => {
  const { education, addEducation, updateEducation, deleteEducation } = usePortfolio();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEduId, setEditingEduId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Education, 'id'>>({
    institution: '',
    degree: '',
    period: '2023 — 2024',
    description: '',
    skillsAcquired: ['HTML5', 'CSS3', 'JavaScript'],
    type: 'University',
  });

  const [skillInput, setSkillInput] = useState('');

  const handleOpenAddModal = () => {
    setEditingEduId(null);
    setFormData({
      institution: '',
      degree: '',
      period: '2023 — 2024',
      description: '',
      skillsAcquired: ['Modern Web Architecture', 'React.js'],
      type: 'University',
    });
    setSkillInput('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: Education) => {
    setEditingEduId(item.id);
    setFormData({
      institution: item.institution,
      degree: item.degree,
      period: item.period,
      description: item.description,
      skillsAcquired: item.skillsAcquired,
      type: item.type,
    });
    setSkillInput('');
    setIsModalOpen(true);
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skillsAcquired.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        skillsAcquired: [...formData.skillsAcquired, skillInput.trim()],
      });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skillsAcquired: formData.skillsAcquired.filter((s) => s !== skillToRemove),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.institution.trim() || !formData.degree.trim()) return;

    if (editingEduId) {
      updateEducation(editingEduId, formData);
    } else {
      addEducation(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>Education & Certification Manager</span>
          </h2>
          <p className="text-xs text-slate-400">
            Manage academic degrees, bootcamp credentials, and online courses.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors self-start sm:self-center"
        >
          <Plus className="w-4 h-4" />
          <span>Add Education Record</span>
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-emerald-400">
                  {item.type}
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-1">{item.degree}</h3>
                <p className="text-xs font-semibold text-teal-400">{item.institution}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.period}
                </span>

                <button
                  onClick={() => handleOpenEditModal(item)}
                  className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  title="Edit"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => deleteEducation(item.id)}
                  className="p-1.5 rounded-lg bg-slate-950 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-800"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-400">{item.description}</p>

            {item.skillsAcquired && item.skillsAcquired.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.skillsAcquired.map((s, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-sm bg-slate-950 border border-slate-800 text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">
                {editingEduId ? 'Edit Education Record' : 'Add Education Record'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Degree / Certificate Title *</label>
                <input
                  type="text"
                  required
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  placeholder="e.g. Diploma in Computer Science"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Institution / Academy *</label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. University of Somalia"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Period / Years</label>
                  <input
                    type="text"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    placeholder="2021 — 2024"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Credential Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100"
                >
                  <option value="University">University</option>
                  <option value="Bootcamp">Bootcamp</option>
                  <option value="Certification">Certification</option>
                  <option value="Self-Taught">Self-Taught</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Overview / Highlights</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Key areas covered, software engineering fundamentals..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 resize-none"
                />
              </div>

              {/* Skills acquired */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Key Competencies</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                    placeholder="e.g. JavaScript, Algorithms..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-3 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {formData.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-rose-400"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
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
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
