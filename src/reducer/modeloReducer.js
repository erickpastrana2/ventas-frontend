import { ELIMINAR_MODELO, MODIFICAR_MODELO, OBTENER_MODELO, OBTENER_MODELOS, REGISTRAT_MODELO } from "../const/actionTypes";

export default (state, action) => {
   
    switch (action.type) {
        case OBTENER_MODELOS:
            return{
                ...state, 
                modelosList: action.payload
            };
        case REGISTRAT_MODELO:
            return{
                ...state,
                modelosList: [...state.modelosList, action.payload]
            };
        case OBTENER_MODELO:
            return{
                ...state,
                modeloActual: action.payload
            };
        case MODIFICAR_MODELO:
            return{
                ...state,
                modelosList: state.modelosList.map(
                    modelo => (modelo.idmodelo === action.payload.idmodelo) ? action.payload : modelo
                )
            }
        case ELIMINAR_MODELO:
            return{
                ...state,
                modelosList: state.modelosList.filter( modelo => ( modelo.idmodelo !== action.payload) )
            }
        default:
            return state;
    }
}