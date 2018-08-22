import React, { Component } from 'react'

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {circleStyle : {}}
  }

  circle(x, y, bgColor, size){
		return {
	      padding:10,
	      margin:20,
	      backgroundColor: bgColor,
	      borderRadius: "50%",
	      width:size,
	      height:size,
	      position: "absolute",
	      top: x,
	      left: y,
	      animationDuration: '5s', //TODO: Driven by slider value
	  	  animationName: 'slidein',
	    }
	}

  componentDidMount() {
	    this.interval = setInterval(() => {
	    	let size = Math.floor(Math.random() * Math.floor(100));
  			let x = 0;
  			let y = Math.floor(Math.random() * Math.floor(800));
	    	let style = this.circle(x,y,'#1C89BF',size)
	        this.setState({circleStyle: style });

	    }, 1000);
  }

  componentWillUnmount() {
    	clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div style={this.state.circleStyle}/>
      </div>
    )
  }
}
