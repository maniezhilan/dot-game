import React from 'react';
import Dot from './Dot';
import Circle from './Circle';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {play: false};
  }

  render() {
    if (this.state.play) {
      return <Dot
               play={this.state.play}
               onExit={() => this.setState({play:null})}
               />
    } else {
      return (
        <div>
          <button onClick={() => this.setState({play:true})}  >Start</button><br/>
        </div>
      )
    }
  }
}
