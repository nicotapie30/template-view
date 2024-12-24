import { Form } from '@/components/form/Form'

export const Main = () => {
	return (
		<main className='w-full h-full mt-12 p-4 flex flex-col items-center'>
			<h1 className='text-5xl font-bold text-blue-800'>Template View</h1>
			<div>
				<Form />
			</div>
		</main>
	)
}
