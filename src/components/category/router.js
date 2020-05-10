import ProductRoute from './../product/router';

const routes = [{
        path: '',
        name: 'categories',
        component: () =>
            import ('./categories.vue')
    },
    {
        path: ':id',
        name: 'createAndUpdateCategory',
        component: () =>
            import ('./category-create-and-update.vue')
    },
    {
        path: ':id/view-products',
        name: 'viewProducts',
        component: () =>
            import ('./../product'),
        children: ProductRoute
    }
];

export default routes;