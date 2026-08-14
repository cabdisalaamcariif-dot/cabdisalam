import React, { useState } from 'react';
import { Lock, KeyRound, ArrowLeft, ShieldCheck, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface AdminLoginProps {
  onCancel: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onCancel }) => {
  const { loginAdmin } = usePortfolio();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Fadlan geli erayga sirta ah ee maamulka.');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const success = loginAdmin(password);
      setIsLoading(false);
      if (!success) {
        setError('Erayga sirta ah waa qalad. Tusaale: "admin123"');
      }
    }, 400);
  };

  const handleQuickDemoFill = () => {
    setPassword('admin123');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onCancel}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ku Noqo Bogga</span>
          </button>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono text-[11px]">
            Maamulka v2.0
          </span>
        </div>

        {/* Lock Graphic */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            Maamulka Portfolio-ga
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Geli erayga sirta ah si aad u maamusho mashaariicda, xirfadaha, xogtaada shaqsiyeed, iyo fariimaha ku soo gaaray.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="admin-password"
              className="block text-xs font-bold uppercase tracking-wider text-slate-300"
            >
              Erayga Sirta ah ee Maamulka
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Geli erayga sirta ah..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-400 focus:outline-hidden focus:border-emerald-500 text-sm pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>Hubinayaa...</span>
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Fur Qaybta Maamulka</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Credentials Hint */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-xs text-slate-400">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-300">Furaha Tijaabada:</span>
            <button
              onClick={handleQuickDemoFill}
              className="text-emerald-400 hover:underline font-bold text-[11px] cursor-pointer"
            >
              Geli "admin123"
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            Isticmaal sirta <span className="font-mono text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded-sm">admin123</span> ama <span className="font-mono text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded-sm">admin</span>.
          </p>
        </div>

      </div>
    </div>
  );
};
