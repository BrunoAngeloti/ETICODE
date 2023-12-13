import { FaEdit, FaRegSave } from "react-icons/fa";
import Modal from "../Modal";
import { Button } from "../Button";
import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import { uploadNewImage } from "@/utils/fileStorage";
import { putTable } from "@/services/table";
import { showResponseMessage } from "@/utils/responseMessage";
import { User } from "@/types/User";
import { MdEdit } from "react-icons/md";

interface EditAccountModalProps {
  isOpen: boolean;
  userInfo: User | null;
  onClose: () => void;
}

export function EditAccountModal({ isOpen, userInfo, onClose }: EditAccountModalProps) {
  const [name, setName] = useState(userInfo?.name);
  const [occupation, setOccupation] = useState<string | undefined>("");
  const [institution, setInstitution] = useState<string | undefined>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(isOpen) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'visible'
  }, [isOpen])

  const handleSave = async () => {
    if (!userInfo) return;

    setLoading(true);

    try {
      let newPhotoUrl = imagePreview;
      if (imageFile) {
        newPhotoUrl = await uploadNewImage(imageFile) || "";
      }

      await putTable('User', userInfo?.id, {
        name,
        occupation,
        institution,
        photo: newPhotoUrl,
      });

      window.history.pushState(null, '', `${window.location.href}?perfilUpdated=true`);
			window.location.reload();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(userInfo?.photo || "");
    }
  }, [imageFile, userInfo]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const triggerFileSelectPopup = () => fileInputRef.current?.click();

  useEffect(() => {
    setName(userInfo?.name);
    setImagePreview(userInfo?.photo);
    setOccupation(userInfo?.occupation);
    setInstitution(userInfo?.institution);
  }, [userInfo]);

  const disableSaveButton = (
    name === userInfo?.name && 
    imagePreview === userInfo?.photo && 
    occupation === userInfo?.occupation && 
    institution === userInfo?.institution
    ) || !name || !occupation || !institution;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-poppins flex flex-col item-center text-center justify-center">
        <h1 className="font-semibold text-grey-500 text-2xl">ETICODE</h1>

        <div className="relative my-4 mx-auto cursor-pointer">
          <Image 
            src={imagePreview || ""} 
            width={128} 
            height={128} 
            className="rounded-full w-32 h-32" 
            alt="Preview da foto do usuário" 
            quality={100}
            onClick={triggerFileSelectPopup} 
          />
          <span className="absolute bottom-0 right-0 text-white bg-primary-500 p-2 rounded-full flex items-center justify-center ">
            <MdEdit size={14} />
          </span>
          <input type="file" ref={fileInputRef} className="hidden" onChange={handleImageChange} />
        </div>

        <div className="flex flex-col text-left font-semibold mb-4">
          <label className="text-grey-500">Nome e Sobrenome*</label>
          <input type="text" className="text-grey-300 border border-primary-100 bg-primary-50 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col text-left font-semibold mb-4">
          <label className="text-grey-500">Ocupação*</label>
          <input type="text" className="text-grey-300 border border-primary-100 bg-primary-50 rounded px-3 py-2" 
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        <div className="flex flex-col text-left font-semibold mb-10">
          <label className="text-grey-500">Instituição/escola*</label>
          <input type="text" className="text-grey-300 border border-primary-100 bg-primary-50 rounded px-3 py-2" 
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>

        <Button disabled={disableSaveButton} loading={loading} title="Cadastrar" onPress={handleSave} icon={FaRegSave} fullWidth />
      </div>
    </Modal>
  )
}