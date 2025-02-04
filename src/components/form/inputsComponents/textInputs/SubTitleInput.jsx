import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const SubTitleInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_SUBTITLE', payload: value })
	}

	return (
		<Input
			type='text'
			name='Subtítulo'
			id='subtitle'
			value={state.subTitle}
			onChange={handleChange}
		/>
	)
}
