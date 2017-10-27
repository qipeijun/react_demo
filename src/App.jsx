import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';


import './style/App.css';


// component
import Nav from './component/nav';
import Home from './component/home';
import About from './component/about';
import User from './component/user';
import News from './component/news';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />  
        <Switch>
          <Route path="/index/home" exact component={Home}></Route>
          <Route path="/index/news" component={News}></Route>
          <Route path="/index/about" component={About}></Route>
          <Route path="/index/user" exact component={User}></Route>
          <Route exact component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
