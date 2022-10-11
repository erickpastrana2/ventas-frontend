import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ModeloContext } from '../../context/modeloContext';
import CustomReactTable from '../commons/dataTable/CustomReactTable';
import columnsModelo from './columnsModelo'



function TableModelo() {

    const { modelosList, obtenerModelos, obtenerModelo, eliminarModelo } = useContext(ModeloContext);

    useEffect(() => {
        obtenerModelos();
    }, []);

    const columns = useMemo( () => columnsModelo(obtenerModelo, eliminarModelo), []);

    return (
        <>
            { (modelosList.length === 0) ? <center>No existen modelos</center> :
            <div className="App">
                <CustomReactTable columns={columns} data={modelosList} />
            </div>
            }
        </>
        
    
    );
}
 
export default TableModelo;