import React from 'react'
import ReactDOM from 'react-dom';

export default class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return(
      <div>
        <h1>Hello, Compozed!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

// function Clock(props) {
//   const element = (
//     <div>
//       <h1>Hello, Compozed!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// export default function tick() {
//   ReactDOM.render(
//     <tick date={new Date()}/>,
//     document.getElementById('root')
//   );
// }

// setInterval(Clock, 1000);