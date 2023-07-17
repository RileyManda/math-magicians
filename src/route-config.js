import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const routes = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
  },
  {
    path: '/calculator',
    label: 'Calculator',
    element: <Calculator />,
  },
  {
    path: '/quotes',
    label: 'Quotes',
    element: <Quotes />,
  },
];

export default routes;
