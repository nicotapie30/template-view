import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const TextInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.traget

		dispatch({ type: 'SET_TEXT', payload: value })
	}

	return (
		<Input
			type='text'
			name='Texto'
			id='text'
			value={state.text}
			onChange={handleChange}
		/>
	)
}
