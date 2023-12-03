import React, { useEffect, useState } from 'react';

import { TitleInput } from '@/components/formNewPost/TitleInput';
import type { Tag } from '@/types/Blog';
import { DescriptionInput } from '@/components/formNewPost/DescriptionInput';
import { ImageInput } from '@/components/formNewPost/ImageInput';
import { TagInput } from '@/components/formNewPost/TagInput';
import { TextInput } from '@/components/formNewPost/TextInput';
import { Title } from '@/components/Title';
import { FaTrash } from 'react-icons/fa';
import { MdPublish } from 'react-icons/md';
import { DeleteConfirmationModal } from '@/components/modals/DeleteConfirmationModal';
import { Button } from '@/components/Button';

export default function NewPost() {
  const [textValue, setTextValue] = useState('');
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [fileData, setFileData] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isLoadedFromLocalStorage, setIsLoadedFromLocalStorage] = useState(false);
  const [isOpenDeleteConfirmationModal, setIsOpenDeleteConfirmationModal] = useState(false);

  const cleanContent = (content: string) => {
    return content.replace(/<p><br><\/p>/g, '');
  };

  function cleanState() {
    localStorage.removeItem('draftPost');
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

  const textTitle = isLoadedFromLocalStorage ? "Editar Rascunho" : "Criar nova publicação";

  const disableDelete = !cleanContent(textValue) && !titleValue && !descriptionValue && !selectedTags.length;
  const disablePublish = !cleanContent(textValue) || !titleValue || !descriptionValue || !selectedTags.length || !fileData;

  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10 mt-6 font-poppins flex flex-col">
        <Title text={textTitle} />

        <TitleInput titleValue={titleValue} setTitleValue={setTitleValue} />

        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-1 md:gap-10'>
          <DescriptionInput descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />
          <ImageInput fileData={fileData} setFileData={setFileData} />
        </div>

        <TagInput selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        
        <TextInput textValue={textValue} setTextValue={setTextValue} />


        <div className='flex flex-col-reverse md:flex-row items-center ml-0 md:ml-auto gap-4 mt-20'>         
          <Button onPress={() => setIsOpenDeleteConfirmationModal(true)} disabled={disableDelete} fullWidthMobile title="Limpar tudo" icon={FaTrash} variant="outlined" color="red" />
          <Button onPress={handlePublish} disabled={disablePublish} title="Publicar" icon={MdPublish} fullWidthMobile variant="filled" color="primary" />
          
        </div>
      </section>
      <DeleteConfirmationModal isOpen={isOpenDeleteConfirmationModal} onClose={() => setIsOpenDeleteConfirmationModal(false)} handleConfirm={cleanState} />
    </main>
  )
}
