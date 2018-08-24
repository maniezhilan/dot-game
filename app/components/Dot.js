import React, { Component } from 'react'

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {circleStyle : {},
		circles: []
	};
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  circle(x, y, bgColor, size, speed){
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
	      animationDuration: speed+'s', 
	  	  animationName: 'slidein',
	    }
	}

  circles(){
  	this.setState({
  		circles: [...this.state.circles,this.state.circleStyle]
  	});
  	console.log(this.state.circles);
  }	

  componentDidMount() {
	    this.interval = setInterval(() => {
    	let size = Math.floor(Math.random() * Math.floor(100));
		let x = 0;
		let y = Math.floor(Math.random() * Math.floor(800));
		let speed = this.props.speed;
		let color = '#1C89BF';
	    let style = this.circle(x,y,'#1C89BF',size,speed); //TODO: use the size to increase counter
	    this.setState({circleStyle: style });
	    	this.circles();
	    }, 1000);
  }

  componentWillUnmount() {
    	clearInterval(this.interval);
  }

  handleDotClick(event) {
  	event.target.style.display = 'none';
  }

  render() {
    return (
      <div>
      	{	
      		this.state.circles.map((style,i) => 
        	<div key={i} style={style} onClick={this.handleDotClick}/>
    		)
    	}
    	
        //TODO: Burst the dot with clickhandler.
        //TODO: Update counter when clicked based on size
      </div>
    )
  }
}
