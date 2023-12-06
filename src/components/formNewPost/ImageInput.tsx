import Image from "next/image";
import { MyDropzone } from "../MyDropzone";
import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { supabase } from "@/lib/initSupabase";

interface ImageInputProps {
  fileData: File | null;
  setFileData: (fileData: File | null) => void
}

export function ImageInput({ fileData, setFileData }: ImageInputProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showTrashIcon, setShowTrashIcon] = useState(false);

  async function uploadToSupabase(file: File) {
    if (!file) return;
    console.log(file)

    const filePath = `${file.name}` // Altere para a estrutura de caminho desejada

    const { data, error } = await supabase.storage
      .from('post-fotos')
      .upload(Math.random().toString(36).substring(2), file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
      console.error('Error uploading file:', error)
      return;
    }

    console.log('File uploaded:', data)
  }



  useEffect(() => {
    if (fileData) {
      console.log('fileData')
      console.log(fileData)
      const url = URL.createObjectURL(fileData);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [fileData]);

  const removeImage = () => {
    setPreviewUrl(null);
    setFileData(null);
  };

  function previewImage() {
    if (!previewUrl) return;

    return (
      <div
        className="relative cursor-pointer h-80"
        onMouseEnter={() => setShowTrashIcon(true)}
        onMouseLeave={() => setShowTrashIcon(false)}
      >
        <Image src={previewUrl} alt="Preview" fill className='w-full rounded-lg object-cover' />
        {showTrashIcon && (
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
            onClick={removeImage}
          >
            <FaTrash className="text-white" size={30} />
          </div>
        )}
      </div>
    )
  }

  function dropzone() {
    return <MyDropzone setSelectedFile={setFileData} />
  }

  return (
    <div className='mt-5 flex flex-col gap-2'>
      <label className="text-lg font-semibold text-grey-500">Imagem*</label>
      {previewUrl ? previewImage() : dropzone()}
    </div>
  )
}