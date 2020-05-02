import CategoryCreateComponent from './category-create.vue';
import CategoryUpdateAndViewComponent from './category-update-and-detail.vue';
import CategoriesComponent from './categories.vue';

const routes = [
    {
        path: '',
        name: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'new',
        name: 'createCategory',
        component: CategoryCreateComponent
    },
    {
        path: ':id',
        name: 'updateAndViewCategory',
        component: CategoryUpdateAndViewComponent
    }
];

export default routes;