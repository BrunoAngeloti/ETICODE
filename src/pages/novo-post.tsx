import React, { useEffect, useState } from 'react';

import { TitleInput } from '@/components/formNewPost/TitleInput';
import type { Tag } from '@/types/Blog';
import { DescriptionInput } from '@/components/formNewPost/DescriptionInput';
import { ImageInput } from '@/components/formNewPost/ImageInput';
import { TagInput } from '@/components/formNewPost/TagInput';
import { TextInput } from '@/components/formNewPost/TextInput';
import { Title } from '@/components/Title';

export default function NewPost() {
  const [textValue, setTextValue] = useState('');
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [fileData, setFileData] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isLoadedFromLocalStorage, setIsLoadedFromLocalStorage] = useState(false);

  const cleanContent = (content: string) => {
    return content.replace(/<p><br><\/p>/g, '');
  };

  function cleanState() {
    setTextValue('');
    setTitleValue('');
    setDescriptionValue('');
    setFileData(null);
    setSelectedTags([]);
  }

  useEffect(() => {
    const savedData = localStorage.getItem('draftPost');

    if (savedData) {
      const draft = JSON.parse(savedData);
      
      setTextValue(draft.textValue || '');
      setTitleValue(draft.titleValue || '');
      setDescriptionValue(draft.descriptionValue || '');
      setSelectedTags(draft.selectedTags || []);
      setIsLoadedFromLocalStorage(true);
    }
  }, []);
  
  const handlePublish = () => {
    console.log({
      textValue,
      titleValue,
      descriptionValue,
      fileData,
      selectedTags
    })

    localStorage.removeItem('draftPost');
    cleanState();
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if(!cleanContent(textValue) && !titleValue && !descriptionValue && !selectedTags.length) return;

        e.preventDefault();
        e.returnValue = ''; 

        const dataToSave = JSON.stringify({ textValue, titleValue, descriptionValue, selectedTags });
        localStorage.setItem('draftPost', dataToSave);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [textValue, titleValue, descriptionValue, selectedTags]);

  const textTitle = isLoadedFromLocalStorage ? "Criar nova publicação (Rascunho salvo)" : "Criar nova publicação";

  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <section className="w-full max-w-7xl px-6 lg:px-10 font-poppins">
        <Title text={textTitle} />

        <TitleInput titleValue={titleValue} setTitleValue={setTitleValue} />

        <div className='grid grid-cols-2 w-full gap-10'>
          <DescriptionInput descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />
          <ImageInput fileData={fileData} setFileData={setFileData} />
        </div>

        <TagInput selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        
        <TextInput textValue={textValue} setTextValue={setTextValue} />

        <div className="output" dangerouslySetInnerHTML={{ __html: textValue }} />

        <button onClick={handlePublish} className="mt-10 w-full max-w-xs h-12 bg-blue-500 text-white rounded-md font-semibold text-lg hover:bg-blue-600 transition duration-200">
          Publicar
        </button>
      </section>
    </main>
  )
}
