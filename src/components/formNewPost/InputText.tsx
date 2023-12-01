interface InputTextProps {
	label: string
	name: string
}

export function InputText({ label, name }: InputTextProps) {
	return (
		<div className='mt-5 flex flex-col gap-2'>
			<label htmlFor={name} className="text-lg font-semibold text-grey-500">{label}*</label>
			<input
				type="text"
				name={name}
				id={name}
				className="text-grey-500 border border-gray-300 bg-transparent rounded px-3 py-2 w-full"
			/>
		</div>
	)
}