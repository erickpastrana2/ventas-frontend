import React from 'react';

const TableClienteº = () => {
    return ( 
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <button className="button is-small is-info mr-1" title='Modificat'>
                            <span className="icon is-small">
                            <i className="fas fa-edit"></i>
                            </span>
                        </button>

                        <button className="button is-small is-danger" title="Eliminar">
                            <span className="icon is-small">
                            <i className="fas fa-trash-alt"></i>
                            </span>
                        </button>
                        </td>
                        <td>Erick</td>
                        <td>Pereda</td>
                        <td>Tlatelolco flores magon</td>
                        <td>5542353456</td>
                        <td>Erickpastrana@hotmail.com</td>
                    </tr>
                    
                </tbody>
                
            </table>
        </div>
     );
}
 
export default TableClienteº;