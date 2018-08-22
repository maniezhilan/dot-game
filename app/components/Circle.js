import React, { Component } from 'react'
import Dot from './Dot'

export default class Cricle extends Component {
  constructor(props) {
    super(props);

  }

  	getRandomInt(max) {
  		return Math.floor(Math.random() * Math.floor(max));
	}


	Circle(x, y, bgColor, size){
		let circleStyle = {
	      padding:10,
	      margin:20,
	      backgroundColor: bgColor,
	      borderRadius: "50%",
	      width:size,
	      height:size,
	      position: "absolute",
	      top: x,
	      left: y,
	      animationDuration: '5s', //Driven by slider value
	  	  animationName: 'slidein',
	    };
	return (
      <div style={circleStyle}/>

    );
}

componentDidMount() {
  //if(this.props.autoPlay) {
    this.interval = setInterval(() => {
      this.Circle(0,this.getRandomInt(800),'#1C89BF',this.getRandomInt(100))
    }, 1000);
  //}
}

 componentWillUnmount() {
  	clearInterval(this.interval);
 }

  render() {
  	return (
  			<div></div>
  		)
  }
}

