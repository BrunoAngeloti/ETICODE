import { createClient } from '@supabase/supabase-js'

const options = {
    db: {
        schema: 'public',
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    },
    global: {
        headers: { 'x-my-custom-header': 'eticode' },
    },
}


export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    options
)

// Variável para armazenar o token de acesso atual
let currentAccessToken: any = null;
