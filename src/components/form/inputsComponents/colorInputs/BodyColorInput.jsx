import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BodyColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BODY-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del body'
			id='bodyColor'
			value={state.bodyColor}
			onChange={handleChange}
		/>
	)
}
