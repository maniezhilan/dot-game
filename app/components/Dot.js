import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider';



export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {circleStyle : {},
		circles: [],
		counter: 1,
		value: 10,
        reverseValue: 8,
        isToggleOn: false,
	};
    this.showScore = this.showScore.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
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

	createStyle(speed){
		let width = document.getElementById('app').clientWidth;
    	let sizeVariant = (width < 390 ? 10 : 100);
    	let size = Math.floor((Math.random()*sizeVariant) + 1);
		let x = 120;
		let y = Math.floor(Math.random() * Math.floor(width-size));
		//let speed = (this.props.speed === '' ? '10s' : this.props.speed+'s');
		//let speed = this.state.reverseValue+'s';
		let color = '#'+Math.random().toString(16).slice(-6)
		let playState = (this.state.isToggleOn ? 'running' : 'paused');
		return this.circle(x, y, color, size, speed, playState);
	}

  componentDidMount() {

	    this.interval = setInterval(() => {
    	let speed = this.state.reverseValue;
    	let style = this.createStyle(speed);
	    this.setState({circleStyle: style });
	    this.setState({
  			circles: [...this.state.circles,this.state.circleStyle]
  		});


	    let newCircles = [];
	    this.state.circles.map((circle) =>
	    	{
	    		let newCircle = Object.assign({},circle);
	    		newCircle.animationDuration = speed+'s';
	    		newCircles.push(newCircle);
	    	}
	    );
	    this.setState({
  			circles: newCircles
  		})

	    }, 1000);


  }

  componentWillUnmount() {
    	clearInterval(this.interval);
  }

  handleChangeReverse(value){
    this.setState({
      reverseValue: value
    })

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

   buttonClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <div className='col2-row1'>
	            <button className='btn btn-green' onClick={this.buttonClick}>
	              Start
	            </button>
	            <button className='btn btn-yellow' onClick={this.buttonClick}>
	              Pause
	            </button>
        </div>
        <Slider
          min={1}
          max={10}
          value={this.state.reverseValue}
          reverse={true}
          onChange={this.handleChangeReverse.bind(this)}
        />

      	{

      		this.state.circles.map((style,i) =>
        	 <div key={i} style={style} onClick={() => this.showScore(style)}/>
    		)
    	}
      </div>
    )
  }
}
