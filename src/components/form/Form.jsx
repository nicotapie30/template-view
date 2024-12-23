import React, { useState } from 'react'
import { Button } from '../buttons/Button'
import { Input } from '../inputs/Input'

export const Form = () => {
	return (
		<form className='w-80 h-full p-4 mt-12 flex flex-col gap-4 bg-gray-800/10 backdrop-blur-3xl rounded-md shadow-md'>
			<h2 className='mb-4 text-center text-3xl font-bold text-red-600'>
				Crear plantilla
			</h2>
			<Input
				type='text'
				name='Título'
				id='Título'
				placeholder='Escribir aqui...'
			/>

			<Input
				type='text'
				name='Descripción'
				id='Descripción'
				placeholder='Escribir aqui...'
			/>

			<Input type='color' name='Color de fondo' id='backgroundColor' v />

			<Input type='color' name='Color de texto' id='textColor' />

			<div className='w-full h-full mt-8 flex justify-center items-center gap-6'>
				<Button type='submit' content='Crear' />
				<Button type='reset' content='Resetear' />
			</div>
		</form>
	)
}
