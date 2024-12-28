export const Button = ({ type, content, onClick }) => {
	const className =
		type === 'button' || type === 'reset'
			? 'w-auto h-10 px-3 bg-blue-600 text-lg text-white font-medium rounded-md hover:bg-blue-800'
			: 'w-auto h-10 px-3 bg-gray-400/40 font-medium backdrop-blur-3xl rounded-md hover:bg-gray-400/50'

	return (
		<>
			<button type={type} className={className} onClick={onClick}>
				{content}
			</button>
		</>
	)
}
