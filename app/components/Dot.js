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

  getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}

  circle(x, y, size, img, speed, playState){
		return {
	      backgroundImage: img,
	      padding:'10px',
	      margin:'20px',
	      borderRadius: "50%",
	      width:size,
	      height:size,
	      position: "absolute",
	      top: x,
	      left: y,
	      animationDuration: speed,
	  	  animationName: 'slidein',
	  	  animationTimingFunction: 'linear',
	  	  animationIterationCount: 1,
	  	  animationDelay: '0s',
	  	  animationPlayState: playState,
	  	  backgroundRepeat: 'no-repeat',
	  	  animationFillMode: 'forwards',
	  	  hover: {
     		 cursor: "pointer"
    	   }
    	}
	}

	createStyle(){
		const width = document.getElementById('app').clientWidth;
		const height = document.getElementById('app').clientHeight;
    	let size = this.getRandomInt(20,100);
    	console.log(size);
		let x = 120;
		let y = Math.floor(Math.random() * Math.ceil(width-size)); //FIXME:
		let speed = (this.props.speed === '' ? '10s' : this.props.speed+'s');
		let img = "url(https://vignette.wikia.nocookie.net/battlefordreamisland/images/e/ec/Bomby_intro.png/revision/latest/scale-to-width-down/"+size+"?cb=20171217195913)"
		let playState = (this.props.isToggleOn ? 'running' : 'paused');
		return this.circle(x, y, size, img, speed, playState);
	}

  componentDidMount() {
  		window.addEventListener("isBottom", this.isBottom);
	    this.interval = setInterval(() => {
    	let style = this.createStyle();
	    this.setState({circleStyle: style });
	    this.setState({
  			circles: [...this.state.circles,this.state.circleStyle]
  		});
	    }, 1000);

  }

  componentWillUnmount() {
  		window.removeEventListener("isBottom", this.isBottom);
    	clearInterval(this.interval);
  }

  isBottom(el) {
  		//console.log('isBottom---',el);
  		if(el){
  			//console.log(el.offsetHeight,window.innerHeight);
  			//console.log('isBottom---',el.getBoundingClientRect().height, window.innerHeight);
  		}
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
	        	<div key={i}  ref={this.isBottom} style={style} onClick={() => this.showScore(style)}/>
    		)
    	}
      </div>
    )
  }
}
