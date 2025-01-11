import React, { useState } from 'react'
import { Button } from '@/components/buttons/Button'
import { Input } from '@/components/inputs/Input'
import { Template } from '@/components/main/Template'
import { SelectFont } from '@/components/inputs/SelectFont'
import { initialValues } from '@/utils/initialValues'
import { handleImageChange } from '@/utils/imageLogicInput'

export const Form = () => {
	const [inputValue, setInputValue] = useState(initialValues)
	const [font, setFont] = useState('')

	const handleChange = (e) => {
		const { id, value, files } = e.target
		if (id === 'image' && files.length > 0) {
			handleImageChange(e, setInputValue)
		} else {
			setInputValue((prevState) => ({
				...prevState,
				[id]: value,
			}))
		}
	}

	const handleReset = () => {
		setInputValue(initialValues)
		setFont('')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className='w-screen h-full p-4 px-10 flex gap-4'>
			<form
				className='w-auto min-w-80 h-full p-4 mt-12 flex flex-col gap-14 bg-gray-800/10 backdrop-blur-3xl rounded-md shadow-md'
				onSubmit={handleSubmit}
			>
				<h2 className='mb-4 text-center text-3xl font-bold text-red-600'>
					Crear plantilla
				</h2>

				<div className='flex flex-col gap-6'>
					<Input
						type='text'
						name='Título'
						id='title'
						placeholder='Escribir aqui...'
						value={inputValue.title}
						onChange={handleChange}
					/>

					<div>
						<Input
							type='range'
							name='Tamaño de título'
							id='fontTitleSize'
							min='10'
							max='50'
							value={inputValue.fontTitleSize}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<Input
						type='text'
						name='Texto'
						id='text'
						placeholder='Escribir aqui...'
						value={inputValue.text}
						onChange={handleChange}
					/>

					<div>
						<Input
							type='range'
							name='Tamaño de texto'
							id='fontTextSize'
							min='5'
							max='30'
							value={inputValue.fontTextSize}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='w-full h-full mt-4 flex flex-col gap-10'>
					<Input
						type='range'
						name='Border Radius'
						id='borderRadius'
						min='0'
						max='50'
						value={inputValue.borderRadius}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Color de fondo'
						id='backgroundColor'
						value={inputValue.backgroundColor}
						onChange={handleChange}
					/>

					<Input
						type='range'
						name='Box Shadow Size X'
						id='boxShadowSizeX'
						min='0'
						max='20'
						value={inputValue.boxShadowSizeX}
						onChange={handleChange}
					/>

					<Input
						type='range'
						name='Box Shadow Size Y'
						id='boxShadowSizeY'
						min='0'
						max='20'
						value={inputValue.boxShadowSizeY}
						onChange={handleChange}
					/>

					<Input
						type='range'
						name='Box Shadow Size'
						id='boxShadowSize'
						min='0'
						max='20'
						value={inputValue.boxShadowSize}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Box Shadow Color'
						id='boxShadowColor'
						value={inputValue.boxShadowColor}
						onChange={handleChange}
					/>
				</div>
				<div className='w-full h-full flex gap-6 place-content-center'>
					<Input
						type='color'
						name='Color de título'
						id='titleColor'
						value={inputValue.titleColor}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Color de texto'
						id='textColor'
						value={inputValue.textColor}
						onChange={handleChange}
					/>
				</div>

				<SelectFont font={font} setFont={setFont} />

				<Input
					type='file'
					name='Cargar imágen'
					id='image'
					onChange={handleChange}
				/>

				<div className='w-full h-full mt-8 flex justify-center items-center gap-6'>
					<Button type='reset' content='Resetear' onClick={handleReset} />
				</div>
			</form>

			<Template values={inputValue} font={font} />
		</div>
	)
}
