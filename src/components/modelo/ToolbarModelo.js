import React, { useContext } from 'react'
import { ModalContex } from '../../context/modalContext';
import { ModeloContext } from '../../context/modeloContext';

const ToolbarModelo = () => {

    const {setShowModal, setModalTitle } = useContext(ModalContex);
    const { setIsDisabled } = useContext(ModeloContext);

    const abrirModalCrear = () =>{
        setModalTitle('Registrar nuevo Modelo');
        setShowModal(true);
        setIsDisabled(false);
    }

    return ( 
        <div className="container">
            <button className="button is-small is-primary"
                onClick={ () => abrirModalCrear() }
            >
                <span className="icon is-small">
                <i className="fas fa-plus"></i>
                </span>
                <span>
                    Registrat nuevo
                </span>
            </button>
        </div>
     );
}
 
export default ToolbarModelo;