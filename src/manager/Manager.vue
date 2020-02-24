<template lang="pug">
    #app
        MNav(:links='links' :color='color')
        .main
            router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MNav from '@/layouts/MNav.vue'
import Link from '@/layouts/link'
import Color from '@/domain/vo/Color'

@Component({
    components: {
        MNav
    }
})
export default class Manager extends Vue {
    private links: Link[] = [
        { url: '/manager/contest', title: '今週の問題' }
    ]

    get color () {
        return Color.Green
    }
}
</script>

<style>
    @import './style/init.css';

    .main {
        margin-top: 80px;
    }
</style>
