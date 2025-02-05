import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const ImageWidthRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_WIDTH-IMAGE', payload: value })
	}

	return (
		<Input
			type='range'
			name='Ancho de la imágen'
			id='widthImage'
			min='10'
			max=''
			unit='%'
			value={state.widthImage}
			onChange={handleChange}
		/>
	)
}
