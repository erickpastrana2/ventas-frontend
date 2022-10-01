import React, { useContext } from 'react';
import { ModalContex } from '../../context/modalContext';
import { ModeloContext } from '../../context/modeloContext';

const RowModelo = ({modelo}) => {

    const { setShowModal, setModalTitle } = useContext(ModalContex);
    const { obtenerModelo, eliminarModelo, setIsDisabled } = useContext(ModeloContext);

    const abrirModalModificar = () => {
        obtenerModelo(modelo);
        setModalTitle('Modificar modelo');
        setShowModal(true);
        setIsDisabled(true);
    }

    

    return ( 
        <tr>
            <td>
                <button className="button is-small is-info mr-1" 
                    title='Modificat'
                    onClick={ () => abrirModalModificar()}
                >
                    <span className="icon is-small">
                    <i className="fas fa-edit"></i>
                    </span>
                </button>

                <button className="button is-small is-danger" 
                    title="Eliminar"
                    onClick={ () => eliminarModelo(modelo.idmodelo) }
                >
                    <span className="icon is-small">
                    <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{modelo.idmodelo}</td>
            <td>{modelo.descripcion}</td>
        </tr>
     );
}
 
export default RowModelo;