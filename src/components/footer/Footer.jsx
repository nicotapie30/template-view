import { Contact } from './Contact'
import { Copyright } from './Copyright'

export const Footer = () => {
	return (
		<footer className='w-full h-40 mt-40 p-4 flex flex-col justify-end items-center bg-slate-700 text-cyan-50'>
			<div className='flex flex-col items-center gap-4'>
				<h5 className='text-xl font-bold '>Contacto</h5>
				<div className='flex'>
					<Contact
						href='https://www.instagram.com/nicotapie1/'
						target='_blanck'
						src='./instagram.svg'
						alt='Instagram'
						title='Instagram'
					/>
					<Contact
						href='https://www.linkedin.com/in/nicolasatapiedev30/'
						target='_blanck'
						src='./linkedin.svg'
						alt='Linkedin'
						title='Linkedin'
					/>
					<Contact
						href='https://www.facebook.com/nico.tapie'
						target='_blanck'
						src='./facebook.svg'
						alt='Facebook'
						title='Facebook'
					/>
					<Contact
						href='https://mail.google.com/mail/?view=cm&fs=1&to=nicoatapie@gmail.com&su=Contáctame'
						target='_blanck'
						src='./mail.svg'
						alt='Mail'
						title='Mail'
					/>
				</div>
				<div>
					<Copyright />
				</div>
			</div>
		</footer>
	)
}
