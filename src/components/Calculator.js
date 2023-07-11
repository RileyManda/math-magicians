import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Container">
        <div className="calcInput">
          <input value="0" />
        </div>

        <div className="BodyContainer">
          <div className="calcBodyleft">body l</div>
          <div className="calcBodyright">body r</div>
        </div>
      </div>
    );
  }
}
export default Calculator;
