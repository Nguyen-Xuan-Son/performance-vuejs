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
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in categoryDetail.products"
                        :key="product.id">
                        <th scope="row">{{product.id}}</th>
                        <td>{{product.name}}</td>
                        <td>
                            <button class="btn btn-sm btn-warning"
                                @click="navigateUpdateProduct(category.id)"
                            >
                                Edit
                            </button>
                            <button class="btn btn-sm btn-danger ml-1"
                                @click="deleteProductById(category.id)"
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
import { getCategoryById } from '../../service';
export default {
    name: 'CategoryUpdateAndDetail',
    data() {
        return {
            categoryDetail: {}
        }
    },
    methods: {
        navigateCreateProduct() {
            console.log("navigateCreateProduct");
        },
        deleteProductById() {
            console.log("deleteProductById");
        },
        navigateUpdateProduct() {
            console.log("navigateUpdateProduct");
        },
        getCategory(id) {
            this.categoryDetail = getCategoryById(id);
        },
        navigateToCategories() {
            this.$router.push({ path: `/category`});
        }
    },
    mounted() {
        const categoryId = this.$route.params.id;
        this.getCategory(categoryId);
    }
}
</script>

<style scoped>
</style>
