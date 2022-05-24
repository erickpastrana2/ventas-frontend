import React from 'react';
import TableCliente from '../components/clientes/TableCliente';
import Layout from '../components/commons/Layout';

const Clientes = () => {
    return (  
        <Layout>
            <div className="panel">
                <div className="panel-heading">
                    Clientes
                </div>
                <div className="box">
                    <div className="container">
                        <button className="button is-small is-primary">
                            <span className="icon is-small">
                            <i className="fas fa-plus"></i>
                            </span>
                            <span>
                                Registrat nuevo
                            </span>
                        </button>
                    </div>
                    <TableCliente/>
                </div>
            </div>
        </Layout>

    );
}
 
export default Clientes;