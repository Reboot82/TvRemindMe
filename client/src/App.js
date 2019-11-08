import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shows from './components/Shows'
import SingleShow from './components/SingleShow'
import './App.css'
import EpisodeList from './components/EpisodeList'
import Services from './components/Services'


class App extends Component {
  render () { 
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Shows}/>
            <Route exact path="/:showId" component={SingleShow}/>
            <Route exact path="/episodes" component={EpisodeList}/>
            <Route exact path="/services" component={Services}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App