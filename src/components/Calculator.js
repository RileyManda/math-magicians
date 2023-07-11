import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Container">
        <input className="calcInput" value="0" />
        <div className="calcBody">
          buttons
        </div>
      </div>
    );
  }
}
export default Calculator;
