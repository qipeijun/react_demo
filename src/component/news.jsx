import React, { Component } from 'react';

import "../style/common.css"

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr:['cat','dog','tiger','monkey'],
      say:1,
    }
  }
  computedArr(){  //处理数组
    let newarr = this.state.arr.map((item)=>{
      return item+";"
    })
    setTimeout(function(msg) {
      console.log(msg);
      this.setState({
        arr:newarr
      })
    }.bind(this), 3000,"延时器传参");
  }
  componentWillMount(){
    this.computedArr();
  }
  render() {
    return (
      <div>
        <h1>news</h1>
        <ul>
          {
            this.state.arr.map((item,index)=>{
              return <p className="animal" key={index}>hello,{item}</p>
            })
          }
        </ul>
        <Say say={this.state.say}/>
      </div>
    );
  }
}


// 部分组件
function Say(props){
  let say = props.say;
  if (say == 1) {
    return <h2 className="animal">hello ,i`m one</h2>
  }
  return <h2 className="animal">hello,i`m two</h2>
}


export default News;
