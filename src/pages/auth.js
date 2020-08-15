import LoginImage from '../resources/img/seo/login.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/todo'),
    seo: {
      title: 'Todo List',
      description: 'Add your todo list and save it smoothly'
    },
  },
];
