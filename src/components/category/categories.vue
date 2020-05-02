<template>
    <div class="row">
        <div class="col-md-12 text-right">
            <button class="btn btn-sm btn-success m-2"
                    @click="navigateCreateCategory()">Create</button>
        </div>
        <div class="col-md-12 border p-3 rounded">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Id category</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category, index) in categories"
                        :key="category.id">
                        <th scope="row">{{index + 1}}</th>
                        <td>{{category.name}}</td>
                        <td>{{category.id}}</td>
                        <td>
                            <button class="btn btn-sm btn-warning"
                                @click="navigateUpdateCategory(category.id)"
                            >
                                Edit
                            </button>
                            <button class="btn btn-sm btn-info ml-1"
                            >
                                View product
                            </button>
                            <button class="btn btn-sm btn-danger ml-1"
                                @click="deleteCategoryById(category.id)"
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
    initCategories,
    getCategories,
    deleteCategory
} from './../../service';

export default {
    name: 'Categories',
    methods: {
        navigateCreateCategory() {
            this.$router.push('/category/new');
        },
        navigateUpdateCategory(id) {
            this.$router.push('/category/' + id);
        },
        deleteCategoryById(id) {
            deleteCategory(id);
            this.categories = getCategories();
        }
    },
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        const categories = getCategories();
        if (categories.length >= 3) {
            this.categories = getCategories();
            return;
        }
        this.categories = initCategories();
    }
}
</script>

<style scoped>

</style>
