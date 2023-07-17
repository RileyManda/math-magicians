import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './route-config';
import Navbar from './components/Navbar';

function App() {
  const route = useRoutes(routes);

  return (
    <div className="App">
      <Navbar routes={routes} />
      {route}
    </div>
  );
}

export default App;
