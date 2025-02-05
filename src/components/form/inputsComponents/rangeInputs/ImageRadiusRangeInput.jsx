import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const ImageRadiusRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_RADIUS-IMAGE', payload: Number(value) })
	}

	return (
		<Input
			type='range'
			name='Ancho de la imágen'
			id='borderRadiusImage'
			min='0'
			max='100'
			unit='px'
			value={state.borderRadiusImage}
			onChange={handleChange}
		/>
	)
}
