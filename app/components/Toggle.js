import React, {Component} from 'react';
import Dot from './Dot';
import SpeedSlider from './SpeedSlider';
import 'react-rangeslider/lib/index.css';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      fromChild: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange(data) {
    this.setState({
      fromChild: data
    });
    console.log(this.state.fromChild);
  }

  buttonClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
      return (
        <div>
        <button onClick={this.buttonClick}>
          {this.state.isToggleOn ? 'Stop' : 'Start'}
        </button>
        <SpeedSlider handlerFromParant={this.handleChange} disabled={this.state.isToggleOn}/>
        {this.state.isToggleOn ? <Dot isToggleOn={this.state.isToggleOn} speed={this.state.fromChild}/> : '' }
        </div>
      )
  }
}
