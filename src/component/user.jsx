import React, { Component } from 'react';

var timer = null;

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      time:new Date().toLocaleString().replace(/(上午|下午)/g,""),
      
    }
  }
  componentWillMount(){
    // var time = this.props.match.params.time;  //获取路径参数
    // time = new Date(parseInt(time)).toLocaleString();
    // var reg = /(上午|下午)/g;
    // time=time.replace(reg,"")
    // this.setState({time})
    timer = setInterval(()=>{
      this.setState({
        time:new Date().toLocaleString().replace(/(上午|下午)/g," "),
      })
    },1000)
  }
  componentDidMount(){
    // this.setState({
    //   time:new Date().toLocaleString()
    // })
  }
  componentWillUnmount(){
    clearInterval(timer);  //页面离开 清除定时器
  }
  handleClick(){
    let time = Math.random()
    this.props.history.push(`/order/${time}`)
  }
  render() {
    return (
      <div>
        <h1>user</h1>
        <h2>当前的时间是：{this.state.time}</h2>
        <span className="btn" onClick={this.handleClick.bind(this)}>order</span>
      </div>
    );
  }
}

export default User;
