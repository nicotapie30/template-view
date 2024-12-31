export const handleImageChange = (e, setInputValue) => {
	const file = e.target.files[0]
	if (file) {
		const reader = new FileReader()
		reader.onloadend = () => {
			setInputValue((prevState) => ({
				...prevState,
				image: reader.result,
			}))
		}
		reader.readAsDataURL(file)
	}
}
