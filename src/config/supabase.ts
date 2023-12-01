import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

import { ToastContainer, toast } from 'react-toastify';
process.env.NEXT_PUBLIC_SUPABASE_URL,

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


function loginWithGoogle() {
  const { user, session, error } = supabase.auth.signIn({ provider: 'google' });

}





async function logout() {
  const { error } = await supabase.auth.signOut();
  return error;
}