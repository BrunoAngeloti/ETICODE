import { supabase } from '@/lib/initSupabase';
import { User } from '@supabase/supabase-js';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface UserContextProps {
    userInfo: User | null;
    signOut: () => Promise<void>;
    loading: boolean;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: any) => {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const allowedDomains = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com"]

    async function signOut() {
        await supabase?.auth.signOut()
    }

    function setLoadingFalse(interval?: number) {
        setInterval(() => {
            setLoading(false)
        }, interval || 2000)
    }

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase?.auth.getUser();

            if (error) {
                console.error('Error fetching user', error);
                setLoadingFalse()
                return;
            }

            if (data?.user) {
                if (!allowedDomains.some(domain => data.user?.email?.endsWith(domain))) {
                    await signOut()
                }
                else {
                    if (userInfo?.id !== data.user.id) {
                        setUserInfo(data.user)
                    }
                }
                setLoadingFalse()
            }
        }

        const setupAuthListener = () => {
            supabase?.auth.onAuthStateChange((event) => {
                if (event === 'SIGNED_OUT') {
                    setUserInfo(null)
                    window.location.href = '/'
                } else {
                    fetchUser();
                }
            })
        }

        fetchUser();
        setupAuthListener();
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, signOut, loading }}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserInfo = () => {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}