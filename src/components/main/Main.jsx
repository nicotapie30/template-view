import { useState } from 'react'
import { Form } from '@/components/form/Form'
import { downloadPDF } from '@/utils/PDF/downloadPDF'
import { Button } from '../buttons/Button'
import { Template } from './template/Template'
import initialvalues from '@/utils/initialValues.js'

export const Main = () => {
	const [templateType, setTemplateType] = useState('card')
	const [inputValue, setInputValue] = useState(initialvalues)
	const [font, seFont] = useState('')

	const handleTemplateChange = (type) => {
		setTemplateType(type)
	}

	return (
		<main className='w-full h-full mt-12 p-4 flex flex-col items-center'>
			<h1 className='text-5xl mb-10 font-bold text-blue-800'>Template View</h1>

			<div className='w-full flex flex-col gap-12'>
				<article className='w-full h-auto flex gap-6 text-sm font-medium justify-center'>
					{['Card', 'Invitation', 'Banner'].map((type) => (
						<Button
							key={type}
							onClick={() => handleTemplateChange(type.toLowerCase())}
							content={type}
						/>
					))}
				</article>

				<section className='w-full h-auto flex'>
					<Form
						inputValue={inputValue}
						setInputValue={setInputValue}
						font={font}
						seFont={seFont}
					/>
					<Template type={templateType} values={inputValue} font={font} />
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
