import React, { createContext, useReducer } from 'react';
import { ELIMINAR_ARTICULO, MODIFICAR_ARTICULO, OBTENER_ARTICULO, OBTENER_ARTICULOS, REGISTRAT_ARTICULO } from '../const/actionTypes';
import ArticuloReducer from '../reducer/articuloReducer';
import { v4 as uuidv4 } from 'uuid';

import Axios from 'axios';
import Swal from 'sweetalert2'

export const ArticuloContext = createContext();

export const ArticuloContextProvider = props => {

    const initialState = {
        articulosList: [],
        articuloActual: null
    }

    const [state, dispatch] = useReducer(ArticuloReducer, initialState);

    const obtenerArticulos = async () => {
        try {
            const resultado = await Axios.post('/api/rest/getAllArticulos');
            dispatch({
                type: OBTENER_ARTICULOS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al obtener los articulos',
                toast: true
            });
            console.log(error);
        }
        
    }

    const registratArticulo = async articulo => {
        try {
            const resultado = await Axios.post('/api/rest/saveArticulo', articulo);
            console.log(resultado);
            dispatch({
                type: REGISTRAT_ARTICULO,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Articulo registrado correctamente',
                toast: true
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al registrar el articulo',
                toast: true
            });
            console.log(error);
        }
       
    }

    const obtenerArticulo = async articulo => {
        try {
            let articuloEcontrado = null;
            if(articulo !== null){
                const resultado = await Axios.get(`/api/articulos/${articulo.idArticulo}`);
                articuloEcontrado = resultado.data.value;
            }
            

            dispatch({
                type: OBTENER_ARTICULO,
                payload: articuloEcontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al obtener el articulo',
                toast: true
            });
            console.log(error);
        }
        
    }

    const actualizarArticulo = async articulo => {
        try {
            const resultado = await Axios.put('/api/articulos', articulo);

            dispatch({
                type: MODIFICAR_ARTICULO,
                payload: resultado.data.value
            })

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Articulo modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al modificar el articulo',
                toast: true
            });
            console.log(error);
        }
        
    }

    const eliminarArticulo = async (idcolor, idmodelo) => {
        try {

            Swal.fire({
                title: '¿Desea cntinuar?',
                text: 'Se eliminará el artículo',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if(result.value){
                    await Axios.delete(`/api/articulos/${idcolor}`);
            
                    dispatch({
                        type: ELIMINAR_ARTICULO,
                        payload: idcolor
                    })

                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Articulo eliminado correctamente',
                        toast: true
                    });
                        }
                });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al eliminar el articulo',
                toast: true
            });
            console.log(error);
        }
       
    }

    return(
        <ArticuloContext.Provider
            value={{
                articulosList: state.articulosList,
                articuloActual: state.articuloActual,

                obtenerArticulos,
                registratArticulo,
                obtenerArticulo,
                actualizarArticulo,
                eliminarArticulo
            
            }}
        >
            {props.children}
        </ArticuloContext.Provider>
    )
}