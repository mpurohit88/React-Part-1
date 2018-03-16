import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
// import Clock from './components/Clock'
import Clock1 from './components/Clock1'

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);