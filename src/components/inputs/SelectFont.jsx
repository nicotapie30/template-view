export const SelectFont = ({ font, setFont }) => {
	const handleSelect = (e) => {
		setFont(e.target.value)
	}

	const className = 'w-full p-2 bg-blue-50 text-slate-800 font-medium'

	return (
		<select
			className='w-full p-2 mt-4 bg-gray-800/20 text-slate-900 rounded-md font-semibold outline-none'
			name='select'
			id='select'
			value={font}
			onChange={handleSelect}
		>
			<option value='' className={className}>
				Fuente...
			</option>
			<option value='font-sans' className={className}>
				font-sans
			</option>
			<option value='font-serif' className={className}>
				font-serif
			</option>
			<option value='font-mono' className={className}>
				font-mono
			</option>
		</select>
	)
}
