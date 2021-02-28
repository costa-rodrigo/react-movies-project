import React, { Component } from 'react'
import { getTvShows } from '../services/api'
import TvShows from '../components/TvShows'
import { Select, 
    MenuItem, 
    FormControl,
    InputLabel
   } from '@material-ui/core'

 class TvShowsContainer extends Component {  

    state = {
        tvShows: [],
        value: 'airing_today'
    }

    componentDidMount() {
        const { value } = this.state
        this.fetchTvShows(value)
    }

    updateSelectedItem = (e) => {
        e.preventDefault()
        this.fetchTvShows(e.target.value)   
    }

    fetchTvShows = (value) => {
        getTvShows(value).then(tvShows => {
            this.setState({
                tvShows
            })
        }) 
    }

    render() {
        const { tvShows } = this.state
        
        return (
            <div>
                <FormControl variant='outlined' size='medium' margin='dense' color='primary'>
                    <InputLabel shrink variant='outlined' className='select-label'>Category</InputLabel>
                    <Select defaultValue='airing_today' onChange={this.updateSelectedItem} variant='outlined' label='Category' className='select-category'>
                        <MenuItem value='airing_today'>Airing Today</MenuItem>
                        <MenuItem value='on_the_air'>On the Air</MenuItem>
                        <MenuItem value='popular'>Popular</MenuItem>
                        <MenuItem value='top_rated'>Top Rated</MenuItem>
                    </Select>
                </FormControl>

            <TvShows tvShows={tvShows} />
        </div>
        )
    }
}

export default TvShowsContainer;