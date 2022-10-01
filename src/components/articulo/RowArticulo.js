import React, { useContext } from 'react'
import { ArticuloContext } from '../../context/articuloContext';
import { ModalContex } from '../../context/modalContext';

const RowArticulo = ({articulo}) => {

    const { setShowModal, setModalTitle } = useContext(ModalContex);
    const { obtenerArticulo, eliminarArticulo } = useContext(ArticuloContext);

    const abrirModalModificatArticulo = () => {
        obtenerArticulo(articulo);
        setModalTitle('Modificar articulo');
        setShowModal(true);
    }

    return ( 
        <tr>
            <td>
                <button className="button is-small is-info mr-1" 
                    title='Modificat'
                    onClick={ () => abrirModalModificatArticulo() }
                >
                    <span className="icon is-small">
                    <i className="fas fa-edit"></i>
                    </span>
                </button>

                <button className="button is-small is-danger" 
                    title="Eliminar"
                    onClick={ () => eliminarArticulo(articulo.idmodelo+`;`+articulo.idcolor) }
                >
                    <span className="icon is-small">
                    <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{articulo.descripcion}</td>
            <td>{articulo.idcolor}</td>
            <td>{articulo.idmodelo}</td>
            <td>{articulo.idcategoria}</td>
            <td>{articulo.precioMin}</td>
            <td>{articulo.precioMax}</td>
            <td>{articulo.precioProveedor}</td>
        </tr>
     );
}
 
export default RowArticulo;