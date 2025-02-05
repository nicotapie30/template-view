import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const HeightRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_HEIGHT', payload: value })
	}

	return (
		<Input
			type='range'
			name='Alto'
			id='height'
			min='30'
			max=''
			unit='%'
			value={state.height}
			onChange={handleChange}
		/>
	)
}
