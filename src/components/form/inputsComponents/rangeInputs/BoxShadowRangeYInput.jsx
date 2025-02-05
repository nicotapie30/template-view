import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BoxShadowRangeXInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BOXSHADOW-SIZE-Y', payload: value })
	}

	return (
		<Input
			type='range'
			name='Tamaño del Box Shadow Y'
			id='boxShadowSizeY'
			min='0'
			max='20'
			unit='px'
			value={state.boxShadowSizeY}
			onChange={handleChange}
		/>
	)
}
