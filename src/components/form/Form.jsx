import React, { useState } from 'react'
import { Button } from '@/components/buttons/Button'
import { Input } from '@/components/inputs/Input'
import { Template } from '@/components/main/Template'
import { SelectFont } from '@/components/inputs/SelectFont'
import { initialValues } from '@/utils/initialValues'

export const Form = () => {
	const [inputValue, setInputValue] = useState(initialValues)
	const [font, setFont] = useState('')

	const handleChange = (e) => {
		const { id, value } = e.target
		setInputValue((prevState) => ({
			...prevState,
			[id]: value,
		}))
	}

	const handleReset = () => {
		setInputValue(initialValues)
		setFont('')
	}

	return (
		<div className='w-screen h-full p-4 flex flex-col items-center gap-4'>
			<form className='w-80 h-full p-4 mt-12 flex flex-col gap-4 bg-gray-800/10 backdrop-blur-3xl rounded-md shadow-md'>
				<h2 className='mb-4 text-center text-3xl font-bold text-red-600'>
					Crear plantilla
				</h2>
				<Input
					type='text'
					name='Título'
					id='title'
					placeholder='Escribir aqui...'
					value={inputValue.title}
					onChange={handleChange}
				/>

				<Input
					type='text'
					name='Texto'
					id='text'
					placeholder='Escribir aqui...'
					value={inputValue.text}
					onChange={handleChange}
				/>

				<Input
					type='color'
					name='Color de fondo'
					id='backgroundColor'
					value={inputValue.backgroundColor}
					onChange={handleChange}
				/>

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

				<div className='w-full h-full mt-8 flex justify-center items-center gap-6'>
					<Button type='submit' content='Descargar' />
					<Button type='reset' content='Resetear' onReset={handleReset} />
				</div>
			</form>
			<Template values={inputValue} font={font} />
		</div>
	)
}
