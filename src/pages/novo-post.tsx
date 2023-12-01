import { MyDropzone } from '@/components/MyDropzone';
import { Title } from '@/components/Title';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';

export default function NewPost() {
  const [value, setValue] = useState('');
  const [fileData, setFileData] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log(fileData);
    if (fileData) {
      const url = URL.createObjectURL(fileData);
      setPreviewUrl(url);

      // Certifique-se de revogar a URL do objeto quando o componente for desmontado
      return () => URL.revokeObjectURL(url);
    }
  }, [fileData]);

  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <Title text="Novo Post" />

        <div className='my-10'>
          <MyDropzone setSelectedFile={setFileData}/>
          {previewUrl && <Image src={previewUrl} alt="Preview" className="mt-4" width={500} height={300} />}
        </div>

        <ReactQuill 
          theme="snow" 
          value={value} 
          onChange={setValue}
          modules={{
            toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link']
            ]
          }} 
        />

        <div className="output" dangerouslySetInnerHTML={{ __html: value }} />
      </section>
      <ToastContainer />
    </main>
  )
}
