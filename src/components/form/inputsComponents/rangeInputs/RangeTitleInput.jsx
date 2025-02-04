import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const RangeTitleInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_TITLE-SIZE', payload: value })
	}

	return (
		<Input
			type='range'
			name='Tamaño del título'
			id='titleSize'
			min='10'
			max='50'
			unit='px'
			value={state.titleSize}
			onChange={handleChange}
		/>
	)
}
