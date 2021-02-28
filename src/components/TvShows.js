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

const TvShows = props => {
    const classes= getStyles()
    const poster="http://image.tmdb.org/t/p/w500"

    return (
        <div className='container' >
            <Grid 
                container
                className={classes.root}
                spacing={3}
            >
                {props.tvShows.map(tvShowsObject => {
                    const posterPath = poster+tvShowsObject.poster_path
                    return (   
                        <Grid key={tvShowsObject.id} item sm={12}> 
                        <Cards 
                            key={tvShowsObject.id}
                            id={tvShowsObject.id}
                            label={tvShowsObject.name}
                            imageUrl={posterPath}
                            releaseDate={tvShowsObject.first_air_date}
                            popularity={tvShowsObject.popularity}
                            overview={tvShowsObject.overview}
                        />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default TvShows