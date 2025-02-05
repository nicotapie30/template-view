import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const TextRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_TEXT-SIZE', payload: value })
	}

	return (
		<Input
			type='range'
			name='Tamaño del texto'
			id='textSize'
			min='5'
			max='30'
			unit='px'
			value={state.textSize}
			onChange={handleChange}
		/>
	)
}
