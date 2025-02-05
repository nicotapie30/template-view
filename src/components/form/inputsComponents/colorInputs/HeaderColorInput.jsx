import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const HeaderColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_HEADER-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del header'
			id='headerColor'
			value={state.headerColor}
			onChange={handleChange}
		/>
	)
}
