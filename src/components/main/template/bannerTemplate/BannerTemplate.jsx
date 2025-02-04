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
		<span className='w-auto h-6 px-5 text-xs font-medium text-gray-700 text-nowrap text-center bg-gray-400/60 rounded-sm border-none flex items-center justify-center cursor-default transition-all sm:text-sm sm:px-5'>
			Agregar texto...
		</span>
	)

	const prevContentImage = (
		<div className='min-w-36 min-h-36 text-xs font-medium text-gray-700 bg-gray-400/70 rounded-full border-none flex items-center justify-center cursor-default transition-all sm:w-40 sm:h-40'>
			Agregar imágen...
		</div>
	)

	return (
		<div
			className='flex flex-col place-self-center transition-all z-10 border-none overflow-hidden lg:mt-6'
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
			<header
				className='w-full h-full max-w-full p-1 pt-6 flex flex-col gap-6 items-center transition-all'
				style={{
					backgroundColor: headerColor,
					borderTopLeftRadius: borderRadius,
					borderTopRightRadius: borderRadius,
				}}
			>
				{(image && (
					<img
						src={image}
						alt='Imágen de Banner'
						title='Imágen de Banner'
						className='w-36 h-36 rounded-full border-none object-cover object-center'
						style={{
							width: `${widthImage}%`,
							height: `${heightImage}%`,
							borderRadius: borderRadiusImage,
							maxWidth: '100%',
							maxHeight: '100%',
						}}
					/>
				)) ||
					prevContentImage}

				<div className='w-full h-auto max-w-full flex flex-col gap-1 text-center break-words items-center justify-center transition-all'>
					<h4
						className='max-w-full h-auto text-center font-bold transition-all'
						style={{
							fontFamily: fontFamily,
							color: titleColor,
							fontSize: titleSize,
						}}
					>
						{values.title || prevContentText}
					</h4>
					<h5
						className='max-w-full h-auto text-center font-semibold transition-all'
						style={{
							fontFamily: fontFamily,
							color: subTitleColor,
							fontSize: subTitleSize,
						}}
					>
						{values.subTitle || prevContentText}
					</h5>
				</div>
			</header>
			<section
				className='w-full h-full py-2 px-16 flex justify-center break-words overflow-hidden transition-all'
				style={{
					backgroundColor: bodyColor,
				}}
			>
				<p
					className='max-w-full h-auto text-center'
					style={{
						fontFamily: fontFamily,
						color: textColor,
						fontSize: textSize,
					}}
				>
					{values.text || prevContentText}
				</p>
			</section>
		</div>
	)
}
