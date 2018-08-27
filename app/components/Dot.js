import React, { Component } from 'react'

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {circleStyle : {},
		circles: [],
		counter: 1
	};
    this.showScore = this.showScore.bind(this);
  }

  circle(x, y, bgColor, size, speed, playState){
		return {
	      padding:'10px',
	      margin:'20px',
	      backgroundColor: bgColor,
	      borderRadius: "50%",
	      width:size,
	      height:size,
	      position: "absolute",
	      top: x,
	      left: y,
	      animationDuration: speed,
	  	  animationName: 'slidein',
	  	  animationTimingFunction: 'linear',
	  	  animationIterationCount: 'infinite',
	  	  animationDelay: '0s',
	  	  animationPlayState: playState
	    }
	}

	createStyle(){
		let width = document.getElementById('app').clientWidth;
    	let sizeVariant = (width < 390 ? 10 : 100);
    	let size = Math.floor((Math.random()*sizeVariant) + 1);
		let x = 120;
		let y = Math.floor(Math.random() * Math.floor(width-size));
		let speed = (this.props.speed === '' ? '10s' : this.props.speed+'s');
		let color = '#'+Math.random().toString(16).slice(-6)
		let playState = (this.props.isToggleOn ? 'running' : 'paused');
		return this.circle(x, y, color, size, speed, playState);
	}

  componentDidMount() {
	    this.interval = setInterval(() => {
    	let style = this.createStyle();
	    this.setState({circleStyle: style });
	    this.setState({
  			circles: [...this.state.circles,this.state.circleStyle]
  		});
	    }, 1000);

  }

  componentWillUnmount() {
    	clearInterval(this.interval);
  }



  showScore(style) {
  	let size = parseInt(style.width, 10);
  	let score = Math.ceil(Math.abs(1/size*100));
  	this.setState(prevState => ({
      counter: prevState.counter + score
    }));
  	this.props.total(this.state.counter);
  	let newCircles = this.state.circles.filter((el) =>  el !== style);
  	this.setState({
  		circles: newCircles
  	})

  }

  render() {
    return (
      <div>
      	{
      		this.state.circles.map((style,i) =>
        	<div key={i} style={style} onClick={() => this.showScore(style)}/>
    		)
    	}
      </div>
    )
  }
}
