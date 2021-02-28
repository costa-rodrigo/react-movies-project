import React from 'react'
import Search from '../components/Search'


const SearchContainer = props => {

    return (

            <div>
                <Search search={props.search} />
            </div>
    )
}

export default SearchContainer
