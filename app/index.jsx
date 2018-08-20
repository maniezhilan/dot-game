import React from 'react';
import {render} from 'react-dom';
import classes from './main.scss';
import Dot from '../app/components/Dot';

class App extends React.Component {
  render () {
    return <div> <Dot/> </div>;
  }
}

render(<App/>, document.getElementById('app'));
