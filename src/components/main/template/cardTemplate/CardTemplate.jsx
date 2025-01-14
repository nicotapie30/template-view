export const CardTemplate = ({ values, font }) => {
	const {
		backgroundColor,
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

	const prevContent = (
		<div className='w-auto h-6 px-2 text-sm bg-gray-500 rounded-sm border-none flex items-center'>
			Agregar contenido...
		</div>
	)

	return (
		<div
			className='w-2/4 h-1/4 max-w-2xl flex flex-col transition-all z-10 border-none'
			style={{
				backgroundColor: backgroundColor,
				borderRadius: borderRadius,
				boxShadow: `${boxShadowSizeX}px ${boxShadowSizeY}px ${boxShadowSize}px ${boxShadowColor}`,
			}}
		>
			<header
				className='w-full h-2/5 p-6 flex gap-3 bg-gray-500 items-center transition-all border-none'
				style={{
					borderTopLeftRadius: borderRadius,
					borderTopRightRadius: borderRadius,
				}}
			>
				<div className='w-36 h-36 mt-6 ml-6'>
					{image && (
						<img
							src={image}
							alt='User image'
							title='Imágen de usuario'
							className='rounded-full border-2 border-gray-300 object-contain object-center'
						/>
					)}
				</div>

				<div className='w-full flex flex-col gap-2'>
					<h4
						className='w-auto flex text-nowrap'
						style={{
							fontFamily: fontFamily,
							fontSize: titleSize,
							color: titleColor,
						}}
					>
						{values.title || prevContent}
					</h4>
					<h5
						className='w-full text-nowrap'
						style={{
							fontFamily: fontFamily,
							fontSize: subTitleSize,
							color: subTitleColor,
						}}
					>
						{values.subTitle || prevContent}
					</h5>
				</div>
			</header>

			<section className='w-full h-full mt-4 p-6 flex justify-center break-words overflow-hidden'>
				<p
					className='max-w-full h-auto text-center'
					style={{
						fontFamily: fontFamily,
						fontSize: textSize,
						color: textColor,
					}}
				>
					{values.text || prevContent}
				</p>
			</section>
			<footer></footer>
		</div>
	)
}
