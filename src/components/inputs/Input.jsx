export const Input = ({
	type,
	value,
	placeholder,
	onChange,
	name,
	id,
	min,
	max,
}) => {
	const className = () => {
		if (type === 'range') {
			return 'border-none outline-none py-1 rounded-md text-base font-normal accent-blue-500'
		} else if (type === 'file') {
			return 'text-sm text-slate-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-gray-700 hover:file:bg-blue-100'
		} else {
			return 'border-none outline-none px-2 py-1 rounded-md text-base font-normal'
		}
	}

	return (
		<label
			htmlFor={id}
			className='flex flex-col gap-1 text-lg font-medium relative'
		>
			{name}
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				min={min}
				max={max}
				className={className()}
			/>
			{type === 'range' && (
				<span className='text-gray-800 text-base font-medium absolute top-14'>
					{value}px
				</span>
			)}
		</label>
	)
}
