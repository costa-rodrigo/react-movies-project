import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Cards from './Cards'

const getStyles = makeStyles(theme => ({
    root: {
        marginTop: '3em',
        marginRight: '1em'
    }
}))

const Search = props => {

    const classes = getStyles()
    const poster="http://image.tmdb.org/t/p/w500"
    
    return (
        <div className='container' >
                <Grid 
                    container
                    className={classes.root}
                    spacing={3}
                >   
                    {props.search.map(searchObject => {
                        const posterPath = poster+searchObject.poster_path
                        // const label = {props.selectedItem} == 'movie' ? {}}
                        return (   
                            <Grid key={searchObject.id} item sm={12}> 
                            <Cards 
                                key={searchObject.id}
                                id={searchObject.id}
                                label={searchObject.title === undefined ? searchObject.name : searchObject.title}
                                imageUrl={posterPath}
                                releaseDate={searchObject.release_date === undefined ? searchObject.first_air_date : searchObject.release_date}
                                popularity={searchObject.popularity}
                                overview={searchObject.overview}
                            />
                            </Grid>
                        )
                    })}
                    
                </Grid>
        </div>
    )
}

export default Search
