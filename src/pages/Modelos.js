import React from 'react'
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import FormModelos from '../components/modelo/FormModelos';
import TableModelo from '../components/modelo/TableModelo';
import ToolbarModelo from '../components/modelo/ToolbarModelo';
import { ModeloContextProvider } from '../context/modeloContext';

const Modelos = () => {
    return (
        <Layout>
            <ModeloContextProvider>
                <div className="panel">
                    <div className="panel-heading">
                        Modelos
                    </div>
                    <div className="box">
                        <ToolbarModelo/>
                        <TableModelo/>
                    </div>
                    <Modal>
                        <FormModelos/>
                    </Modal>
                </div>
            </ModeloContextProvider>
            
        </Layout>
    );
}

export default Modelos;