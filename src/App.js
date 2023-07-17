import { useRoutes, Link } from 'react-router-dom';
import './App.css';
import routes from './route-config';

function App() {
  const route = useRoutes(routes);

  return (
    <div className="App">
      <nav className="Navbar">
        <ul className="Menu-List">
          {routes.map((route) => (
            <li className="Menu-Item" key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {route}
    </div>
  );
}

export default App;
