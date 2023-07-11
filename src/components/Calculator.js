import { Component } from 'react';
import LeftView from './LeftView';
import RightView from './RightView';

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
          <LeftView />
          <RightView />
        </div>
      </div>
    );
  }
}
export default Calculator;
