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
            <div className="LeftButtonContainer">
              <button type="button" className="leftButtons">
                AC
              </button>
              <button type="button" className="leftButtons">
                +/-
              </button>
              <button type="button" className="leftButtons">
                %
              </button>
            </div>
          </div>
          <div className="calcBodyright">
            <div className="RightButtonContainer">
              <button type="button" className="rightButtons">
                ÷
              </button>
              <button type="button" className="rightButtons">
                ×
              </button>
              <button type="button" className="rightButtons">
                ×
              </button>
              {' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
