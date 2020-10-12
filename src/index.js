import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello,World!!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

const FormattedDate = props => {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
};

// const tick = () => {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// };

// setInterval(tick, 1000);

const App = () => {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
