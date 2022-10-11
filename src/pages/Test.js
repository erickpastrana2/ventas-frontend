import React from 'react'
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import FormModelos from '../components/modelo/FormModelos';
import ToolbarModelo from '../components/modelo/ToolbarModelo';
import TableModelo from '../components/test/TableModelo';
import { ModeloContextProvider } from '../context/modeloContext';

const Test = () => {
    return (
        <Layout>
            <ModeloContextProvider>
                <div className="panel">
                    <div className="panel-heading">
                        Modelos
                    </div>
                    <div className="box">
                        <ToolbarModelo/>
                        <center>
                            <TableModelo/>
                        </center>
                        
                    </div>
                    <Modal>
                        <FormModelos/>
                    </Modal>
                </div>
            </ModeloContextProvider>
            
        </Layout>
    );
}

export default Test;