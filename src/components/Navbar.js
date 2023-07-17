import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ routes }) {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h1>Math Magicians</h1>
      </div>
      <nav className="Menu">
        <ul className="Menu-List">
          {routes.map((route) => (
            <li className="Menu-Item" key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
