<template lang="pug">
    #app
        MNav
        .main
            router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MNav from '@/layouts/MNav.vue'

@Component({
    components: {
        MNav
    }
})
export default class App extends Vue {}
</script>

<style>
    @import './style/init.css';

    .main {
        margin-top: 80px;
    }
</style>
