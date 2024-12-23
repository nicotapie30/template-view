export const Input = ({ type, value, placeholder, onChange, name, id }) => {
	return (
		<label htmlFor={id} className='flex flex-col gap-1 text-lg font-medium'>
			{name}
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className='border-none outline-none px-2 py-1 rounded-md text-base font-normal'
			/>
		</label>
	)
}
