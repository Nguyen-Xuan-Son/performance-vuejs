import CategoryRoute from './components/category/router';

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import (
                /* webpackChunkName: "home" */
                /* webpackPrefetch: true */
                './components/home.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () =>
            import (
                /* webpackChunkName: "category_parent" */
                /* webpackPrefetch: true */
                './components/category'),
        children: CategoryRoute
    }
];

export default routes;