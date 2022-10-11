import ActionButton from "../commons/dataTable/ActionButton";


const columnsModelo = (obtenerModelo, eliminarModelo) => {
    
    return [
        {
            id: 'edit',
            accessor: 'idmodelo',
            Cell: ({value}) => (
                <ActionButton genericObject={{idmodelo: value}} actionType="edit" modalTitle="modelo" obtenerObject={obtenerModelo} />
            ),
            disableSortBy: true,
            disableFilters:true

        },
        {
            id: 'delete',
            accessor: 'idmodelo',
            Cell: ({value}) => (
                <ActionButton id={value} actionType="delete" eliminarObject={eliminarModelo} />
            ),
            disableSortBy: true,
            disableFilters:true

        },
        {
            Header: "Código",
            accessor: "idmodelo",
        },
        {
            Header: "Descripción",
            accessor: "descripcion"
        }
    ];
};

export default columnsModelo;
    