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
	return (
		<div
			className='w-2/5 h-1/3 p-4 transition-all z-10'
			style={{
				backgroundColor: backgroundColor,
				borderRadius: borderRadius,
				boxShadow: `${boxShadowSizeX}px ${boxShadowSizeY}px ${boxShadowSize}px ${boxShadowColor}`,
			}}
		>
			<header className='w-full h-auto flex flex-col gap-6'>
				<div>
					{image && (
						<img
							src={image}
							alt='User image'
							title='Imágen de usuario'
							className='w-14 h-14 rounded-full border-2 border-white object-contain object-center'
						/>
					)}
				</div>

				<h4
					className='w-full'
					style={{
						fontFamily: fontFamily,
						fontSize: titleSize,
						color: titleColor,
					}}
				>
					{values.title || 'Título'}
				</h4>
			</header>
			<section className='w-full h-auto flex flex-col gap-4'>
				<h5
					className='w-full'
					style={{
						fontFamily: fontFamily,
						fontSize: subTitleSize,
						color: subTitleColor,
					}}
				>
					{values.subTitle || 'Subtítulo'}
				</h5>

				<p
					className='w-full text-wrap'
					style={{
						fontFamily: fontFamily,
						fontSize: textSize,
						color: textColor,
					}}
				>
					{values.text || 'Texto'}
				</p>
			</section>
			<footer></footer>
		</div>
	)
}
