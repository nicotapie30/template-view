import { useFormContext } from '@/context/formContext'
import { Input } from '@/inputs/Input'

export const ImageInput = () => {
	const { dispatch } = useFormContext()

	const handleImageChange = (e) => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				dispatch({ type: 'SET_IMAGE', payload: reader.result })
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<Input
			type='file'
			name='Cargar Imágen'
			id='image'
			onChange={handleImageChange}
		/>
	)
}
