import { Form } from '@/components/form/Form'
import { downloadPDF } from '@/utils/PDF/downloadPDF'
import { Button } from '../buttons/Button'

export const Main = () => {
	return (
		<main className='w-full h-full mt-12 p-4 flex flex-col items-center justify-center'>
			<h1 className='text-5xl font-bold text-blue-800'>Template View</h1>
			<div>
				<Form />
			</div>
			<Button
				onClick={downloadPDF}
				type='button'
				content='Descargar plantilla'
			/>
		</main>
	)
}
