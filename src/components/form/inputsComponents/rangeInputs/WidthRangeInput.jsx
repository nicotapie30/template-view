import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const WidthRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_WIDTH', payload: value })
	}

	return (
		<Input
			type='range'
			name='Ancho'
			id='width'
			min='30'
			max=''
			unit='%'
			value={state.width}
			onChange={handleChange}
		/>
	)
}
