<template lang="pug">
    #app
        MNav
        router-view
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import MNav from '@/layouts/MNav.vue'

@Component({
    components: {
        MNav
    }
})
export default class App extends Vue {}
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
        background-image: url('./assets/background.jpeg');
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: 100%;
    }

    ul {
        padding: 0 0 0 10px;
    }

    li {
        list-style-type: none;
    }

    table {
        border-collapse: collapse;
    }

    a {
        text-decoration: none;
        color: rgb(100, 117, 99);
        text-decoration: underline;
    }
</style>
