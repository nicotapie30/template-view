function App() {
	return (
		<div>
			<header>
				<div>
					<img src='./Logo-TemplateView.webp' alt='Logo TemplateView' />
				</div>
			</header>
			<main>
				<h1>Template View</h1>
				<div>
					<form>
						<h2>Crear plantilla</h2>
						<label htmlFor='title'>
							Titulo
							<input type='text' name='title' id='title' />
						</label>

						<label htmlFor='description'>
							Descripción
							<input type='text' name='description' id='description' />
						</label>

						<label htmlFor='backgroundColor'>
							Color de fondo
							<input type='color' name='backgroundColor' id='backgroundColor' />
						</label>

						<label htmlFor='textColor'>
							Text Color
							<input type='color' name='textColor' id='textColor' />
						</label>

						<button type='submit'>Crear</button>
						<button type='reset'>Resetear</button>
					</form>
				</div>
				<div>
					<h3>Plantilla</h3>
					<div>
						<h4>Titulo</h4>
						<p>Descripción</p>
					</div>
				</div>
			</main>
			<footer>
				<div>
					<h5>Contacto</h5>
					<div>
						<a href='https://www.instagram.com/nicotapie1/' target='_blanck'>
							<img src='./instagram.svg' alt='Instagram' />
						</a>
					</div>
					<div>
						<a
							href='https://www.linkedin.com/in/nicolasatapiedev30/'
							target='_blanck'
						>
							<img src='./linkedin.svg' alt='Linkedin' />
						</a>
					</div>
					<div>
						<a href='https://www.facebook.com/nico.tapie' target='_blanck'>
							<img src='./facebook.svg' alt='Facebook' />
						</a>
					</div>
					<div>
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=nicoatapie@gmail.com&su=Contáctame'
							target='_blanck'
						>
							<img src='./mail.svg' alt='Mail' />
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
