import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../style/common.css"

class Order extends Component {
  
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h1 className="order_title">Order</h1>
        <Link className="btn" to="/index/home">回首页</Link>
        <p className="query">url query:{this.props.match.params.time}</p>
      </div>
    );
  }
}

export default Order;
