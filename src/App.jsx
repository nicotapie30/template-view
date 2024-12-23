import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<div className='absolute w-full h-full top-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(110,109,250,0.3),rgba(255,255,255,0))]'>
			<Header />

			<Main />

			<Footer />
		</div>
	)
}

export default App
