import React, { useState } from 'react'

function LocationSearch(props) {
    const [ searchValue, setSearchValue ] = useState('')

    return (
        <div className='container'>
            <div className='row text-center pt-3'>
                <p className='col text-gold city-name'>{props.name}</p>
            </div>
            <div className='row pb-2'>
                    <form className="d-flex align-items-center justify-content-center col form-inline my-2 my-lg-0" onSubmit={e => {e.preventDefault(); props.search(searchValue)}}>
                        <input className="form-control mr-sm-2 w-50" type="search" placeholder="Eg. London, UK" aria-label="Search" onChange={event => setSearchValue(event.target.value)} />
                        <button className="btn btn-outline-warning mt-1 my-sm-0 ml-1" type="submit">Search</button>
                    </form>
            </div>
        </div>
    )
}

export default LocationSearch