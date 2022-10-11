import React, { useState } from 'react';
import { useTable, useGlobalFilter, useAsyncDebounce, useSortBy, useFilters} from "react-table";


const TWO_HUNDRED_MS = 200;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {

  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, TWO_HUNDRED_MS);

  return (
      <>
      <nav className="level">
        <div className='level-right'></div>
        <div className='level-right'>
            <div className="level-item">
                <p className=" is-size-6 has-text-grey">
                    Buscar
                </p>
            </div>
        
            <div className="level-item">
                <div className="field">
                    <input
                        className='input is-small'
                        value={value || ""}
                        onChange={e => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        placeholder={`Buscar en todos lados...`}
                    />
                </div>
            </div>
        </div>
      </nav>
       
    </>
  )
}

export default GlobalFilter;