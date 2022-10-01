import React, { useContext } from 'react';
import { ArticuloContext } from '../../context/articuloContext';
import { ModalContex } from '../../context/modalContext';

const ToolbarArticulo = () => {

    const { setShowModal, setModalTitle } = useContext(ModalContex);
    const { obtenerArticulo } = useContext(ArticuloContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar nuevo artículo');
        setShowModal(true);
        obtenerArticulo(null);
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
 
export default ToolbarArticulo;