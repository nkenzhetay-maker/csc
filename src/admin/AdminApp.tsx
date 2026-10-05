import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Pill, Newspaper, Inbox, LogOut, ExternalLink, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Button, Field, Input, Notice } from './ui';
import IlacAdmin from './IlacAdmin';
import BlogAdmin from './BlogAdmin';

type Tab = 'ilac' | 'blog' | 'talep';
// Supabase davet / şifre sıfırlama bağlantısı ile gelindiyse önce yeni şifre belirletilir.
const cameForPassword = /type=(recovery|invite)/.test(window.location.hash);

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [needPassword, setNeedPassword] = useState(cameForPassword);
  const [tab, setTab] = useState<Tab>('ilac');

  useEffect(() => {
    if (!supabase) { setReady(true); return; }
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      if (event === 'PASSWORD_RECOVERY') setNeedPassword(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase || !session) { setIsAdmin(null); return; }
    supabase.rpc('is_admin').then(({ data, error }) => setIsAdmin(!error && data === true));
  }, [session]);

  if (!supabase) {
    return <Center><Notice kind="error">Panel henüz veritabanına bağlanmadı (Supabase ayarları eksik).</Notice></Center>;
  }
  if (!ready) return <Center><p className="font-body text-sm text-[#5A6A7E]">Yükleniyor…</p></Center>;
  if (!session) return <Login />;
  if (needPassword) return <SetPassword onDone={() => { setNeedPassword(false); history.replaceState(null, '', window.location.pathname); }} />;
  if (isAdmin === null) return <Center><p className="font-body text-sm text-[#5A6A7E]">Yetki kontrol ediliyor…</p></Center>;
  if (!isAdmin) {
    return (
      <Center>
        <Notice kind="error">Bu hesabın panel yetkisi yok ({session.user.email}).</Notice>
        <Button variant="ghost" className="mt-4" onClick={() => supabase!.auth.signOut()}>Çıkış yap</Button>
      </Center>
    );
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'ilac', label: 'İlaçlar', icon: <Pill size={16} /> },
    { id: 'blog', label: 'Blog', icon: <Newspaper size={16} /> },
    { id: 'talep', label: 'Talepler', icon: <Inbox size={16} /> },
  ];

  return (
    <div className="min-h-[100dvh] bg-[#F4F7FC]">
      <header className="sticky top-0 z-30 bg-[#0A5C8E] text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-14 flex items-center gap-4">
          <img src="/logo-csc-white.png" alt="CSC" className="h-7 w-auto" />
          <span className="font-display font-bold text-[15px] hidden sm:inline">Yönetim Paneli</span>
          <nav className="flex gap-1 ml-2 md:ml-6 overflow-x-auto">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body text-sm whitespace-nowrap transition-colors ${tab === t.id ? 'bg-white text-[#0A5C8E] font-semibold' : 'text-white/85 hover:bg-white/10'}`}>
                {t.icon}{t.label}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <span className="font-body text-xs text-white/75 hidden md:inline">{session.user.email}</span>
            <button onClick={() => supabase!.auth.signOut()} className="inline-flex items-center gap-1 font-body text-sm text-white/85 hover:text-white" title="Çıkış">
              <LogOut size={16} /><span className="hidden sm:inline">Çıkış</span>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-6">
        {tab === 'ilac' && <IlacAdmin />}
        {tab === 'blog' && <BlogAdmin />}
        {tab === 'talep' && <Talepler />}
      </main>
    </div>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return <div className="min-h-[100dvh] bg-[#F4F7FC] flex flex-col items-center justify-center p-4">{children}</div>;
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setError('');
    const { error } = await supabase!.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) setError('E-posta veya şifre hatalı.');
  };

  return (
    <Center>
      <form onSubmit={submit} className="w-full max-w-[380px] bg-white border border-[#D0D8E4] rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col items-center gap-2 mb-2">
          <div className="w-11 h-11 rounded-full bg-[#0A5C8E]/10 text-[#0A5C8E] flex items-center justify-center"><Lock size={20} /></div>
          <h1 className="font-display font-bold text-xl text-[#1E2A3E]">CSC Yönetim Paneli</h1>
        </div>
        {error && <Notice kind="error">{error}</Notice>}
        <Field label="E-posta"><Input type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} /></Field>
        <Field label="Şifre"><Input type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} /></Field>
        <Button type="submit" disabled={busy} className="w-full">{busy ? 'Giriş yapılıyor…' : 'Giriş yap'}</Button>
      </form>
    </Center>
  );
}

function SetPassword({ onDone }: { onDone: () => void }) {
  const [password, setPassword] = useState('');
  const [again, setAgain] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 10) { setError('Şifre en az 10 karakter olmalı.'); return; }
    if (password !== again) { setError('Şifreler eşleşmiyor.'); return; }
    setBusy(true); setError('');
    const { error } = await supabase!.auth.updateUser({ password });
    setBusy(false);
    if (error) setError('Şifre kaydedilemedi: ' + error.message); else onDone();
  };

  return (
    <Center>
      <form onSubmit={submit} className="w-full max-w-[380px] bg-white border border-[#D0D8E4] rounded-2xl p-6 shadow-sm space-y-4">
        <h1 className="font-display font-bold text-xl text-[#1E2A3E] text-center">Yeni şifre belirleyin</h1>
        {error && <Notice kind="error">{error}</Notice>}
        <Field label="Yeni şifre" hint="En az 10 karakter."><Input type="password" autoComplete="new-password" required value={password} onChange={e => setPassword(e.target.value)} /></Field>
        <Field label="Yeni şifre (tekrar)"><Input type="password" autoComplete="new-password" required value={again} onChange={e => setAgain(e.target.value)} /></Field>
        <Button type="submit" disabled={busy} className="w-full">{busy ? 'Kaydediliyor…' : 'Şifreyi kaydet'}</Button>
      </form>
    </Center>
  );
}

function Talepler() {
  return (
    <div className="max-w-[720px] bg-white border border-[#D0D8E4] rounded-2xl p-6">
      <h2 className="font-display font-bold text-xl text-[#1E2A3E] mb-2">İletişim talepleri</h2>
      <p className="font-body text-sm text-[#5A6A7E] leading-relaxed mb-4">
        Sitedeki iletişim formundan gelen talepler <strong>info@csc-tr.com</strong> adresine e-posta olarak iletilir
        ve Netlify Forms'ta saklanır. Tüm talepleri oradan görebilir, dışa aktarabilir veya silebilirsiniz.
      </p>
      <div className="flex flex-wrap gap-2">
        <a href="https://app.netlify.com/projects/csc-tr/forms" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A5C8E] text-white font-body text-sm font-medium hover:bg-[#084a73]">
          Netlify Forms'u aç <ExternalLink size={14} />
        </a>
        <a href="https://spacemail.com/login" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#D0D8E4] text-[#1E2A3E] font-body text-sm font-medium hover:border-[#0A5C8E]">
          info@ gelen kutusu <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
