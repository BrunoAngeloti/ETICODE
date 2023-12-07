import { supabase } from '@/lib/initSupabase';
import { getTable } from '@/services/table';
import { User } from '@/types/User';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface UserContextProps {
	userInfo: User | null;
	signOut: () => Promise<void>;
	loading: boolean;
	refreshUser: (id: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: any) => {
	const [userInfo, setUserInfo] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const allowedDomains = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com", "@edu.ufes.br"]

	async function signOut() {
		await supabase?.auth.signOut()
		setUserInfo(null)
	}

	function setLoadingFalse(interval?: number) {
		setInterval(() => {
			setLoading(false)
		}, interval || 2000)
	}

	async function refreshUser(id: string) {
		const user = await getTable("User", id )

		if (!user) {
			await signOut()
			return
		}

		setUserInfo(user[0])
	}

	useEffect(() => {
		const fetchUser = async () => {
			const { data, error } = await supabase?.auth.getUser();

			if (error) {
				setLoadingFalse()
				return;
			}

			if (data?.user) {
				if (!allowedDomains.some(domain => data.user?.email?.endsWith(domain))) {
					await signOut()
				}
				else {
					if (userInfo?.id !== data.user.id) {
						const newUser = await getTable("User", data.user.id)

						if (!newUser) {
							await signOut()
							return
						}

						setUserInfo(newUser[0])       
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
		<UserContext.Provider value={{ userInfo, signOut, loading, refreshUser }}>
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