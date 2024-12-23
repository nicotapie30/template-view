import { Form } from '../form/Form'

export const Main = () => {
	return (
		<main className='w-full h-full mt-12 p-4 flex flex-col items-center'>
			<h1 className='text-5xl font-bold text-blue-800'>Template View</h1>
			<div>
				<Form />
			</div>

			<div className='w-full h-96 mt-28'>
				<h3 className='mb-2 text-2xl text-gray-800 text-center font-semibold'>
					Plantilla
				</h3>
				<div className='w-full h-full p-4 flex flex-col items-center border-2 border-black/20 rounded-md'>
					<h4>Titulo</h4>
					<p>Descripción</p>
				</div>
			</div>
		</main>
	)
}
