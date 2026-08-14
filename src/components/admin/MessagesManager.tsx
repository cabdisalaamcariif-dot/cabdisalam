import React, { useState } from 'react';
import {
  Mail,
  CheckCircle2,
  Trash2,
  Reply,
  Clock,
  User,
  Inbox,
  AlertCircle,
  Check,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export const MessagesManager: React.FC = () => {
  const { messages, markMessageRead, markMessageReplied, deleteMessage } = usePortfolio();
  const [filter, setFilter] = useState<'all' | 'unread' | 'replied'>('all');

  const filteredMessages = messages.filter((msg) => {
    if (filter === 'unread') return !msg.read;
    if (filter === 'replied') return msg.replied;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Mail className="w-5 h-5 text-emerald-400" />
            <span>Contact Inquiries Inbox</span>
          </h2>
          <p className="text-xs text-slate-400">
            Messages submitted by visitors via the portfolio contact form.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
              filter === 'all'
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
          >
            All ({messages.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
              filter === 'unread'
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
          >
            Unread ({unreadCount})
          </button>
          <button
            onClick={() => setFilter('replied')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
              filter === 'replied'
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
          >
            Replied ({messages.filter((m) => m.replied).length})
          </button>
        </div>
      </div>

      {/* Messages List */}
      {filteredMessages.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400">
            <Inbox className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-200">No Messages Found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            When visitors send messages through your contact form, they will appear here with full details.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-slate-900 border rounded-2xl p-5 sm:p-6 space-y-4 transition-all ${
                !msg.read ? 'border-emerald-500/50 shadow-md shadow-emerald-500/5' : 'border-slate-800'
              }`}
            >
              {/* Message Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {!msg.read && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">
                        New
                      </span>
                    )}
                    {msg.replied && (
                      <span className="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase">
                        Replied
                      </span>
                    )}
                    <h3 className="text-base font-bold text-slate-100">{msg.subject}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-400" />
                      {msg.name}
                    </span>
                    <span>&bull;</span>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-teal-400 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono self-start sm:self-center">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{msg.date}</span>
                </div>
              </div>

              {/* Message Body */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                {msg.message}
              </div>

              {/* Message Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  {!msg.read ? (
                    <button
                      onClick={() => markMessageRead(msg.id)}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-emerald-400 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Mark as Read</span>
                    </button>
                  ) : (
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Read</span>
                    </span>
                  )}

                  <button
                    onClick={() => markMessageReplied(msg.id)}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-teal-400 text-xs font-semibold"
                  >
                    {msg.replied ? 'Mark as Pending' : 'Mark as Replied'}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(
                      msg.subject
                    )}&body=Hi ${encodeURIComponent(msg.name)},\n\nThank you for reaching out to me!`}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Reply className="w-3.5 h-3.5" />
                    <span>Reply via Email</span>
                  </a>

                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="p-1.5 rounded-lg bg-slate-950 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-800"
                    title="Delete Message"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
