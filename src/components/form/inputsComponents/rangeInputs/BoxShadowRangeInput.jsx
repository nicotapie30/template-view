import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BoxShadowRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BOXSHADOW-SIZE', payload: value })
	}

	return (
		<Input
			type='range'
			name='Tamaño del Box Shadow'
			id='boxShadowSize'
			min='0'
			max='20'
			unit='px'
			value={state.boxShadowSize}
			onChange={handleChange}
		/>
	)
}
