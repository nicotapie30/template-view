import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BackgroundColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BACKGROUND-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del fondo'
			id='backgroundColor'
			value={state.backgroundColor}
			onChange={handleChange}
		/>
	)
}
