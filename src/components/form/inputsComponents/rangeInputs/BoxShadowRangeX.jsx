import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BoxShadowRangeXInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BOXSHADOW-SIZE-X', payload: value })
	}

	return (
		<Input
			type='range'
			name='Tamaño del Box Shadow X'
			id='boxShadowSizeX'
			min='0'
			max='20'
			unit='px'
			value={state.boxShadowSizeX}
			onChange={handleChange}
		/>
	)
}
