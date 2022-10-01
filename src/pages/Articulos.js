import React from 'react';
import FormArticulo from '../components/articulo/FormArticulos';
import TableArticulo from '../components/articulo/TableArticulo';
import ToolbarArticulo from '../components/articulo/ToolbarArticulo';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import { ArticuloContextProvider } from '../context/articuloContext';

const Articulos = () => {
    return (  
        <Layout>
            <ArticuloContextProvider>
                <div className="panel">
                    <div className="panel-heading">
                        Articulos
                    </div>
                    <div className="box">
                        <ToolbarArticulo/>
                        <TableArticulo/>
                    </div>
                </div>
                <Modal>
                    <FormArticulo/>

                </Modal>
            </ArticuloContextProvider>
        </Layout>
    );
}
 
export default Articulos;