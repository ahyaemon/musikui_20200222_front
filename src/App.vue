<template lang="pug">
    #app
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component export default class App extends Vue {}
</script>

<style>
    @import './style/init.css';
</style>
