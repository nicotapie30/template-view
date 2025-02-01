import { useState } from 'react'
import { Form } from '@/components/form/Form'
import { downloadPDF } from '@/utils/PDF/downloadPDF'
import { Button } from '../buttons/Button'
import { Template } from './template/Template'
import initialvalues from '@/utils/initialValues.js'
import Typewriter from 'typewriter-effect'

export const Main = () => {
	const [templateType, setTemplateType] = useState('card')
	const [inputValue, setInputValue] = useState(initialvalues)
	const [font, seFont] = useState('')

	const handleTemplateChange = (type) => {
		setTemplateType(type)
	}

	return (
		<main className='w-full h-full mt-12 p-4 flex flex-col items-center'>
			<h1 className='text-7xl mb-28 font-bold text-blue-800'>
				<Typewriter
					onInit={(typewrite) => {
						typewrite.typeString('Template View').start()
					}}
					options={{
						autoStart: true,
						loop: false,
						cursor: '',
					}}
				/>
			</h1>

			<div className='w-full flex flex-col gap-12'>
				<article className='w-full h-auto flex gap-6 text-sm font-medium justify-center'>
					{['Card', 'Banner'].map((type) => (
						<Button
							key={type}
							onClick={() => handleTemplateChange(type.toLowerCase())}
							content={type}
						/>
					))}
				</article>

				<section className='w-full h-full mb-10 flex'>
					<Form
						inputValue={inputValue}
						setInputValue={setInputValue}
						font={font}
						seFont={seFont}
					/>
					<div
						id='template'
						className='w-full min-h-full bg-slate-50 p-6 grid rounded-md transition-all shadow-lg'
					>
						<Template type={templateType} values={inputValue} font={font} />
					</div>
				</section>
			</div>
			<Button
				onClick={downloadPDF}
				type='button'
				content='Descargar plantilla'
			/>
		</main>
	)
}
