import { Header } from '@/components/header/Header'
import { Main } from '@/components/main/Main'
import { Footer } from '@/components/footer/Footer'

function App() {
	return (
		<div className='inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
			<Header />

			<Main />

			<Footer />
		</div>
	)
}

export default App
