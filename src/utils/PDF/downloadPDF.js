import domtoimage from 'dom-to-image'
import jsPDF from 'jspdf'

export const downloadPDF = () => {
	const element = document.querySelector('#template')

	// Capturar el elemento como imágen
	domtoimage
		.toPng(element)
		.then((dataURL) => {
			const img = new Image()
			img.src = dataURL

			// Crear PDF e insertar la imágen capturada
			const pdf = new jsPDF({
				orientation: 'portrait',
				unit: 'px',
				format: [element.offsetWidth, element.offsetHeight],
				padding: '5px',
			})

			pdf.addImage(img, 'PNG', 0, 0, element.offsetWidth, element.offsetHeight)
			pdf.save('plantilla.pdf')
		})
		.catch((err) => {
			alert(`Error capturando el eleménto: ${err}`)
		})
}
