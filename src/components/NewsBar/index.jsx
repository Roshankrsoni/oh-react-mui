import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class NewsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: true }
    this.handleChange = this.handleChange.bind(this);
    window.addEventListener('resize', this.handleChange);
  }

  handleChange() {
    if (window.innerWidth <= 1000)
      this.setState({ visibility: false });
    else
      this.setState({ visibility: true });
  }

  render() {
    return (
      <div>
        <Grid container alignItems="center" spacing={8}>
          <Grid item>
            <Typography variant="subheading">Home / News</Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant="headline" style={{ float: 'left', fontWeight: '700' }}>News</Typography>
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(NewsBar);
