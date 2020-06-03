<template>
    <div class="row text-left">
        <h3 class="col-md-12"
            v-if="isCreateMode">Create product</h3>
        <h3 class="col-md-12"
            v-else>Update product</h3>
        <div class="col-md-12 border p-3 rounded">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text"
                        v-model="name"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter name ...">
            </div>
            <div class="form-group">
                <button type="button"
                    v-if="isCreateMode"
                    @click="createProduct()"
                    class="btn btn-success">
                    Create
                </button>
                <button type="button"
                    v-else
                    @click="updateProduct()"
                    class="btn btn-warning">
                    Update
                </button>
                <button type="button"
                    @click="backTolist()"
                    class="btn btn-secondary ml-2">
                    Back
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    generateId,
    createProduct,
    getProductById,
    updateProductById
} from './../../service';
import isEqual from 'lodash/isEqual';
import moment from 'moment';

export default {
    name: 'ProductCreateAndUpdate',
    data() {
        return {
            name: '',
            isCreateMode: true,
            categoryId: '',
            productId: '',
            product: {}
        }
    },
    methods: {
        backTolist() {
            this.$router.push({ path: `/category/${this.categoryId}/view-products`});
        },
        createProduct() {
            const data = {
                id: generateId(),
                name: this.name
            };
            createProduct(this.categoryId, data);
            this.$router.push({ path: `/category/${this.categoryId}/view-products`});
        },
        getProduct() {
            this.product = getProductById(this.categoryId, this.productId);
            this.name = this.product.name;
        },
        updateProduct() {
            const data = {
                id: this.productId,
                name: this.name,
                createTime: this.product.createTime,
                updateTime: moment.now()
            };
            updateProductById(this.categoryId, data);
            this.$router.push({ path: `/category/${this.categoryId}/view-products` });
        }
    },
    mounted() {
        const productId = this.$route.params.productId;
        this.categoryId = this.$route.params.id;
        if (isEqual(productId, 'new')) {
            this.isCreateMode = true;
            return;
        }
        this.productId = this.$route.params.productId;
        this.isCreateMode = false;
        this.getProduct();
    }
}
</script>

<style scoped>
</style>
