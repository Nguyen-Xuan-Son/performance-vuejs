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
                        <th scope="col">Id category</th>
                        <th scope="col">Name</th>
                        <th scope="col">Depcription</th>
                        <th scope="col">Create time</th>
                        <th scope="col">Update time</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories"
                        :key="category.id">
                        <th scope="row">{{category.id}}</th>
                        <td>{{category.name}}</td>
                        <td>{{category.depcription}}</td>
                        <td>{{formatTime(category.createTime)}}</td>
                        <td>{{formatTime(category.updateTime)}}</td>
                        <td>
                            <button class="btn btn-sm btn-warning"
                                @click="navigateUpdateCategory(category.id)"
                            >
                                Edit
                            </button>
                            <button class="btn btn-sm btn-info ml-1"
                                @click="navigateViewCategoryDetail(category.id)"
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

import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'Categories',
    methods: {
        navigateCreateCategory() {
            this.$router.push({ name: 'createAndUpdateCategory', params: { id: 'new' }});
        },
        navigateUpdateCategory(id) {
            this.$router.push({ name: 'createAndUpdateCategory', params: { id }});
        },
        deleteCategoryById(id) {
            deleteCategory(id);
            this.categories = getCategories();
        },
        navigateViewCategoryDetail(id) {
            this.$router.push({ path: `/category/${id}/view-products`});
        },
        formatTime(time) {
            return moment(time).format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        const categories = getCategories();
        if (!_.isEmpty(categories) && categories.length >= 3) {
            this.categories = getCategories();
            return;
        }
        this.categories = initCategories();
    }
}
</script>

<style scoped>

</style>
