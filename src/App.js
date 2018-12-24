import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './cpnts/layout/Navbar'
import Dash from './cpnts/dashboard/Dash'
import Detail from './cpnts/projects/Detail'
import Si from './cpnts/auth/Si'
import Su from './cpnts/auth/Su'
import Create from './cpnts/projects/Create'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dash} />
            <Route path="/project/:id" component={Detail} />
            <Route path="/signin" component={Si} />
            <Route path="/signup" component={Su} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
