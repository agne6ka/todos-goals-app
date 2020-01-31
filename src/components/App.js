import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { handleInitialData } from '../actions/initial';
import { connect } from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from "./Goals";
import '../App.css';

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {

    return (
      <>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h2">
                Organize better by adding todos&nbsp;and&nbsp;goals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <ConnectedTodos />
            </Grid>
            <Grid item xs={12} md={6}>
              <ConnectedGoals />
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}


export default connect((state) => { return state })(App)
