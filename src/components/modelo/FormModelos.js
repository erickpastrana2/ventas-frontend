import React, { useContext, useEffect, useState } from 'react'
import { ModalContex } from '../../context/modalContext';
import { ModeloContext } from '../../context/modeloContext';

const FormModelos = () => {

    const modeloDefault = {
        idmodelo : '',
        descripcion : '' 
    }

    const [modelo, setModelo] = useState(modeloDefault);

    const { setShowModal } = useContext(ModalContex);

    const [mensaje, setMensaje] = useState(null);

    const { registratModelo, actualizarModelo, modeloActual, obtenerModelo, isDisabled } =useContext(ModeloContext);

    useEffect(() => {
        if(modeloActual !== null){
            setModelo({
                ...modeloActual

            });
        }else{
            setModelo(modeloDefault);
        }
        // eslint-disable-next-line
    }, [modeloActual]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(modelo);
        if(modelo.idmodelo.trim() === '' || modelo.descripcion.trim() === ''){
            setMensaje('El id del modelo y la descripcion son requeridas')
            return;
        }

        //obtenner objeto a enviar
        if(modeloActual !== null){
            actualizarModelo(obtenerModeloEnviar())
        }else{
            registratModelo(obtenerModeloEnviar());
        }
        

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setModelo(modeloDefault);
    }

    const handleChange = e => {
        setModelo({
            ...modelo,
            [e.target.name] : e.target.value
        })
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerModelo(null);
    }

    const obtenerModeloEnviar = () => {
        let modeloTemp = {...modelo};
        return modeloTemp;
    }

    return ( 
        <form onSubmit={handleOnSubmit}>
        
            <section className="modal-card-body">
            { mensaje ? <div className='notification is-danger'>{mensaje}</div> : ''}
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Modelo y descripción</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Ingrese el Modelo"
                        name="idmodelo"
                        disabled={isDisabled}
                        value={modelo.idmodelo}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fa-solid fa-m"></i>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Ingrese la Descripción"
                        name="descripcion"
                        value={modelo.descripcion}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fa-solid fa-d"></i>
                    </span>
                    </p>
                </div>
                </div>
            </div>


            
            </section>
            <footer className="modal-card-foot">
                <button type="submit" className="button is-primary mr-1">Guardar</button>
                <button
                    type="button"
                    className="button"
                    onClick={ () => cerrarModal() }
                >Cancelar</button>
            </footer>
        </form>
     );
}
 
export default FormModelos;