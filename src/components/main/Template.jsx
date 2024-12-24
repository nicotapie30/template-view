import './template.css'

export const Template = ({ values, font }) => {
	const formValues = {
		backgroundColor: values.backgroundColor,
		titleColor: values.titleColor,
		textColor: values.textColor,
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
			<h3 className='mb-2 mt-10 text-3xl text-gray-800 text-center font-semibold'>
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
						}
					}
				>
					{values.title}
				</h4>
				<p
					className='w-full text-lg overflow-x-hidden flex justify-center'
					style={
						formValues.textColor && {
							color: formValues.textColor,
							fontFamily: formValues.fontFamily,
						}
					}
				>
					{values.text}
				</p>
			</div>
		</>
	)
}
