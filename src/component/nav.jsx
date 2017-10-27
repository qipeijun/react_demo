import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../style/common.css';

class Nav extends Component {

  render() {
    let time = new Date().getTime();
    return (
      <ul className="nav_list">
        <li><NavLink activeClassName="active" to="/index/home">home</NavLink></li>
        <li><NavLink activeClassName="active" to="/index/news">news</NavLink></li>
        <li><NavLink activeClassName="active" to="/index/about">about</NavLink></li>
        <li><NavLink activeClassName="active" to={`/index/user`}>user</NavLink></li>
      </ul>
    );
  }
}

export default Nav;
