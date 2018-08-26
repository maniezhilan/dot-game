import React, {Component} from 'react';
import Dot from './Dot';
import SpeedSlider from './SpeedSlider';
import 'react-rangeslider/lib/index.css';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      fromChild: '',
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.showScore = this.showScore.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange(data) {
    this.setState({
      fromChild: data
    });
  }

  showScore(score) {
    this.setState({
      total: score
    });
  }

  buttonClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
      return (
        <div>
         <header>  
            <div> Score: {this.state.total}</div>
            <button class={this.state.isToggleOn ? 'btn btn-red' : 'btn btn-green'} onClick={this.buttonClick}>
              {this.state.isToggleOn ? 'Stop' : 'Start'}
            </button>
            
         </header>   
           
        <div class="container"> 
                <SpeedSlider handlerFromParant={this.handleChange}/>
                {this.state.isToggleOn ? <Dot isToggleOn={this.state.isToggleOn} speed={this.state.fromChild} total={this.showScore}/> : '' }
        </div>

        </div> 
      )
  }
}
