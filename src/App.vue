<template>
    <div id="app">
        <router-link to="/">
            <img alt="Vue logo" src="./assets/logo.png">
        </router-link>
        <Window v-if="isShow" />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    components: {
        Window: () => import(
            /* webpackChunkName: "my-Window" */
            './window.vue')
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
