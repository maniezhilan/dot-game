import React, {Component} from 'react';
import Dot from './Dot';
import Circle from './Circle';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.buttonClick = this.buttonClick.bind(this);
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
          {this.state.isToggleOn ? <Dot isToggleOn={this.state.isToggleOn}/> : '' }
        </div>
      )
  }
}
