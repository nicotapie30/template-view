import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const SubtitleColorInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_SUBTITLE-COLOR', payload: value })
	}

	return (
		<Input
			type='color'
			name='Color del subtítulo'
			id='subTitleColor'
			value={state.subTitleColor}
			onChange={handleChange}
		/>
	)
}
