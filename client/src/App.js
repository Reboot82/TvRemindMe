import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shows from './components/Shows'
import SingleShow from './components/SingleShow'
import './App.css';


class App extends Component {
  render () { 
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Shows}/>
            <Route exact path="/:showId" component={SingleShow}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App