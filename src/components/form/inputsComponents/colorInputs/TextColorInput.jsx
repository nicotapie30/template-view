import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const TextColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_TEXT-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del texto'
			id='textColor'
			value={state.textColor}
			onChange={handleChange}
		/>
	)
}
