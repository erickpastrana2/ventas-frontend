import React, { useEffect, useState } from 'react';

import { useTable,usePagination, useGlobalFilter, useAsyncDebounce, useSortBy, useFilters} from "react-table";
import GlobalFilter from './GlobalFilter';
import PageSizeGlobalFiler from './PageSizeGlobalFilter';

const CustomReactTable = ({ columns, data }) => {

  // Create a state
  const [filterInput, setFilterInput] = useState({});

  // Update the state when input changes
  const handleFilterChange = (e, id) => {
    const value = e.target.value || undefined;
    setFilter(id, value); 
    setFilterInput({[id]: value});
    
  };

  const handleFilterChange2 = e => {
    console.log(e)
    const value = e.target.value || undefined;
   // setGlobalFilter(id, value); 
    setFilterInput(value);
  };


  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    rows,
    setPageSize,
    pageCount,
    gotoPage,
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter, // The useFilter Hook provides a way to set the filter
    state: { globalFilter, pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0, pageSize: 10 }
  },
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination
  
  );

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <div  >
      <br></br>
      <table {...getTableProps()} className="table is-striped">
        <thead>
          <PageSizeGlobalFiler 
            visibleColumns={visibleColumns} 
            rows={rows} 
            setPageSize={setPageSize} 
            pageSize={pageSize} 
            preGlobalFilteredRows={preGlobalFilteredRows} 
            globalFilter={globalFilter} 
            setGlobalFilter={setGlobalFilter} 
          />
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {!column.disableFilters
                      ? <input
                          className='input is-small'
                          value={filterInput.id}
                          onChange={ (e) =>  handleFilterChange(e, column.id)}
                          placeholder={"Buscar registro..."}
                        />
                      : ''
                  }
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ⬇️'
                        : ' ⬆️'
                      : ''
                      
                    }
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}

          <tr>
            <td colSpan={visibleColumns.length}>
              <div className="container">
                <div className="columns">
                  <div className='column is-three-fifths'>
                    <span >
                      <button className='button is-small' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                      </button>{' '}
                      <button className='button is-small' onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                      </button>{' '}
                      Página{' '}
                      <strong>
                        {pageIndex + 1} de {pageOptions.length}
                      </strong>{' '}
                      
                      <button className='button is-small' onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                      </button>{' '}
                      <button className='button is-small' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                      </button>{' '}
                    </span>
                  </div>

                  <div className='column'>
                    <span>
                      Ir a la págian:{' '}
                      <input
                        max={pageOptions.length}
                        min={1}
                        className='input is-small'
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                          const page = e.target.value ? Number(e.target.value) - 1 : 0
                          gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                      />
                    </span>{' '}
                  </div>
                </div>
              </div>
               
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        
      </div>
    </div>
   
  );
}

export default CustomReactTable;