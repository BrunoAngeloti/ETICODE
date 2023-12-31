import { Tag } from "@/types/Blog";
import { getTagColor } from "@/utils/colors";
import { showResponseMessage } from "@/utils/responseMessage";
import { tags } from "@/utils/tags";

interface TagInputProps {
	selectedTags: Tag[];
	setSelectedTags: (selectedTags: Tag[]) => void;
}

export function TagInput({ selectedTags, setSelectedTags }: TagInputProps) {
	const handleTagChange = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      if (selectedTags.length < 3) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        showResponseMessage("Você só pode selecionar até 3 tags.");
      }
    }
  };


  const renderTags = () => {
    return tags.map(tag => {
      const isSelected = selectedTags.some(t => t === tag);

      const backgroundColor = isSelected ? getTagColor(tag) : 'bg-primary-50';
      const textColor = isSelected ? 'text-white' : 'text-grey-500';

      return(
        <div
          key={tag}
          className={`cursor-pointer px-4 py-1 rounded-2xl font-inter ${backgroundColor} ${textColor}`}
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </div>
      )
    });
  };

	return (
		<div className='mt-5 flex flex-col gap-2'>
			<label className="text-lg font-semibold text-grey-500">Tags* (máximo 3)</label>
			<div className='mt-1 flex flex-wrap gap-2'>
				{renderTags()}
			</div>
		</div>
  )
}