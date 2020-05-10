import CategoryRoute from './components/category/router';

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('./components/home.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () =>
            import ('./components/category'),
        children: CategoryRoute
    }
];

export default routes;