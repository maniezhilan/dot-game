import React, {Component} from 'react';
import Slider from 'react-rangeslider';



export default class SpeedSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10,
      reverseValue: 8
    }
  }

  handleChangeStart(){
    console.log('Change event started');
  };

  handleChange(value){
    this.setState({
      value: value
    })
    this.props.handlerFromParant(this.state.value);
  };

  handleChangeReverse(reverseValue){
    this.setState({
      reverseValue: reverseValue
    })
    this.props.handlerFromParant(this.state.reverseValue);
  }

  handleChangeComplete(){
    console.log('Change event completed')
  };

  render () {
    const { value, reverseValue } = this.state
    return (
      <div className='slider' style={{pointerEvents: this.props.disabled ? 'none': ''}}>
        <Slider
          min={10}
          max={1}
          reverseValue={reverseValue}
          reverse={true}
          onChange={this.handleChangeReverse.bind(this)}
        />
        <div className='value'>Speed : {reverseValue} seconds</div>
      </div>
    )
  }
}
