import React, { useContext, useEffect, useState } from 'react';
import { ModeloContext } from '../../context/modeloContext';
import RowModelo from './RowModelo';

const TableModelo = () => {

    const { modelosList, obtenerModelos } = useContext(ModeloContext);

    useEffect(() => {
        obtenerModelos();
    }, []);

    if(modelosList.length === 0) return <center>No existen modelos</center>
    
    return ( <table className="table">
        <thead>
            <tr>
                <th>Acciones</th>
                <th>Código</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            {
                modelosList.map(modelo => (
                    <RowModelo modelo={modelo} key={modelo.idmodelo} />
                ))
            }
        </tbody>
    </table> );
}
 
export default TableModelo;