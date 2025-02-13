import { Contact } from '@/components/footer/Contact'

export const CardTemplate = ({ values, font }) => {
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
		<span className='w-auto h-6 px-1 text-xs font-medium text-nowrap text-gray-700 bg-gray-400/60 rounded-sm border-none flex flex-1 items-center cursor-default transition-all sm:text-sm sm:px-5'>
			Agregar texto...
		</span>
	)

	const prevContentImage = (
		<div className='w-20 h-20 max-w-20 max-h-20  text-xs font-medium text-gray-700 text-center bg-gray-400/70 rounded-full border-none flex flex-1 items-center justify-center cursor-default transition-all sm:w-40 sm:h-40'>
			Agregar imágen...
		</div>
	)

	return (
		<div
			className='w-auto h-auto max-w-2/5 flex flex-col place-self-center transition-all z-10 border-none overflow-hidden lg:w-2/6 lg:mt-6 lg:h-3/5'
			style={{
				backgroundColor: backgroundColor,
				borderRadius: borderRadius,
				boxShadow: `${boxShadowSizeX}px ${boxShadowSizeY}px ${boxShadowSize}px ${boxShadowColor}`,
				maxWidth: '100%',
			}}
		>
			<header
				className='w-full h-full max-w-full p-6 flex gap-6 justify-start items-center transition-all lg:pl-10'
				style={{
					backgroundColor: headerColor,
					borderTopLeftRadius: borderRadius,
					borderTopRightRadius: borderRadius,
				}}
			>
				<div className='w-24 h-24 rounded-full flex items-center transition-all lg:w-32 lg:h-32'>
					{(image && (
						<img
							src={image}
							alt='User image'
							title='Imágen de usuario'
							className='w-full h-full rounded-full border-none outline-none object-cover object-center'
						/>
					)) ||
						prevContentImage}
				</div>

				<div className='w-auto h-auto max-w-full flex flex-col gap-1 break-words transition-all'>
					<h4
						className='max-w-full h-auto font-bold transition-all break-words overflow-hidden'
						style={{
							fontFamily: fontFamily,
							fontSize: titleSize,
							color: titleColor,
							whiteSpace: 'pre-wrap',
							wordWrap: 'break-word',
							wordBreak: 'break-word',
						}}
					>
						{values.title || prevContentText}
					</h4>
					<h5
						className='max-w-full h-auto font-semibold transition-all break-words overflow-hidden'
						style={{
							fontFamily: fontFamily,
							fontSize: subTitleSize,
							color: subTitleColor,
							whiteSpace: 'pre-wrap',
							wordWrap: 'break-word',
							wordBreak: 'break-word',
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
						fontSize: textSize,
						color: textColor,
					}}
				>
					{values.text || prevContentText}
				</p>
			</section>
			<footer className='w-full h-auto p-2 flex justify-center items-center gap-4 transition-all'>
				<Contact
					className=''
					src='./instagram.svg'
					alt='Instagram'
					title='Instagram'
				/>
				<Contact src='./linkedin.svg' alt='Linkedin' title='Linkedin' />
				<Contact src='./facebook.svg' alt='Facebook' title='Facebook' />
				<Contact src='./mail.svg' alt='Email' title='Email' />
			</footer>
		</div>
	)
}
