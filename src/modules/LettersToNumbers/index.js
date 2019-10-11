import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    padding: '2rem',
  },
  textField: {
    marginTop: '-4rem',
    backgroundColor: theme.palette.common.white
  },
  chip: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    padding: '0 1rem',
    borderRadius: 20,
    backgroundColor: theme.palette.grey[200]
  }
})

class App extends React.Component {
  state = {}

  handleChange = (e) => {
    const numbers = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
      0: [' ']
    }

    const str = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    const strArray = str.toLowerCase().split('');

    let number = ''

    strArray.forEach(item => {
      if (!isNaN(item) && item !== ' ') {
        return number += item
      }

      let currentNumber = false

      Object.entries(numbers).forEach(([key, value]) => {
        if (value.indexOf(item) > -1) {
          currentNumber = key
        }
      })

      if (currentNumber) {
        number += currentNumber
      }
    });

    this.setState({
      number
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <TextField
          id='outlined-name'
          label='Text to convert'
          className={classes.textField}
          onChange={this.handleChange}
          fullWidth={true}
          margin='normal'
          variant='outlined' />
        <div className={classes.chip}>
          <small><strong>Converted number:</strong> {this.state.number}</small>
        </div>
      </Paper>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App)
