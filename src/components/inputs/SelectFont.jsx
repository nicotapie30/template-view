export const SelectFont = ({ font, setFont }) => {
	const handleSelect = (e) => {
		setFont(e.target.value)
	}

	const fonts = [
		{ id: 'fuente', label: 'Fuente' },
		{ id: 'font-sans', label: 'Sans Serif' },
		{ id: 'font-serif', label: 'Serif' },
		{ id: 'font-mono', label: 'Monospace' },
	]

	return (
		<select
			className='w-full p-2 mt-4 bg-gray-800/20 text-slate-900 rounded-md font-semibold outline-none'
			name='select'
			id='select'
			value={font}
			onChange={handleSelect}
		>
			{fonts.map((font) => (
				<option
					key={font.id}
					value={font.id}
					className='w-full p-2 bg-blue-50 text-slate-800 font-medium'
				>
					{font.label}
				</option>
			))}
		</select>
	)
}
