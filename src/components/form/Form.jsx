import React from 'react'
import { Button } from '@/components/buttons/Button'
import { Input } from '@/components/inputs/Input'
import { SelectFont } from '@/components/inputs/SelectFont'
import initialValues from '@/utils/initialValues.js'
import { handleImageChange } from '@/utils/imageLogicInput'

export const Form = ({ inputValue, setInputValue, font, setFont }) => {
	const handleChange = (e) => {
		const { id, value, files, type } = e.target
		if (id === 'image' && files.length > 0) {
			handleImageChange(e, setInputValue)
		} else {
			setInputValue((prevState) => ({
				...prevState,
				[id]: type === 'range' ? Number(value) : value,
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
		<div className='w-auto h-full px-10 flex gap-4'>
			<form
				className='w-96 min-w-70 h-full p-4 flex flex-col gap-14 bg-slate-300/20 backdrop-blur-3xl rounded-md shadow-lg'
				onSubmit={handleSubmit}
			>
				<h2 className='mb-4 text-center text-4xl font-bold text-red-500/90'>
					Crear plantilla
				</h2>

				<Input
					type='range'
					name='Ancho'
					id='width'
					min='30'
					max=''
					value={inputValue.width}
					onChange={handleChange}
					unit='%'
				/>

				<Input
					type='range'
					name='Alto'
					id='height'
					min='30'
					max=''
					value={inputValue.height}
					onChange={handleChange}
					unit='%'
				/>

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
							id='titleSize'
							min='10'
							max='50'
							value={inputValue.titleSize}
							onChange={handleChange}
							unit='px'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<Input
						type='text'
						name='Subtítulo'
						id='subTitle'
						placeholder='Escribir aqui...'
						value={inputValue.subTitle}
						onChange={handleChange}
					/>

					<div>
						<Input
							type='range'
							name='Tamaño de Subtítulo'
							id='subTitleSize'
							min='8'
							max='35'
							value={inputValue.subTitleSize}
							onChange={handleChange}
							unit='px'
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
							id='textSize'
							min='5'
							max='30'
							value={inputValue.textSize}
							onChange={handleChange}
							unit='px'
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
						unit='px'
					/>

					<Input
						type='range'
						name='Box Shadow Size X'
						id='boxShadowSizeX'
						min='0'
						max='20'
						value={inputValue.boxShadowSizeX}
						onChange={handleChange}
						unit='px'
					/>

					<Input
						type='range'
						name='Box Shadow Size Y'
						id='boxShadowSizeY'
						min='0'
						max='20'
						value={inputValue.boxShadowSizeY}
						onChange={handleChange}
						unit='px'
					/>

					<Input
						type='range'
						name='Box Shadow Size'
						id='boxShadowSize'
						min='0'
						max='20'
						value={inputValue.boxShadowSize}
						onChange={handleChange}
						unit='px'
					/>

					<Input
						type='color'
						name='Box Shadow Color'
						id='boxShadowColor'
						value={inputValue.boxShadowColor}
						onChange={handleChange}
					/>
				</div>
				<div className='w-full h-full flex gap-6 flex-wrap justify-evenly text-center'>
					<Input
						type='color'
						name='Color de fondo'
						id='backgroundColor'
						value={inputValue.backgroundColor}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Color de Cabecera'
						id='headerColor'
						value={inputValue.headerColor}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Color de Cuerpo'
						id='bodyColor'
						value={inputValue.bodyColor}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Color de título'
						id='titleColor'
						value={inputValue.titleColor}
						onChange={handleChange}
					/>

					<Input
						type='color'
						name='Color de Subtítulo'
						id='subTitleColor'
						value={inputValue.subTitleColor}
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

				<Input
					type='range'
					name='Ancho de la imágen'
					id='widthImage'
					min='10'
					max=''
					value={inputValue.widthImage}
					onChange={handleChange}
					unit='%'
				/>

				<Input
					type='range'
					name='Alto de la imágen'
					id='heightImage'
					min='10'
					max=''
					value={inputValue.heightImage}
					onChange={handleChange}
					unit='%'
				/>

				<Input
					type='range'
					name='Radio de la imágen'
					id='borderRadiusImage'
					min='0'
					max='50'
					value={inputValue.borderRadiusImage}
					onChange={handleChange}
					unit='px'
				/>

				<div className='w-full h-full mt-8 flex justify-center items-center gap-6'>
					<Button type='reset' content='Resetear' onClick={handleReset} />
				</div>
			</form>
		</div>
	)
}
