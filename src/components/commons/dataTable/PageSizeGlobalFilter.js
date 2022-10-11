import React from 'react';
import GlobalFilter from './GlobalFilter';

const PageSizeGlobalFiler = ({visibleColumns, rows, setPageSize, pageSize, preGlobalFilteredRows, globalFilter, setGlobalFilter}) => {
    return ( 
      <tr>
        <td colSpan={visibleColumns.length}>
          <nav className="level">
            <div className="level-left">
              <div className="level-itm">
                <p className=" is-size-6 has-text-grey">
                    Mostrar
                </p>
                {'  '}
              </div>
              <div className="level-itm">
                <div className="select is-small">
                  <select
                    value={pageSize}
                    onChange={e => {
                      setPageSize(Number(e.target.value))
                    }}
                  >
                    {[10, 20, 30].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize} 
                      </option>
                    ))}
                      <option key={rows.length} value={rows.length}>
                        Todo
                      </option>
                  </select>
                </div>
              </div>
              <div className="level-itm">
                <p className=" is-size-6 has-text-grey">
                    Registros
                </p>
              </div>
            </div>
            <div className="level-rigth">
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </div>
          </nav>
        </td>
      </tr>
     );
}
 
export default PageSizeGlobalFiler;