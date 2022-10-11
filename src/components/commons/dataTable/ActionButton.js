import React, { useContext } from 'react';
import { ModalContex } from '../../../context/modalContext';
import { ModeloContext } from '../../../context/modeloContext';

const ActionButton = (props) => {

    const { setShowModal, setModalTitle } = useContext(ModalContex);
    const { setIsDisabled } = useContext(ModeloContext);

    const abrirModalModificar = () => {
        props.obtenerObject(props.genericObject);
        setModalTitle(`Modificar ${props.modalTitle}`);
        setShowModal(true);
        setIsDisabled(true);
    }

    if(props.actionType === 'edit'){
        return ( 
            <button className="button is-small is-info mr-1" 
                title='Modificar'
                onClick={ () => abrirModalModificar()}
            >
                <span className="icon is-small">
                <i className="fas fa-edit"></i>
                </span>
            </button>
         );
    }else if(props.actionType === 'delete'){
        return (
            <button className="button is-small is-danger" 
                title="Eliminar"
                onClick={ () => props.eliminarObject(props.id) }
            >
                <span className="icon is-small">
                <i className="fas fa-trash-alt"></i>
                </span>
            </button>
        );
    }else{
        console.error(`invalid argument props.actionType=${props.actionType} in component ActionButton`);
    }

    
}
 
export default ActionButton;