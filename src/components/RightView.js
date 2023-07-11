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
    );
  }
}
export default LeftButtonContainer;
