export const Template = ({ title, description, bgColor, textColor }) => {
	const colors = bgColor && textColor ? `bg-${bgColor} text-${textColor}` : ''

	return (
		<>
			<h3 className='mb-2 text-2xl text-gray-800 text-center font-semibold'>
				Plantilla
			</h3>
			<div
				className={`w-full h-full p-4 flex flex-col items-center border-2 border-black/20 rounded-md ${colors}`}
			>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</>
	)
}
