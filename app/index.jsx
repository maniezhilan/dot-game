import React from 'react';
import {render} from 'react-dom';
import classes from './main.scss';
import Dot from '../app/components/Dot';
import Toggle from '../app/components/Toggle';

class App extends React.Component {
  render () {
    return <div> <Toggle/></div>;
  }
}

render(<App/>, document.getElementById('app'));
