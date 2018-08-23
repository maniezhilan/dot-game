import React, {Component} from 'react';
import Slider from 'react-rangeslider';



export default class SpeedSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
    this.handleChangeStart = this.handleChangeStart.bind();
    this.handleChangeComplete = this.handleChangeComplete.bind();
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

  handleChangeComplete(){
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider' style={{pointerEvents: this.props.disabled ? 'none': ''}}>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart.bind(this)}
          onChange={this.handleChange.bind(this)}
          onChangeComplete={this.handleChangeComplete.bind(this)}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}
