import React from 'react'
import ReactDOM from 'react-dom';

// export default class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Hello, Compozed!</h1>
//       <h2>It is {new Date.toLocaleTimeString()}.</h2>
//     </div>
//     )
//   }
// }


function Clock(props) {
  const element = (
    <div>
      <h1>Hello, Compozed!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default function tick() {
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}

setInterval(Clock, 1000);