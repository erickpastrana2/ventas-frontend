import { ELIMINAR_ARTICULO, MODIFICAR_ARTICULO, OBTENER_ARTICULO, OBTENER_ARTICULOS, REGISTRAT_ARTICULO } from "../const/actionTypes";

export default (state, action) => {
   
    switch (action.type) {
        case OBTENER_ARTICULOS:
            return{
                ...state, 
                articulosList: action.payload
            };
        case REGISTRAT_ARTICULO:
            return{
                ...state,
                articulosList: [...state.articulosList, action.payload]
            };
        case OBTENER_ARTICULO:
            return{
                ...state,
                articuloActual: action.payload
            };
        case MODIFICAR_ARTICULO:
            return{
                ...state,
                articulosList: state.articulosList.map(
                    articulo => (articulo.idcolor === action.payload.idcolor && articulo.idcodelo === action.payload.idcodelo) ? action.payload : articulo
                )
            }
        case ELIMINAR_ARTICULO:
            return{
                ...state,
                articulosList: state.articulosList.filter( articulo => (articulo.idcolor !== action.payload.idcolor && articulo.idmodelo === action.payload.idmodelo) )
            }
        default:
            return state;
    }
}