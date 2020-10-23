import { Employee, Login, Manager } from 'pages';

export default [
  // switch, order matters
  { component: Login, path: '/' },
  { component: Manager, path: '/manager' },
  { component: Employee, path: '/employee' },
];
