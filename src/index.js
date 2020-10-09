import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return <button className="squaer">{this.props.value}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next `player X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <div>{this.renderSquare("Hage")}</div>
          <div>{this.renderSquare(1)}</div>
          <div>{this.renderSquare(2)}</div>
        </div>
        <div className="board-row">
          <div>{this.renderSquare(3)}</div>
          <div>{this.renderSquare(4)}</div>
          <div>{this.renderSquare(5)}</div>
        </div>
        <div className="board-row">
          <div>{this.renderSquare(6)}</div>
          <div>{this.renderSquare(7)}</div>
          <div>{this.renderSquare(8)}</div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }
}

//====================================
ReactDOM.render(<Game />, document.getElementById("root"));
