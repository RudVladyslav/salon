import Auth from '../pages/Auth';
import Review from '../pages/Review';
import Workers from '../pages/Workers';
import Orders from '../pages/Orders';
import ToOrder from '../pages/ToOrder';
import appConstants from './consts';
import AddWorker from '../pages/AddWorker';
import CreateVacancy from '../pages/CreateVacancy';
import Vacancies from '../pages/Vacancies';

export const publicPath = [
  {path: appConstants.PATH.REVIEW, title: 'Відгуки', Component: Review},
  {path: appConstants.PATH.LOGIN, title: 'Увійти', Component: Auth},
  {path: appConstants.PATH.REGISTRATION, title: 'Реєстрація', Component: Auth},
  {path: appConstants.PATH.VACANCIES, title: 'Вакансії', Component: Vacancies},
];

export const adminsPath = [
  {path: appConstants.PATH.WORKERS, title: 'Працівники', Component: Workers},
  {path: appConstants.PATH.ADD_WORKERS, title: 'Створити працівника', Component: AddWorker},
  {path: appConstants.PATH.ADD_VACANCY, title: 'Створити вакансію', Component: CreateVacancy},
  {path: appConstants.PATH.VACANCIES, title: 'Вакансії', Component: Vacancies},
];

export const workersPath = [
  {path: appConstants.PATH.ORDERS, title: 'Ваші записи', Component: Orders},
];

export const clientsPath = [
  {path: appConstants.PATH.REVIEW, title: 'Відгуки', Component: Review},
  {path: appConstants.PATH.TO_ORDER, title: 'Записатись', Component: ToOrder},
  {path: appConstants.PATH.VACANCIES, title: 'Вакансії', Component: Vacancies},

];
