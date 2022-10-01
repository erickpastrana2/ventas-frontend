import React, { createContext, useReducer, useState } from 'react'
import { ELIMINAR_MODELO, MODIFICAR_MODELO, OBTENER_MODELO, OBTENER_MODELOS, REGISTRAT_MODELO } from "../const/actionTypes";
import modeloReducer from '../reducer/modeloReducer';

import Axios from 'axios';
import Swal from 'sweetalert2';

export const ModeloContext =  createContext();

export const ModeloContextProvider = props => {

    const initialState = {
        modelosList: [],
        modeloActual: null
    }

    const [isDisabled, setIsDisabled] = useState(false);

    const [state, dispatch] = useReducer(modeloReducer, initialState);

    const obtenerModelos = async () => {
        try{
            const resultado = await Axios.post('/api/rest/modelos/getAll');
            dispatch({
                type: OBTENER_MODELOS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al obtener los modelos',
                toast: true
            });
            console.log(error);
        }
        
    }

    const registratModelo = async modelo => {
        try {
            const resultado = await Axios.post('/api/rest/modelos/save', modelo);
            console.log(resultado);
            dispatch({
                type: REGISTRAT_MODELO,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Modelo registrado correctamente',
                toast: true
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al registrar el modelo',
                toast: true
            });
            console.log(error);
        }
       
    }

    const obtenerModelo = async modelo => {
        try {
            let modeloEcontrado = null;
            if(modelo !== null){
                const resultado = await Axios.post(`/api/rest/modelos/getById`, null, {
                    params: {
                        id: modelo.idmodelo
                    }
                    
                });
                modeloEcontrado = resultado.data;
                console.log(resultado)
                console.log(modeloEcontrado)
            }
            
            

            dispatch({
                type: OBTENER_MODELO,
                payload: modeloEcontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al obtener el modelo',
                toast: true
            });
            console.log(error);
        }
        
    }

    const actualizarModelo = async modelo => {
        try {
            const resultado = await Axios.put('/api/rest/modelos/update', modelo);

            dispatch({
                type: MODIFICAR_MODELO,
                payload: resultado.data
            })

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Modelo modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al modificar el modelo',
                toast: true
            });
            console.log(error);
        }
        
    }

    const eliminarModelo = async (idmodelo) => {
        try {

            Swal.fire({
                title: '¿Desea cntinuar?',
                text: 'Se eliminará el modelo',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if(result.value){
                    await Axios.delete(`/api/rest/modelos/delete/${idmodelo}`);
            
                    dispatch({
                        type: ELIMINAR_MODELO,
                        payload: idmodelo
                    })

                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Modelo eliminado correctamente',
                        toast: true
                    });
                        }
                });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al eliminar el modleo',
                toast: true
            });
            console.log(error);
        }
       
    }

    return (  
        <ModeloContext.Provider
            value={{
                modelosList: state.modelosList,
                modeloActual: state.modeloActual,
                isDisabled,

                obtenerModelos,
                obtenerModelo,
                eliminarModelo,
                actualizarModelo,
                registratModelo,
                setIsDisabled
            }}
        >
            {props.children}
        </ModeloContext.Provider>
    );
}
 
