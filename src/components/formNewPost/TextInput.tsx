import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface TextInputProps {
	textValue: string;
	setTextValue: (textValue: string) => void
}

export function TextInput({ textValue, setTextValue }: TextInputProps) {
	return(
		<div className='mt-7 mb-2 flex flex-col gap-2'>
			<label className="text-lg font-semibold text-grey-500">Texto*</label>
			<ReactQuill 
				theme="snow" 
				value={textValue} 
				onChange={setTextValue}
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
	)
}