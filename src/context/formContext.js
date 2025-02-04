import { createContext, useContext, useReducer } from 'react'
import initialValues from './initialValues'

// Crear contexto
const FormContext = createContext()

// Usar el contexto
export const useFormContext = () => {
	useContext(FormContext)
}

// Reducer que maneja las acciones
const formReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TITLE':
			return { ...state, title: action.payload }

		case 'SET_TITLE-SIZE':
			return { ...state, titleSize: action.payload }

		case 'SET_TITLE-COLOR':
			return { ...state, titleColor: action.payload }

		case 'SET_SUBTITLE':
			return { ...state, subtitle: action.payload }

		case 'SET_SUBTITLE-SIZE':
			return { ...state, subTitleSize: action.payload }

		case 'SET_SUBTITLE-COLOR':
			return { ...state, subTitleColor: action.payload }

		case 'SET_WIDTH':
			return { ...state, width: action.payload }

		case 'SET_HEIGHT':
			return { ...state, height: action.payload }

		case 'SET_BORDERRADIUS':
			return { ...state, borderRadius: action.payload }

		case 'SET_TEXT':
			return { ...state, text: action.payload }

		case 'SET_TEXT-SIZE':
			return { ...state, textSize: action.payload }

		case 'SET_TEXT-COLOR':
			return { ...state, textColor: action.payload }

		case 'SET_BACKGROUND-COLOR':
			return { ...state, backgroundColor: action.payload }

		case 'SET_HEADER-COLOR':
			return { ...state, headerColor: action.payload }

		case 'SET_BODY-COLOR':
			return { ...state, bodyColor: action.payload }

		case 'SET_IMAGE':
			return { ...state, image: action.payload }

		case 'SET_WIDTH-IMAGE':
			return { ...state, widthImage: action.payload }

		case 'SET_HEIGHT-IMAGE':
			return { ...state, heightImage: action.payload }

		case 'SET_RADIUS-IMAGE':
			return { ...state, borderRadiusImage: action.payload }

		case 'SET_BOXSHADOW-SIZE-X':
			return { ...state, boxShadowSizeX: action.payload }

		case 'SET_BOXSHADOW-SIZE-Y':
			return { ...state, boxShadowSizeY: action.payload }

		case 'SET_BOXSHADOW-SIZE':
			return { ...state, boxShadowSize: action.payload }

		case 'SET_BOXSHADOW-COLOR':
			return { ...state, boxShadowColor: action.payload }

		case 'RESET_FORM':
			return initialValues

		default:
			return state
	}
}

// Crear provider que sirve el contexto
export const FormProvider = ({ children }) => {
	const [state, dispatch] = useReducer(formReducer, initialValues)

	return (
		<FormContext.Provider value={{ state, dispatch }}>
			{children}
		</FormContext.Provider>
	)
}
