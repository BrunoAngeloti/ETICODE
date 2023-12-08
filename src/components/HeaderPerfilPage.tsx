import type { User } from "@/types/User";
import { Button } from "./Button";

import Image from "next/image";
import { useState } from "react";

import { MdEdit, MdLogout } from "react-icons/md";
import { EditAccountModal } from "./modals/EditAccountModal";

interface HeaderPerfilPageProps {
	user: User;
	userInfo: User | null;
	signOut: () => Promise<void>;
}

export function HeaderPerfilPage({ user, userInfo, signOut }: HeaderPerfilPageProps) {
	const [openModal, setOpenModal] = useState(false);

	const userIsLogged = userInfo?.id === user.id;

	const handleEditProfile = () => {
		setOpenModal(true);
	}

	return (
		<div className="flex flex-col text-center lg:text-left lg:flex-row items-center w-full justify-center">
			<Image src={user.photo} alt={user.name} width={100} height={100} className="rounded-full" />

			<div className="flex flex-col font-poppins ml-0 lg:ml-6 mr-0 lg:mr-auto mt-2 lg:mt-0">
				<h1 className="text-4xl font-bold text-grey-500">{user.name}</h1>
				<p className="text-base text-grey-300">{user.occupation} - {user.institution}</p>
			</div>

			{userIsLogged && (
				<div className="flex flex-col justify-center sm:flex-row items-center gap-4 ml-0 mt-3 lg:mt-0 lg:ml-auto lg:w-fit w-full">
					<Button title="Editar perfil" variant="filled" fullWidthMobile color="primary" onPress={handleEditProfile} icon={MdEdit} />
					<Button title="Sair" variant="outlined" fullWidthMobile color="red" onPress={signOut} icon={MdLogout} />
				</div>
			)}

			<EditAccountModal isOpen={openModal} userInfo={userInfo} onClose={() => setOpenModal(false)} />
		</div>
	)
}