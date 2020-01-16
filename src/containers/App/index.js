import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Container from '@material-ui/core/Container'

import JobList from '../JobList'
import JobDetail from '../JobDetail'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/">
            <JobList />
          </Route>
          <Route path="/job/:id">
            <JobDetail />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    )
  }
}

export default App
