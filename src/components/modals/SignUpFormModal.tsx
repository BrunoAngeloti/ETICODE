import { FaRegSave } from "react-icons/fa";
import Modal from "../Modal";
import { Button } from "../Button";
import Image from "next/image";
import { useUserInfo } from "@/context/UserContext";

interface SignUpFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  // authData:{email:string, avatar_url:string,full_name:string}
}

export function SignUpFormModal({ isOpen, onClose }: SignUpFormModalProps) {
  const { userInfo, signOut, loading } = useUserInfo();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-poppins flex flex-col item-center text-center justify-center">
        <h1 className="font-semibold text-grey-500 text-2xl">ETICODE</h1>

        <Image src="/mocks/mockperson.png" width={128} height={128} className="my-4 rounded-full mx-auto" alt="mock" />

        <div className="flex flex-col text-left font-semibold mb-4">
          <label className="text-grey-500">Nome*</label>
          <input type="text" className="text-grey-300 border border-primary-100 bg-primary-50 rounded px-3 py-2"
            value={userInfo?.user_metadata.full_name}
          />
        </div>

        <div className="flex flex-col text-left font-semibold mb-4">
          <label className="text-grey-500">Ocupação*</label>
          <input type="text" className="text-grey-300 border border-primary-100 bg-primary-50 rounded px-3 py-2" />
        </div>

        <div className="flex flex-col text-left font-semibold mb-10">
          <label className="text-grey-500">Instituição/escola*</label>
          <input type="text" className="text-grey-300 border border-primary-100 bg-primary-50 rounded px-3 py-2" />
        </div>

        <Button title="Cadastrar" onPress={() => alert("Em breve")} icon={FaRegSave} fullWidth />
      </div>
    </Modal>
  )
}