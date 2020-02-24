<template lang="pug">
    #app
        MNav(:links='links' color='#00903e')
        .main
            router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MNav from '@/layouts/MNav.vue'
import Link from '@/layouts/link'

@Component({
    components: {
        MNav
    }
})
export default class Manager extends Vue {
    private links: Link[] = [
        { url: '/manager/contest', title: '今週の問題' }
    ]
}
</script>

<style>
    @import './style/init.css';

    .main {
        margin-top: 80px;
    }
</style>
