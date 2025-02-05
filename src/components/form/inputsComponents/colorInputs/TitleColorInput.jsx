import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const TitleColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_TITLE-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del título'
			id='titleColor'
			value={state.titleColor}
			onChange={handleChange}
		/>
	)
}
