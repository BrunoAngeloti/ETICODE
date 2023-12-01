interface TitleInputProps {
	titleValue: string;
	setTitleValue: (titleValue: string) => void
}

export function TitleInput({ titleValue, setTitleValue }: TitleInputProps) {
	return (
		<div className='mt-5 flex flex-col gap-2'>
			<label htmlFor="title" className="text-lg font-semibold text-grey-500">Título*</label>
			<input
				type="text"
				name="title"
				value={titleValue}
				onChange={e => setTitleValue(e.target.value)}
				id="title"
				className="text-grey-500 border border-gray-300 bg-transparent rounded px-3 py-2 w-full"
			/>
		</div>
	)
}