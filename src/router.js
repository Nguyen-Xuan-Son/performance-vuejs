import CategoryContainerComponent from './components/category';
import HomeComponent from './components/home.vue';

import CategoryRoute from './components/category/router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/category',
        name: 'category',
        component: CategoryContainerComponent,
        children: CategoryRoute
    }
];

export default routes;