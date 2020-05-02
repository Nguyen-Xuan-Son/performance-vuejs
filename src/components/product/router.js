import ProductCreateComponent from './product-create.vue';
import ProductUpdateAndViewComponent from './product-update-and-detail.vue';

const routes = [
    {
        path: 'new',
        name: 'createProduct',
        component: ProductCreateComponent
    },
    {
        path: ':id',
        name: 'updateAndViewProduct',
        component: ProductUpdateAndViewComponent
    }
];

export default routes;