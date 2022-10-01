import React, { useContext, useEffect, useState } from 'react';
import { ArticuloContext } from '../../context/articuloContext';
import RowArticulo from './RowArticulo';

const TableArticulo = () => {

    const { articulosList, obtenerArticulos } =useContext(ArticuloContext);

    useEffect(() => {
        obtenerArticulos();
        // eslint-disable-next-line
    }, []);

    if(articulosList.length === 0) return <center><p>No existen articulos.</p></center>

    return ( 
        
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Descripcion</th>
                        <th>Color</th>
                        <th>Modelo</th>
                        <th>Categoría</th>
                        <th>Precio Min</th>
                        <th>Precio Max</th>
                        <th>Precio Proveedor</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        articulosList.map((articulo) => (
                            
                            <RowArticulo articulo={articulo} key={articulo.idmodelo+`;`+articulo.idcolor}/>
                        ))
                    }
                    
                    
                </tbody>
                
            </table>
        </div>
     );
}
 
export default TableArticulo;