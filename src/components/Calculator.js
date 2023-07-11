import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Container">
        <div>
          <input className="calcInput" value="0" />
          <div className="calcBody">{/* Buttons for calculator */}</div>
        </div>
      </div>
    );
  }
}
export default Calculator;
