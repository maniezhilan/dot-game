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
    //this.handleChange = this.handleChange.bind(this);
    this.showScore = this.showScore.bind(this);
    //this.buttonClick = this.buttonClick.bind(this);
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
        <div className='wrapper'>
            <div className='col1-row1'>
            	<div className='btn btn-yellow'> Score: {this.state.total}
            	</div>
            </div>


            <div className='row3'>
            	<Dot  total={this.showScore}/>
            </div>
        </div>
      )
  }
}
