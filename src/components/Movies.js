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

const Movies = props => {

    const classes= getStyles()
    const poster="http://image.tmdb.org/t/p/w500"

    return (
        <div className='container' >
            <Grid 
                container
                className={classes.root}
                spacing={3}
            >
                {props.movies.map(moviesObject => {
                    const posterPath = poster+moviesObject.poster_path
                    return (   
                        <Grid key={moviesObject.id} item sm={12}> 
                        <Cards 
                            key={moviesObject.id}
                            id={moviesObject.id}
                            label={moviesObject.title}
                            imageUrl={posterPath}
                            releaseDate={moviesObject.release_date}
                            popularity={moviesObject.popularity}
                            overview={moviesObject.overview}
                        />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Movies