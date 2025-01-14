export const InvitationTemplate = ({ values, font }) => {
	const {
		backgroundColor,
		headerColor,
		bodyColor,
		titleColor,
		subTitleColor,
		textColor,
		titleSize,
		subTitleSize,
		textSize,
		image,
		borderRadius,
		boxShadowSize,
		boxShadowSizeX,
		boxShadowSizeY,
		boxShadowColor,
	} = values || {}

	const fontFamily =
		font === 'font-sans'
			? 'Arial, sans-serif'
			: font === 'font-serif'
				? 'Georgia, serif'
				: font === 'font-mono'
					? 'Courier New, monospace'
					: ''

	const prevContentText = (
		<div className='w-auto h-6 px-5 text-sm font-medium text-gray-700 bg-gray-400/60 rounded-sm border-none flex items-center cursor-default transition-all'>
			Agregar texto...
		</div>
	)

	const prevContentImage = (
		<div className='w-36 h-36 text-sm font-medium text-gray-700 bg-gray-400/70 rounded-full border-none flex items-center justify-center cursor-default transition-all'>
			Agregar imágen...
		</div>
	)
	return (
		<div className='w-2/5 h-1/4 max-w-2xl flex flex-col place-self-center transition-all z-10 border-none'></div>
	)
}
