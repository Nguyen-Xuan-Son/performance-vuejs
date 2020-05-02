import CategoryContainerComponent from './components/category';
import ProductComponent from './components/product/products.vue';
import HomeComponent from './components/home.vue';

import CategoryRoute from './components/category/router';
import ProductRoute from './components/product/router';

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
    },
    {
        path: '/product',
        name: 'product',
        component: ProductComponent,
        children: ProductRoute
    }
];

export default routes;