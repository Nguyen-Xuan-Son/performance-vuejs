<template>
    <div class="row text-left">
        <h3 class="col-md-12"
            v-if="isCreateMode">Create Category</h3>
        <h3 class="col-md-12"
            v-else>Update Category</h3>
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
                <label for="depcription-feild">Depcription</label>
                <input type="text"
                        v-model="depcription"
                        class="form-control"
                        id="depcription-feild"
                        placeholder="Enter depcription ...">
            </div>
            <div class="form-group">
                <button type="button"
                    v-if="isCreateMode"
                    @click="createCategory()"
                    class="btn btn-success">
                    Create
                </button>
                <button type="button"
                    v-else
                    @click="updateCategory()"
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
    createCategory,
    generateId,
    getCategoryById,
    updateCategoryById
} from './../../service';
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'CategoryCreateAndUpdate',
    data() {
        return {
            name: '',
            depcription: '',
            isCreateMode: true,
            categoryId: '',
            category: {}
        }
    },
    methods: {
        backTolist() {
            this.$router.push('/category');
        },
        createCategory() {
            const data = {
                id: generateId(),
                name: this.name,
                depcription: this.depcription
            };
            createCategory(data);
            this.$router.push("/category");
        },
        getCategory() {
            this.category = getCategoryById(this.categoryId);
            this.name = this.category.name;
            this.depcription = this.category.depcription;
        },
        updateCategory() {
            const data = {
                id: this.categoryId,
                name: this.name,
                depcription: this.depcription,
                createTime: this.category.createTime,
                updateTime: moment.now()
            }
            updateCategoryById(data);
            this.$router.push("/category");
        }
    },
    mounted() {
        const id = this.$route.params.id;
        if (_.isEqual(id, 'new')) {
            this.isCreateMode = true;
            return;
        }
        this.categoryId = this.$route.params.id;
        this.isCreateMode = false;
        this.getCategory();
    }
}
</script>

<style scoped>
</style>
