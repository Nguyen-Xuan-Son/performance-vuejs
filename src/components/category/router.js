import CategoryCreateAndUpdateComponent from './category-create-and-update';
import ViewProductsComponent from './view-products-detail.vue';
import CategoriesComponent from './categories.vue';

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
        path: ':id/viewProducts',
        name: 'viewProducts',
        component: ViewProductsComponent
    }
];

export default routes;