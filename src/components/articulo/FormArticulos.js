import React, { useContext, useEffect, useState } from 'react';
import { ArticuloContext } from '../../context/articuloContext';
import { ModalContex } from '../../context/modalContext';

const FormArticulo = () => {

    const { setShowModal } = useContext(ModalContex);

    const { registratArticulo, actualizarArticulo, articuloActual, obtenerArticulo } =useContext(ArticuloContext);

    const articuloDefault = {
        descripcion: '',
        idcolor: '',
        idmodelo:'',
        idcategoria:'',
        urlFoto:'',
        precioMin:'',
        precioMax:'',
        precioProveedor:'',
    }

    const [mensaje, setMensaje] = useState(null);
    const [articulo, setArticulo] = useState(articuloDefault);

    useEffect(() => {
        if(articuloActual !== null){
            setArticulo({
                ...articuloActual,
                urlFoto: articuloActual.urlFoto ? articuloActual.urlFoto : '',
                precioProveedor: articuloActual.precioProveedor ? articuloActual.precioProveedor : '',

            });
        }else{
            setArticulo(articuloDefault);
        }
        // eslint-disable-next-line
    }, [articuloActual]);

    const handleChange = e => {
        setArticulo({
            ...articulo,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(articulo);
        //validar
        if(articulo.descripcion.trim() === '' || articulo.idcolor.trim() === '' || articulo.idmodelo.trim() === '' || articulo.idcategoria.trim() === '' 
                || articulo.precioMin.trim() === '' || articulo.precioMax.trim() === '' || articulo.precioProveedor.trim() === ''){
            setMensaje('La descripción, color, modelo, categoría, precio min, precio max y precio proveedor son requeridos');
            return;
        }

        //obtenner objeto a enviar
        if(articuloActual !== null){
            actualizarArticulo(obtenerArticuloaEnviar())
        }else{
            registratArticulo(obtenerArticuloaEnviar());
        }
        

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setArticulo(articuloDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerArticulo(null);
    }

    const obtenerArticuloaEnviar = () => {
        let articuloTemp = {...articulo};
        if(articuloTemp.urlFoto === '') delete articuloTemp.urlFoto;
        return articuloTemp;
    }

    
    return ( 
        <form onSubmit={handleOnSubmit}>
        
            <section className="modal-card-body">
            { mensaje ? <div className='notification is-danger'>{mensaje}</div> : ''}
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Modelo y Color</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Modelo"
                        name="idmodelo"
                        value={articulo.idmodelo}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Colo00r"
                        name="idcolor"
                        value={articulo.idcolor}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    </p>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Descripción</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Ingrese la descripción del artículo"
                        name="descripcion"
                        value={articulo.descripcion}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-map-marked-alt"></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Categoría</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Ingrese la ategoría del artículo"
                        name="idcategoria"
                        value={articulo.idcategoria}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-phone"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Ingrese la ategoría del artículo"
                        name="idcategoria"
                        value={articulo.idcategoria}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-phone"></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Precios</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="P. Mínimo"
                        name="precioMin"
                        value={articulo.precioMin}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="P. Máximo"
                        name="precioMax"
                        value={articulo.precioMax}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="P. Proveedor"
                        name="precioProveedor"
                        value={articulo.precioProveedor}
                        onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>
            

            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control">
                    
                    </div>
                </div>
                </div>
            </div>

            
            </section>
            <footer className="modal-card-foot">
                <button type="submit" className="button is-primary mr-1">Guardar</button>
                <button
                    type="button"
                    className="button"
                    onClick={ () => cerrarModal() }
                >Cancelar</button>
            </footer>
        </form>
        
    );
}
 
export default FormArticulo;