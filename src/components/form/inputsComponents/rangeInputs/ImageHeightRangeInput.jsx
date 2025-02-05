import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const ImageHeightRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_HEIGHT-IMAGE', payload: value })
	}

	return (
		<Input
			type='range'
			name='Alto de la imágen'
			id='heightImage'
			min='10'
			max=''
			unit='%'
			value={state.heightImage}
			onChange={handleChange}
		/>
	)
}
