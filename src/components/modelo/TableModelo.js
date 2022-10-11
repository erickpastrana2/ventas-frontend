import React, { useContext, useEffect, useState } from 'react';
import { ModeloContext } from '../../context/modeloContext';
import RowModelo from './RowModelo';
//import ReactDatatable from '@yun548/bulma-react-datatable';
import { ModalContex } from '../../context/modalContext';

function TableModelo() {

    const { modelosList, obtenerModelos } = useContext(ModeloContext);

    useEffect(() => {
        obtenerModelos();
    }, []);

    if (modelosList.length === 0)
        return <center>No existen modelos</center>;

    return (
        
    <table className="table">
        <thead>
            <tr>
                <th>Acciones</th>
                <th>Código</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            {modelosList.map(modelo => (
                <RowModelo modelo={modelo} key={modelo.idmodelo} />
            ))}
        </tbody>
    </table>
    
    );
}
 
export default TableModelo;