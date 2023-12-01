import { BasicLayout } from '@/layout/BasicLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionContextProvider,SupabaseClient } from '@supabase/auth-helpers-react'
import { supabase } from '@/lib/initSupabase'
import { UserProvider } from '@/context/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider supabaseClient={supabase as SupabaseClient}>
      <UserProvider>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </UserProvider>
    </SessionContextProvider>
  )
}
