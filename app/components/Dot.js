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
	      padding:10,
	      margin:20,
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

  componentDidMount() {
	    this.interval = setInterval(() => {
    	let size = Math.floor(Math.random() * Math.floor(100));
		let x = 152;
		let y = Math.floor(Math.random() * Math.floor(800));
		let speed = (this.props.speed === '' ? '10s' : this.props.speed+'s');
		let color = '#1C89BF';
		console.log('speed',speed);
		let playState = (this.props.isToggleOn ? 'running' : 'paused'); 
	    let style = this.circle(x, y, '#1C89BF', size, speed, playState);
	    this.setState({circleStyle: style });
	    this.setState({
  			circles: [...this.state.circles,this.state.circleStyle]
  		});
	    }, 1000);

  }

  componentWillUnmount() {
    	clearInterval(this.interval);
  }



  showScore(event) {
  	this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  	this.props.total(this.state.counter);
  	event.target.style.display = 'none';
  }

  render() {
    return (
      <div>
      	{	
      		this.state.circles.map((style,i) => 
        	<div key={i} style={style} onClick={this.showScore}/>
    		)
    	}
      </div>
    )
  }
}
