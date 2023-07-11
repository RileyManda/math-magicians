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
          <div className="calcBodyleft">
            <div className="calcButtonGrid">
              <button type="button" className="calcButton">
                AC
              </button>
              <button type="button" className="calcButton">
                +/-
              </button>
              <button type="button" className="calcButton">
                %
              </button>
            </div>
          </div>
          <div className="calcBodyright">body r</div>
        </div>
      </div>
    );
  }
}
export default Calculator;
