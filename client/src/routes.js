import Auth from './pages/Auth';
import Review from './pages/Review';
import Workers from './pages/Workers';
import Orders from './pages/Orders';
import ToOrder from './pages/ToOrder';

export const publicPath = [
  {path: '/review', title: 'Відгуки', Component: Review},
  {path: '/login', title: 'Увійти', Component: Auth},
  {path: '/registration', title: 'Реєстрація', Component: Auth},
];

export const adminsPath = [
  {path: '/workers', title: 'Працівники', Component: Workers},
];

export const workersPath = [
  {path: '/orders', title: 'Ваші записи', Component: Orders},
];

export const clientsPath = [
  {path: '/review', title: 'Відгуки', Component: Review},
  {path: '/to_order', title: 'Запис', Component: ToOrder},
];
