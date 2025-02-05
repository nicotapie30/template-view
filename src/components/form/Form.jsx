import React from 'react'
import { Button } from '@/components/buttons/Button'
import { SelectFont } from '@/components/inputs/SelectFont'
import { handleImageChange } from '@/utils/imageLogicInput'
import {
	TitleInput,
	SubTitleInput,
	TextInput,
	WidthRangeInput,
	HeightRangeInput,
	TitleRangeInput,
	SubtitleRangeInput,
	TextRangeInput,
	BorderRadiusRangeInput,
	BoxShadowRangeInput,
	BoxShadowRangeXInput,
	BoxShadowRangeYInput,
	BoxShadowColorInput,
	BackgroundColorInput,
	HeaderColorInput,
	BodyColorInput,
	TitleColorInput,
	SubtitleColorInput,
	TextColorInput,
	ImageInput,
	ImageWidthRangeInput,
	ImageHeightRangeInput,
	ImageRadiusRangeInput,
} from '../index.js'

export const Form = () => {
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
		dispatch({ type: 'RESET_FORM' })
		setFont('')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className='w-full h-full px-1 flex gap-4 justify-center '>
			<form
				className='w-full h-full p-4 flex flex-col  gap-14 bg-slate-300/20 backdrop-blur-3xl rounded-md shadow-lg '
				onSubmit={handleSubmit}
			>
				<h2 className='mb-4 text-center text-3xl font-bold text-red-500/90'>
					Crear plantilla
				</h2>

				<WidthRangeInput />

				<HeightRangeInput />

				<div className='flex flex-col gap-6'>
					<TitleInput />

					<div>
						<TitleRangeInput />
					</div>

					<TitleColorInput />
				</div>

				<div className='flex flex-col gap-6'>
					<SubTitleInput />

					<div>
						<SubtitleRangeInput />
					</div>
					<SubtitleColorInput />
				</div>

				<div className='flex flex-col gap-6'>
					<TextInput />

					<div>
						<TextRangeInput />
					</div>
					<TextColorInput />
				</div>

				<SelectFont />

				<div className='w-full h-full mt-4 flex flex-col gap-10'>
					<BorderRadiusRangeInput />

					<BoxShadowRangeInput />

					<BoxShadowRangeXInput />

					<BoxShadowRangeYInput />

					<BoxShadowColorInput />
				</div>
				<div className='w-full h-full flex gap-6 flex-wrap justify-evenly text-center'>
					<BackgroundColorInput />

					<HeaderColorInput />

					<BodyColorInput />
				</div>

				<ImageInput />

				<ImageWidthRangeInput />

				<ImageHeightRangeInput />

				<ImageRadiusRangeInput />

				<div className='w-full h-full mt-8 flex justify-center items-center gap-6'>
					<Button type='reset' content='Resetear' onClick={handleReset} />
				</div>
			</form>
		</div>
	)
}
