<template>
    <div class="row">
        <div class="col-md-12 text-right">
            <button class="btn btn-sm btn-success m-2"
                @click="navigateCreateProduct()"
            >
                Create
            </button>
            <button class="btn btn-sm btn-secondary mb-2 mt-2"
                @click="navigateToCategories()"
            >
                Back to categories
            </button>
        </div>
        <div class="col-md-12 border p-3 rounded">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Create time</th>
                        <th scope="col">Update time</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in categoryDetail.products"
                        :key="product.id">
                        <th scope="row">{{product.id}}</th>
                        <td>{{product.name}}</td>
                        <td>{{formatTime(product.createTime)}}</td>
                        <td>{{formatTime(product.updateTime)}}</td>
                        <td>
                            <button class="btn btn-sm btn-warning"
                                @click="navigateUpdateProduct(product.id)"
                            >
                                Edit
                            </button>
                            <button class="btn btn-sm btn-danger ml-1"
                                @click="deleteProduct(product.id)"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { 
    getCategoryById,
    deleteProductById
} from '../../service';
import moment from 'moment/moment';

export default {
    name: 'CategoryUpdateAndDetail',
    data() {
        return {
            categoryDetail: {}
        }
    },
    methods: {
        navigateCreateProduct() {
            this.$router.push({ path: `/category/${this.categoryId}/view-products/new`});
        },
        deleteProduct(id) {
            deleteProductById(this.categoryId, id);
            this.getCategory();
        },
        navigateUpdateProduct(productId) {
            this.$router.push({ path: `/category/${this.categoryId}/view-products/${productId}`});
        },
        getCategory() {
            this.categoryDetail = getCategoryById(this.categoryId);
        },
        navigateToCategories() {
            this.$router.push({ path: `/category`});
        },
        formatTime(time) {
            return moment(time).format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    mounted() {
        this.categoryId = this.$route.params.id;
        this.getCategory();
    }
}
</script>

<style scoped>
</style>
