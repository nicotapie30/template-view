import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const TitleInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target
		dispatch({ type: 'SET_TITLE', payload: value })
	}

	return (
		<Input
			type='text'
			name='Título'
			id='title'
			value={state.title}
			onChange={handleChange}
		/>
	)
}
