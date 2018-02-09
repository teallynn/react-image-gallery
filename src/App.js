import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Tapirs from './components/Tapirs';
import Trees from './components/Trees';
import Whales from './components/Whales';
import {
    BrowserRouter,
    Route,
    Switch
 } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="container">

        <Route path='/search' component={Search} />

          <Header />

          <Switch>
            <Route path='/tapirs' component={Tapirs}/>
            <Route path='/trees' component={Trees}/>
            <Route path='/whales' component={Whales}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
