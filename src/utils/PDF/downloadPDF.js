import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const downloadPDF = () => {
	const element = document.querySelector('#template')

	// Capturar el elemento como imágen
	html2canvas(element).then((canvas) => {
		const imgData = canvas.toDataURL('image/png')

		// Crear PDF e insertar la imágen capturada
		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: [canvas.width, canvas.height],
			padding: '5px',
		})

		pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
		pdf.save('plantilla.pdf')
	})
}
