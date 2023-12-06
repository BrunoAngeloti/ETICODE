import type { User } from "@/types/User";
import { Button } from "./Button";

import Image from "next/image";
import { useState } from "react";

import { MdEdit, MdLogout } from "react-icons/md";
import { EditAccountModal } from "./modals/EditAccountModal";

interface HeaderPerfilPageProps {
	user: User;
}

export function HeaderPerfilPage({ user }: HeaderPerfilPageProps) {
	const [openModal, setOpenModal] = useState(false);

	const handleEditProfile = () => {
		setOpenModal(true);
	}

	return (
		<div className="flex flex-col text-center lg:text-left lg:flex-row items-center w-full justify-center">
			<Image src={user.photo} alt={user.name} width={100} height={100} className="rounded-full" />

			<div className="flex flex-col font-poppins ml-6">
				<h1 className="text-4xl font-bold text-grey-500">{user.name}</h1>
				<p className="text-base text-grey-300">{user.ocuppation}</p>
			</div>

			<div className="flex flex-col justify-center sm:flex-row items-center gap-4 ml-0 mt-3 lg:mt-0 lg:ml-auto lg:w-fit w-full">
				<Button title="Editar perfil" variant="filled" fullWidthMobile color="primary" onPress={handleEditProfile} icon={MdEdit} />
				<Button title="Sair" variant="outlined" fullWidthMobile color="red" onPress={() => { }} icon={MdLogout} />
			</div>

			<EditAccountModal isOpen={openModal} onClose={() => setOpenModal(false)} />
		</div>
	)
}