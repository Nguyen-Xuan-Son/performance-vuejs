const routes = [{
        path: '',
        name: 'products',
        component: () =>
            import ('./view-products-detail.vue')
    },
    {
        path: ':productId',
        name: 'updateAndViewProduct',
        component: () =>
            import ('./product-create-and-update.vue')
    }
];

export default routes;