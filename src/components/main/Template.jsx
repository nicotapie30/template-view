import './template.css'

export const Template = ({ values, font }) => {
	const {
		backgroundColor,
		titleColor,
		textColor,
		fontTitleSize,
		fontTextSize,
		image,
		borderRadius,
		boxShadowSize,
		boxShadowSizeX,
		boxShadowSizeY,
		boxShadowColor,
	} = values

	const fontFamily =
		font === 'font-sans'
			? 'Arial, sans-serif'
			: font === 'font-serif'
				? 'Georgia, serif'
				: font === 'font-mono'
					? 'Courier New, monospace'
					: ''

	return (
		<section className='w-full flex flex-col gap-4'>
			<h3 className='mb-1 mt-12 text-4xl text-gray-800 text-center font-bold'>
				Plantilla
			</h3>
			<article id='template' className='w-full h-full p-4 overflow-hidden'>
				<div
					className='template-container'
					style={{
						backgroundColor: backgroundColor,
						borderRadius: `${borderRadius}px`,
						boxShadow: `${boxShadowSizeX}px ${boxShadowSizeY}px ${boxShadowSize}px ${boxShadowColor}`,
					}}
				>
					<h4
						className='mb-10 mt-3 text-4xl font-bold'
						style={
							titleColor && {
								color: titleColor,
								fontFamily: fontFamily,
								fontSize: `${fontTitleSize}px`,
							}
						}
					>
						{values.title}
					</h4>
					<p
						className='w-full text-lg flex justify-center'
						style={
							textColor && {
								color: textColor,
								fontFamily: fontFamily,
								fontSize: `${fontTextSize}px`,
							}
						}
					>
						{values.text}
					</p>
					{image && (
						<div className='w-8/12 h-6/12'>
							<img
								src={image}
								alt='Image'
								className='size-full rounded-md border-none outline-none object-contain'
							/>
						</div>
					)}
				</div>
			</article>
		</section>
	)
}
