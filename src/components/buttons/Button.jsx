export const Button = ({ type, content }) => {
	const className =
		type === 'submit'
			? 'w-24 h-10 bg-blue-600 text-lg text-white font-medium rounded-md hover:bg-blue-800'
			: 'w-24 h-10 bg-gray-300/50 font-medium backdrop-blur-3xl rounded-md hover:bg-gray-400/50'

	return (
		<>
			<button type={type} className={className}>
				{content}
			</button>
		</>
	)
}