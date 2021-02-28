import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {Card, CardMedia, CardContent, Typography } from '@material-ui/core/'

const getStyles = makeStyles(theme => ({
    media: {
        height: 'auto',
        maxWidth: '100%',
        paddingTop: '150%',
        display: 'inline-block'
        
    },
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        textAlign: 'center',
        alignItems: 'center'
    }
}))

const Cards = props => {
    const classes = getStyles()
    const { id, imageUrl, label, releaseDate, popularity, overview } = props

    return (
        <Card key={id} className={classes.root}>
            <CardMedia alt={label} className={classes.media} image={imageUrl} label={label} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                                {label}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Release Date: {releaseDate} | Popularity: {popularity}
                </Typography>
                <Typography className='typo' align='left' variant='body2' color='textSecondary' component='p'>
                    {overview}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards