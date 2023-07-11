import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Container">
        <input className="calcInput" />
      </div>
    );
  }
}
export default Calculator;
