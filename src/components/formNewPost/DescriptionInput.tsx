interface DescriptionInputProps {
	descriptionValue: string;
	setDescriptionValue: (descriptionValue: string) => void
}

export function DescriptionInput({ descriptionValue, setDescriptionValue }: DescriptionInputProps) {
	return (
		<div className='mt-5 flex flex-col gap-2'>
			<label htmlFor="description" className="text-lg font-semibold text-grey-500">Descrição*</label>
			<textarea 
				name="description" 
				id="description" 
				className="text-grey-500 border border-gray-300 bg-transparent rounded px-3 py-2 w-full resize-none h-full"
				value={descriptionValue}
				onChange={e => setDescriptionValue(e.target.value)}
			/>
		</div>
	)
}