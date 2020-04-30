<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div class="container">
            <Root />
        </div>
    </div>
</template>

<script>
import Root from './components';

export default {
    name: 'App',
    components: {
        Root
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
