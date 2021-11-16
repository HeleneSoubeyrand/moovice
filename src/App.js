import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/Popular" component={Popular} />
          <Route path="/PopularBattle" component={PopularBattle} />
          <Route path="/Weekly" component={Weekly} />
          <Route path="/WeeklyBattle" component={WeeklyBattle} />
          <Route path="*" component={NotFound} />
        </Switch>
        
      </BrowserRouter>
    )
  }
}

export default App;