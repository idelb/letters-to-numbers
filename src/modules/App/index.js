import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import LettersToNumbers from '../LettersToNumbers'
import blue from '@material-ui/core/colors/blue'

const themeConfig = {}

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme(themeConfig)

const styles = theme => ({
  root: {
    paddingTop: 100,
  },
  title: {
    textAlign: 'center',
    paddingBottom: '2rem',
    marginBottom: '4rem',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      marginLeft: -50,
      width: 100,
      height: 1,
      backgroundColor: theme.palette.grey[300]
    }
  },
  appBar: {
    backgroundColor: blue[500]
  }
})

class App extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Container maxWidth='lg'>
              <Typography variant='h6'>Letters to numbers</Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth='md' className={classes.root}>
          <Typography variant='h2' className={classes.title}>Converts letters to old phone keyboard numbers</Typography>
          <LettersToNumbers />
        </Container>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App)
