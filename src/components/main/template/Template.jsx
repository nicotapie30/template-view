import { CardTemplate } from './cardTemplate/CardTemplate'

const templatemMap = {
	card: CardTemplate,
}

export const Template = ({ type, values, font }) => {
	const SelectedTemplate = templatemMap[type]

	if (!SelectedTemplate) {
		return (
			<div className='w-full h-full rounded-md bg-red-400 font-bold'>
				Error: Tipo de plantilla no valida
			</div>
		)
	} else {
		return (
			<div className='w-full h-auto'>
				<SelectedTemplate values={values} font={font} />
			</div>
		)
	}
}
