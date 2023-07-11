import { Component } from 'react';

class LeftButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calcBodyright">
        <div className="RightButtonContainer">
          {['÷', '×', '-', '+', '='].map((label) => (
            <button key={label} type="button" className="rightButtons">
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default LeftButtonContainer;
