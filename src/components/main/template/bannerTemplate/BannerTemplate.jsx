export const BannerTemplate = ({ values, font }) => {
	const {
		width,
		height,
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
		widthImage,
		heightImage,
		borderRadiusImage,
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
		<div className='min-w-36 min-h-36 text-sm font-medium text-gray-700 bg-gray-400/70 rounded-full border-none flex items-center justify-center cursor-default transition-all'>
			Agregar imágen...
		</div>
	)

	return (
		<div
			className='flex flex-col place-self-center transition-all z-10 border-none'
			style={{
				width: `${width}%`,
				height: `${height}%`,
				maxWidth: '80%',
				maxHeight: '80%',
				backgroundColor: backgroundColor,
				borderRadius: borderRadius,
				boxShadow: `${boxShadowSizeX}px ${boxShadowSizeY}px ${boxShadowSize}px ${boxShadowColor}`,
			}}
		>
			<header className='w-full h-full p-6 flex gap-6 items-center transition-all'>
				{(image && (
					<img
						src={image}
						alt='Imágen de Banner'
						title='Imágen de Banner'
						className='w-36 h-36 rounded-full border-none'
						style={{
							width: `${widthImage}%`,
							height: `${heightImage}%`,
							borderRadius: borderRadiusImage,
							maxWidth: '90%',
							maxHeight: '90%',
						}}
					/>
				)) ||
					prevContentImage}
			</header>
		</div>
	)
}
