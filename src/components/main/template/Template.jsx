import { CardTemplate } from './cardTemplate/CardTemplate'
import { BannerTemplate } from './bannerTemplate/BannerTemplate'

const templateMap = {
	card: CardTemplate,
	banner: BannerTemplate,
}

export const Template = ({ type, values, font }) => {
	const SelectedTemplate = templateMap[type]

	if (!SelectedTemplate) {
		return (
			<div className='w-full h-20 flex items-center justify-center rounded-md bg-red-400 text-lg font-semibold'>
				Error: Tipo de plantilla no valida
			</div>
		)
	} else {
		return (
			<div className='w-full h-screen'>
				<SelectedTemplate values={values} font={font} />
			</div>
		)
	}
}
