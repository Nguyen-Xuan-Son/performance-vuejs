import ProductCreateAndUpdateComponent from './product-create-and-update.vue';
import ViewProductsComponent from './view-products-detail.vue';

const routes = [
    {
        path: '',
        name: 'products',
        component: ViewProductsComponent
    },
    {
        path: ':productId',
        name: 'updateAndViewProduct',
        component: ProductCreateAndUpdateComponent
    }
];

export default routes;