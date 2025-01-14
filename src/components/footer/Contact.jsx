export const Contact = ({ href, target, src, alt, title }) => {
	return href && target ? (
		<div className='p-2 hover:bg-black/10 rounded-full cursor-pointer'>
			<a href={href} target={target}>
				<img src={src} alt={alt} title={title} />
			</a>
		</div>
	) : (
		<div className='p-2 hover:bg-black/20 rounded-full bg-gray-300/50  cursor-default'>
			<a href={href} target={target}>
				<img
					className='mix-blend-difference hover:mix-blend-lighten'
					src={src}
					alt={alt}
					title={title}
				/>
			</a>
		</div>
	)
}
