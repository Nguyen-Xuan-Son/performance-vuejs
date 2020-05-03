import CategoryCreateAndUpdateComponent from './category-create-and-update';
import CategoriesComponent from './categories.vue';
import ProductComponent from './../product';
import ProductRoute from './../product/router';

const routes = [
    {
        path: '',
        name: 'categories',
        component: CategoriesComponent
    },
    {
        path: ':id',
        name: 'createAndUpdateCategory',
        component: CategoryCreateAndUpdateComponent
    },
    {
        path: ':id/view-products',
        name: 'viewProducts',
        component: ProductComponent,
        children: ProductRoute
    }
];

export default routes;