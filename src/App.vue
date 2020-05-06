<template>
    <div id="app">
        <router-link to="/">
            <img alt="Vue logo" src="./assets/logo.png">
        </router-link>
        <div class="container">
            <router-view />
        </div>
        <div class="container">
            <ComponentA v-if="isShow" />
            <ComponentB />
        </div>
    </div>
</template>

<script>
const ComponentA = () => import(/* webpackChunkName: "component-A" */ './component-A');
const ComponentB = () => import(/* webpackChunkName: "component-B" */ './component-B');

export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    components: {ComponentA, ComponentB},
    mounted() {
        setTimeout(() => {
            this.isShow = true;
        }, 2000);
    }
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
