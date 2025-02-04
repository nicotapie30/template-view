import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const RnageSubTitleInput = () => {
	const { state, dispatch } = useFormContext()

	const handleChange = (e) => {
		const { value } = e.target

		dispatch({ type: 'SET_SUBTITLE-SIZE', payload: value })
	}

	return (
		<Input
			type='range'
			name='Tamaño del subtítulo'
			id='subTitleSize'
			min='8'
			max='35'
			unit='px'
			value={state.subTitleSize}
			onChange={handleChange}
		/>
	)
}
