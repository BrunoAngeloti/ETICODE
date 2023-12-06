import { showResponseMessage } from '@/utils/responseMessage';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface MyDropzoneProps {
	setSelectedFile: (value: File) => void;
}

export function MyDropzone({ setSelectedFile }: MyDropzoneProps) {
	const isImageFile = (file: File) => file.type.startsWith("image/");

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];

		if (file && isImageFile(file)) {
			setSelectedFile(file);
		}
	}, [setSelectedFile]);

	const accept: { [key: string]: string[] } = {
		'image/jpeg': ['.jpeg', '.jpg'],
		'image/png': ['.png'],
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept,
		multiple: false,
		onDropRejected: () => showResponseMessage("O arquivo não é uma imagem válida.")
	});

	return (
		<div {...getRootProps()} className="flex items-center justify-center w-full">
			<input {...getInputProps()} style={{ display: 'none' }} />
			<label className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
				<div className="flex flex-col items-center justify-center py-6 px-2">
					<svg aria-hidden="true" className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
					{isDragActive ?
						<p className='text-center text-sm'>Solte a imagem aqui...</p> :
						<p className='text-center text-sm'>Arraste e solte uma imagem aqui, ou clique para selecionar uma imagem</p>
					}
				</div>
			</label>
		</div>
	);
}
