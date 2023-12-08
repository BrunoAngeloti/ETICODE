import { MdPublish } from "react-icons/md";
import { Button } from "./Button";
import { Title } from "./Title";
import { DescriptionInput } from "./formNewPost/DescriptionInput";
import { ImageInput } from "./formNewPost/ImageInput";
import { TagInput } from "./formNewPost/TagInput";
import { TextInput } from "./formNewPost/TextInput";
import { TitleInput } from "./formNewPost/TitleInput";
import { Blog, Tag } from "@/types/Blog";
import { useEffect, useState } from "react";
import { putTable } from "@/services/table";
import { uploadNewImage } from "@/utils/fileStorage";
import { showResponseMessage } from "@/utils/responseMessage";

interface EditPostProps {
	post: Blog
}

export function EditPost({ post }: EditPostProps) {
	const [textValue, setTextValue] = useState('');
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [fileData, setFileData] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
	const [previewImage, setPreviewImage] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setTextValue(post.content)
		setTitleValue(post.title)
		setDescriptionValue(post.description)
		setSelectedTags(post.tags)
		setPreviewImage(post.coverImage)
	}, [post])

	const handlePublish = async () => {
		try {
      setIsLoading(true);
			
			let newImage = post.coverImage as string | null

			if(fileData) newImage = await uploadNewImage(fileData);

      await putTable("Post", post.id, { 
        title: titleValue, 
        description: descriptionValue, 
        content: textValue, 
        tags: selectedTags.map(tag => tag), 
        coverImage: newImage 
      });
			
			window.history.pushState(null, '', `${window.location.href}?postUpdated=true`);
			window.location.reload();
    } catch (error) {
      showResponseMessage("Ocorreu um erro ao editar o post. Tente novamente mais tarde.", "error");
    } finally {
      setIsLoading(false); 
    }
	}

	const disabledButton = !textValue || !titleValue || !descriptionValue || !selectedTags

	return (
		<section className="w-full max-w-7xl px-6 lg:px-10 mt-6 font-poppins flex flex-col">
			<Title text="Editar postagem" />

			<TitleInput titleValue={titleValue} setTitleValue={setTitleValue} />

			<div className='grid grid-cols-1 md:grid-cols-2 w-full gap-1 md:gap-10'>
				<DescriptionInput descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />
				<ImageInput fileData={fileData} setFileData={setFileData} previewUrlDefault={previewImage} />
			</div>

			<TagInput selectedTags={selectedTags} setSelectedTags={setSelectedTags} />

			<TextInput textValue={textValue} setTextValue={setTextValue} />


			<div className='flex flex-col-reverse md:flex-row items-center ml-0 md:ml-auto gap-4 mt-20'>
				<Button 
					onPress={handlePublish} 
					title="Editar informações" 
					icon={MdPublish} 
					fullWidthMobile 
					variant="filled" 
					color="primary" 
					loading={isLoading}
					disabled={disabledButton}
				/>
			</div>
		</section>
  )
}