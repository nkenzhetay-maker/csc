import type { ReactNode, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { X } from 'lucide-react';

export const inputCls =
  'w-full px-3 py-2 rounded-lg border border-[#D0D8E4] bg-white font-body text-sm text-[#1E2A3E] focus:outline-none focus:border-[#0A5C8E] focus:ring-2 focus:ring-[#0A5C8E]/15';

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block min-w-0">
      <span className="block font-body text-xs font-medium text-[#5A6A7E] mb-1">{label}</span>
      {children}
      {hint && <span className="block font-body text-[11px] text-[#5A6A7E]/80 mt-1">{hint}</span>}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCls} ${props.className ?? ''}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputCls} ${props.className ?? ''}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} leading-relaxed ${props.className ?? ''}`} />;
}

export function Button({ variant = 'primary', className = '', ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'danger' }) {
  const v = {
    primary: 'bg-[#0A5C8E] text-white hover:bg-[#084a73] disabled:bg-[#0A5C8E]/50',
    ghost: 'bg-white text-[#1E2A3E] border border-[#D0D8E4] hover:border-[#0A5C8E] hover:text-[#0A5C8E]',
    danger: 'bg-white text-[#C0392B] border border-[#E8B4AE] hover:bg-[#C0392B] hover:text-white',
  }[variant];
  return (
    <button {...props}
      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg font-body text-sm font-medium transition-colors disabled:cursor-not-allowed ${v} ${className}`} />
  );
}

export function Modal({ title, onClose, children, footer, wide }:
  { title: string; onClose: () => void; children: ReactNode; footer: ReactNode; wide?: boolean }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#1E2A3E]/40 p-4 overflow-y-auto" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`w-full ${wide ? 'max-w-[860px]' : 'max-w-[640px]'} my-6 bg-white rounded-2xl shadow-2xl`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EEF2F7]">
          <h2 className="font-display font-bold text-lg text-[#1E2A3E]">{title}</h2>
          <button onClick={onClose} aria-label="Kapat" className="p-1.5 rounded-lg text-[#5A6A7E] hover:bg-[#F4F7FC]"><X size={18} /></button>
        </div>
        <div className="px-5 py-5">{children}</div>
        <div className="flex flex-wrap items-center justify-end gap-2 px-5 py-4 border-t border-[#EEF2F7] bg-[#F9FBFD] rounded-b-2xl">{footer}</div>
      </div>
    </div>
  );
}

export function Notice({ kind, children }: { kind: 'error' | 'ok' | 'info'; children: ReactNode }) {
  const c = {
    error: 'bg-[#FDECEA] text-[#9B2C20] border-[#F3C2BC]',
    ok: 'bg-[#E6F6EF] text-[#0B6B47] border-[#B5E2CF]',
    info: 'bg-[#EAF3FA] text-[#0A5C8E] border-[#C3DCEE]',
  }[kind];
  return <div className={`px-3 py-2 rounded-lg border font-body text-sm ${c}`}>{children}</div>;
}
