import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Container">
        <div className="calcInput">
          <input type="text" defaultValue="0" />
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
              {' '}
              <button type="button" className="leftButtons">
                7
              </button>
              <button type="button" className="leftButtons">
                8
              </button>
              <button type="button" className="leftButtons">
                9
              </button>
              <button type="button" className="leftButtons">
                4
              </button>
              <button type="button" className="leftButtons">
                5
              </button>
              <button type="button" className="leftButtons">
                6
              </button>
              <button type="button" className="leftButtons">
                1
              </button>
              <button type="button" className="leftButtons">
                2
              </button>
              <button type="button" className="leftButtons">
                3
              </button>
              <div className="FooterButtons">
                <button type="button" className="zero FooterButtons">
                  0
                </button>
                <button type="button" className="fullstop FooterButtons">
                  .
                </button>
              </div>
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
                -
              </button>
              <button type="button" className="rightButtons">
                +
              </button>
              <button type="button" className="rightButtons">
                =
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
