import React from 'react'

import { withStyles, makeStyles} from '@material-ui/core/styles'
import { indigo } from '@material-ui/core/colors'
import { Button, 
         TextField, 
         Select,
         MenuItem, 
         FormControl,
         InputLabel
        } from '@material-ui/core'

const getStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px'
    },
    textField: {
        marginLeft: theme.spacing(.5),
        marginRight: theme.spacing(.5),
        width: '400px'
    },
    dropDown: {
        marginLeft: theme.spacing(.5),
        marginRight: theme.spacing(.5),
        width: '150px',
        height:'56px'
    },
    outlinedLabel: {
        backgroundColor: 'white',
        paddingRight: '10px'
    }
}))

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(indigo[500]),
      padding: '0 12px',
      backgroundColor: indigo[500],
      '&:hover': {
        backgroundColor: indigo[900],
      },
    },
  }))(Button)

const Form = props => {
    const classes = getStyles()
    const { onInputChange, onSelect, onSubmit } = props

    return(
        <form onSubmit={onSubmit} className={classes.form}>
            <FormControl variant='outlined' margin='dense'>
                <InputLabel className={classes.outlinedLabel} shrink>Search  </InputLabel>
                <TextField
                    name='searchField'
                    className={classes.textField}
                    onChange={e => onInputChange(e.target.value)}
                    variant='outlined'
                />
            </FormControl>
            <FormControl variant='outlined' size='medium' margin='dense' color='primary'>
                <InputLabel shrink>Search Type</InputLabel>
                <Select defaultValue='movie' onChange={e => onSelect(e.target.value) } className={classes.dropDown} label='Search Type'>
                    <MenuItem value='movie'>Movie</MenuItem>
                    <MenuItem value='multi'>Multi</MenuItem>
                    <MenuItem value='tv'>Tv</MenuItem>
                </Select>
            </FormControl>
            <ColorButton 
                variant='outlined' 
                color='primary' 
                size='small' 
                className={classes.button} 
                type='submit'>
                Search
            </ColorButton>
        </form>
    )
}

export default Form