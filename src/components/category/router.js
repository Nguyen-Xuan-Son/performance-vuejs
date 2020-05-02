import CategoryCreateComponent from './category-create.vue';
import CategoryUpdateAndViewComponent from './category-update-and-detail.vue';

const routes = [
    {
        path: '/new',
        name: 'createCategory',
        component: CategoryCreateComponent
    },
    {
        path: '/:id',
        name: 'updateAndViewCategory',
        component: CategoryUpdateAndViewComponent
    }
];

export default routes;