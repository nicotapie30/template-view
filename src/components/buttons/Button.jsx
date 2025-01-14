export const Button = ({ type, content, onClick }) => {
	const className =
		type === 'button' || type === 'reset'
			? 'w-auto h-10 px-3 bg-blue-500 text-lg text-white font-medium rounded-md hover:bg-blue-800'
			: content === 'Card' || content === `Invitation` || content === 'Banner'
				? 'w-28 px-4 py-4 text-lg font-semibold bg-blue-50 border-2 border-transparent rounded-md shadow-md hover:bg-blue-100 hover:border-blue-500 focus:bg-blue-100 focus:border-blue-500 transition-all'
				: 'w-auto h-10 px-3 bg-gray-400/40 font-medium backdrop-blur-3xl rounded-md hover:bg-gray-400/50'

	return (
		<>
			<button type={type} className={className} onClick={onClick}>
				{content}
			</button>
		</>
	)
}
