import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Calculator />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
