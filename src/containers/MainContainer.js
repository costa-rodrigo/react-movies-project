import React, { Component } from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core'
import MovieContainer from './MovieContainer'
import SearchContainer from './SearchContainer'
import TvShowsContainer from './TvShowsContainer'
import Form from '../components/Form'
import { getSearch } from '../services/api'

class MainContainer extends Component {

    state = {
        selectedTab: 0,
        searchResults: '',
        selectedItem: 'movie',
        searchField: true,
        search: [],
        isLoading: false,
        noResults: false
    }
  
    handleChange = (e, value) => {
        this.setState({
            selectedTab: value
        })
    }

    fetchSearch = e => {
        const { searchResults, selectedItem } = this.state
        e.preventDefault()

        getSearch(searchResults, selectedItem).then(search => {
            this.setState({
                search,
                selectedItem,
                isLoading: false,
                searchField: false
            })
            if (search && search.length > 0) {
                this.setState({
                    noResults: true
                })
            }
            else {
                this.setState({
                    noResults: false
                })
            }
        })
    }

    handleInputChange = searchResults => {
        if (searchResults.length === 0 ) {
            this.setState({
                searchField: true
            })
        }
        else {
            this.setState({
                searchResults,
                isLoading: true,
                searchField: false
            })
        }
    }

    handleSelectChange = selectedItem => {
        this.setState({
            selectedItem
        })
    }

    render() {
        const { selectedTab, isLoading, search, searchField, noResults } = this.state
        return(
            <div className='main-div-container'>
                <Form 
                    onInputChange={this.handleInputChange}
                    onSelect={this.handleSelectChange}
                    onSubmit={this.fetchSearch}
                />
                <div className="main-container">
                    <AppBar position="static">
                        <Tabs 
                            value={selectedTab} 
                            onChange={this.handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            variant="fullWidth"
                            className='tab-container'
                        >
                            <Tab value={0} label="Movies" />
                            <Tab value={1} label="Search Results" />
                            <Tab value={2} label="TV Shows" />
                        </Tabs>
                    </AppBar>
                    {selectedTab === 0 && <MovieContainer />}
                    {selectedTab === 1 && (searchField ? <h2>Please enter a search</h2>
                    : (isLoading ? <h2>Please initiate a search </h2> : (!noResults ? <h2>Sorry, there were no results</h2> : <SearchContainer search={search} />)))}
                    {selectedTab === 2 && <TvShowsContainer />}
                    </div>
            </div>
        )
    }
}

export default MainContainer