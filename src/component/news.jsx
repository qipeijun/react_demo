/*
 * @Author: qipeijun 
 * @Date: 2017-10-31 15:29:43 
 * @Last Modified by: 
 * @Last Modified time: 2017-10-31 16:56:26
 */

import React, { Component } from "react";
// import PropTypes from "prop-types";

import "../style/common.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ["cat", "dog", "tiger", "monkey"],
      say: 1
    };
  }
  computedArr() {
    //处理数组
    let newarr = this.state.arr.map(item => {
      return item + ";";
    });
    this.timerID = setTimeout(function(msg) {
        console.log(msg);
        this.setState({
          arr: newarr
        });
      }.bind(this),3000,"延时器传参");
  }
  componentWillMount() {
    this.computedArr();
  }
  componentWillUnmount(){
    clearTimeout(this.timerID)
  }
  xclick() {
    this.text.focus();
    // console.log(node)
  }
  keydown(e) {
    let val = e.target.value;
    if (e.keyCode === 13) {
      //回车
      window.open(`https://www.baidu.com/s?ie=UTF-8&wd=${val}`);
    }
  }
  render() {
    return (
      <div>
        <h1 ref="text" onClick={this.xclick.bind(this)}>
          news
        </h1>
        <input
          type="text"
          ref={el => (this.text = el)}
          onKeyDown={this.keydown.bind(this)}
          placeholder="百度一下你就知道"
        />

        <ul>
          {this.state.arr.map((item, index) => {
            return (
              <p className="animal" key={index}>
                hello,{item}
              </p>
            );
          })}
        </ul>

        <Say say={this.state.say}>
          {/* props.children */}
          {<b style={{ fontSize: 32, color: "#666" }}>haha</b>}
        </Say>
      </div>
    );
  }
}

// 部分组件
function Say(props) {
  let say = props.say;
  if (say === 1) {
    return <h2 className="animal">hello ,i`m one;{props.children || 0}</h2>;
  }
  return <h2 className="animal">hello,i`m two</h2>;
}

// 数据验证


export default News;
