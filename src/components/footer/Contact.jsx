export const Contact = ({ href, target, src, alt, title }) => {
	return (
		<div className='p-2 hover:bg-black/10 rounded-full cursor-pointer'>
			<a href={href} target={target}>
				<img src={src} alt={alt} title={title} />
			</a>
		</div>
	)
}
