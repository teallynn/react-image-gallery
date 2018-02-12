import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
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
        <div className="container">

        <Route path='/search' component={SearchForm} />

          <Header />

          <Switch>
            <Route path='/tapirs' component={Tapirs}/>
            <Route path='/trees' component={Trees}/>
            <Route path='/whales' component={Whales}/>
            <Route path='/search/:searchTopic' component={SearchResults}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
