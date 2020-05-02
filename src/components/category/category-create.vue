<template>
    <div class="row text-left">
        <h3 class="col-md-12">Create Category</h3>
        <div class="col-md-12 border p-3 rounded">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter name ...">
            </div>
            <div class="form-group">
                <label for="number-product-feild">Id category</label>
                <input type="text"
                        class="form-control"
                        id="number-product-feild"
                        placeholder="Enter number product ...">
            </div>
            <div class="form-group">
                <button type="button"
                    @click="createCategory()"
                    class="btn btn-success">
                    Create
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
export default {
    name: 'CategoryCreate',
    methods: {
        backTolist() {
            this.$router.push('/category');
        },
        createCategory() {
            console.log("createCategory");
        }
    }
}
</script>

<style scoped>
</style>
