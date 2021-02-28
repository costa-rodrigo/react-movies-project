import React, { Component } from 'react'
import { getMovies } from '../services/api'
import Movies from '../components/Movies'
import { Select, 
         MenuItem, 
         FormControl,
         InputLabel
        } from '@material-ui/core'

 class MovieContainer extends Component {  

    state = {
        movies: [],
        value: 'now_playing'
    }

    componentDidMount() {
        const { value } = this.state
        this.fetchMovies(value)
      }

    updateSelectedItem = (e, { props: { value } }) => {
        e.preventDefault()
        this.fetchMovies(value)   
    }

    fetchMovies = (value) => {
        getMovies(value).then(movies => {
            this.setState({
                movies
            })
        }) 
    }

    render() {
        const { movies } = this.state
        
        return (
            <div>
                <FormControl variant='outlined' size='medium' margin='dense' color='primary'>
                    <InputLabel shrink variant='outlined' className='select-label'>Category</InputLabel>
                    <Select defaultValue='now_playing' onChange={this.updateSelectedItem} variant='outlined' label='Category' className='select-category'>
                        <MenuItem value='now_playing'>Now Playing</MenuItem>
                        <MenuItem value='popular'>Popular</MenuItem>
                        <MenuItem value='top_rated'>Top Rated</MenuItem>
                        <MenuItem value='upcoming'>Upcoming</MenuItem>
                    </Select>
                </FormControl>
            <Movies movies={movies} />
        </div>
        )
    }
}

export default MovieContainer;