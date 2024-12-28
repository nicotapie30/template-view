import './template.css'
import { downloadPDF } from '@/utils/PDF/downloadPDF'
import { Button } from '../buttons/Button'

export const Template = ({ values, font }) => {
	const formValues = {
		backgroundColor: values.backgroundColor,
		titleColor: values.titleColor,
		textColor: values.textColor,
		fontTitleSize: values.fontTitleSize,
		fontTextSize: values.fontTextSize,
		fontFamily:
			font === 'font-sans'
				? 'Arial, sans-serif'
				: font === 'font-serif'
					? 'Georgia, serif'
					: font === 'font-mono'
						? 'Courier New, monospace'
						: '',
	}

	return (
		<>
			<h3 className='mb-1 mt-12 text-4xl text-gray-800 text-center font-bold'>
				Plantilla
			</h3>
			<div
				className='max-w-full w-full height-template overflow-hidden text-wrap p-4 z-10 flex flex-col items-center border-2 border-black/20 rounded-md'
				style={
					formValues.backgroundColor && {
						backgroundColor: formValues.backgroundColor,
					}
				}
			>
				<h4
					className='mb-10 mt-3 text-4xl font-bold'
					style={
						formValues.titleColor && {
							color: formValues.titleColor,
							fontFamily: formValues.fontFamily,
							fontSize: `${formValues.fontTitleSize}px`,
						}
					}
				>
					{values.title}
				</h4>
				<p
					className='w-full text-lg flex justify-center'
					style={
						formValues.textColor && {
							color: formValues.textColor,
							fontFamily: formValues.fontFamily,
							fontSize: `${formValues.fontTextSize}px`,
						}
					}
				>
					{values.text}
				</p>
			</div>
			<Button
				onClick={downloadPDF}
				type='button'
				content='Descargar plantilla'
			/>
		</>
	)
}
