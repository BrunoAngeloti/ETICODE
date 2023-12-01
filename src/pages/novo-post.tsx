import React, { useState } from 'react';

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

  function handlePublish() {
    console.log({
      textValue,
      titleValue,
      descriptionValue,
      fileData,
      selectedTags
    })
  }

  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <section className="w-full max-w-7xl px-6 lg:px-10 font-poppins">
        <Title text="Criar nova publicação" />

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
