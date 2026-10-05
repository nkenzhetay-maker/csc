import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Herkese açık (anon) anahtar — tarayıcıda bulunması güvenlidir; erişimi RLS kuralları belirler.
// Ayarlanmamışsa site gömülü yedek verilerle çalışır, panel "yapılandırılmadı" uyarısı gösterir.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey, { auth: { persistSession: true, autoRefreshToken: true } }) : null;
