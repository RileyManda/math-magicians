import React, { Component } from 'react';

class LeftButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calcBodyleft">
        <div className="LeftButtonContainer">
          {['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3'].map(
            (label) => (
              <button key={label} type="button" className="leftButtons">
                {label}
              </button>
            ),
          )}
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
    );
  }
}

export default LeftButtonContainer;
