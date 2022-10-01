import React, { useContext } from 'react';
import { ArticuloContext } from '../../context/articuloContext';
import { ModalContex } from '../../context/modalContext';

const Modal = (props) => {

    const {showModal, modalTitle, setShowModal, setModalTitle } = useContext(ModalContex);
    //const { obtenerArticulo, eliminarArticulo } = useContext(ArticuloContext);

    return ( 
        <div className={`modal ${showModal ? 'is-active': ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">{modalTitle}</p>
               
                </header>
                <div>
                    {props.children}
                </div>
                
            </div>
        </div>
     );
}
 
export default Modal;