import { MyDropzone } from '@/components/MyDropzone';
import { Title } from '@/components/Title';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { InputText } from '@/components/formNewPost/inputText';
import { getTagColor } from '@/utils/colors';
import { tags } from '@/utils/tags';
import { Tag } from '@/types/Blog';

export default function NewPost() {
  const [value, setValue] = useState('');
  const [fileData, setFileData] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showTrashIcon, setShowTrashIcon] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleTagChange = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t.tag !== tag.tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const renderTags = () => {
    return tags.map(tag => (
      <div
        key={tag.tag}
        className={`cursor-pointer px-4 py-1 rounded-2xl font-inter ${
          selectedTags.includes(tag) ? getTagColor(tag) + ' text-white' : 'bg-primary-50 text-grey-500'
        }`}
        onClick={() => handleTagChange(tag)}
      >
        {tag.tag}
      </div>
    ));
  };

  useEffect(() => {
    if (fileData) {
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

    return(
      <div 
        className="relative cursor-pointer h-80"
        onMouseEnter={() => setShowTrashIcon(true)}
        onMouseLeave={() => setShowTrashIcon(false)}
      >
        <Image src={previewUrl} alt="Preview" fill className='w-full rounded-lg object-cover'/>
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
    return <MyDropzone setSelectedFile={setFileData}/>
  }

  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <section className="w-full max-w-7xl px-6 lg:px-10 font-poppins">
        <Title text="Criar nova publicação" />

        <InputText label="Título" name="title" />

        <div className='grid grid-cols-2 w-full gap-10'>
          <div className='mt-5 flex flex-col gap-2'>
            <label htmlFor="description" className="text-lg font-semibold text-grey-500">Descrição*</label>
            <textarea 
              name="description" 
              id="description" 
              className="text-grey-500 border border-gray-300 bg-transparent rounded px-3 py-2 w-full resize-none h-full"
            />
          </div>

          <div className='mt-5 flex flex-col gap-2'>
            <label className="text-lg font-semibold text-grey-500">Imagem*</label>
            { previewUrl ? previewImage() : dropzone() } 
          </div>
        </div>

        <div className='mt-5 flex flex-col gap-2'>
          <label className="text-lg font-semibold text-grey-500">Tags*</label>
          <div className='mt-1 flex flex-wrap gap-2'>
            {renderTags()}
          </div>
        </div>
        

        <div className='mt-7 mb-2 flex flex-col gap-2'>
          <label className="text-lg font-semibold text-grey-500">Texto*</label>
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
        </div>

        <div className="output" dangerouslySetInnerHTML={{ __html: value }} />
      </section>
      <ToastContainer />
    </main>
  )
}
