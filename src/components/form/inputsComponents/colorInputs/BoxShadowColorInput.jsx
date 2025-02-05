import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BoxShadowColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BOXSHADOW-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del Box Shadow'
			id='boxShadowColor'
			value={state.boxShadowColor}
			onChange={handleChange}
		/>
	)
}
