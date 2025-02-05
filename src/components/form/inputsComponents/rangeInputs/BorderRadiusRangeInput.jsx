import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const BorderRadiusRangeInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_BORDERRADIUS', payload: value })
	}

	return (
		<Input
			type='range'
			name='Radio de los bordes'
			id='borderRadius'
			min='0'
			max='50'
			unit='px'
			value={state.borderRadius}
			onChange={handleChange}
		/>
	)
}
