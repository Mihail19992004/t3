import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import './Search.css'
export function Search({submitForm,search,sendValue,getFilter,getFilter2}) {
    return (
        <div className="input_select">
            <form className="search" action="" onSubmit={submitForm}>
                <input type="text" value={search} onChange={sendValue} />
                <div className="search-ico" onClick={submitForm}>
                    <SearchIcon />
                </div>
            </form>
            <div className="select_border">
                <select onChange={getFilter}>
                    <option>All</option>
                    <option>Images</option>
                    <option>Videos</option>
                </select>
            </div>
            <div className="select_border">
                <select onChange={getFilter2}>
                    <option>20</option>
                    <option>40</option>
                    <option>60</option>
                </select>
            </div>
        </div>

    )
}