<template lang="pug">
    #app
        MNav(links=links)
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
export default class General extends Vue {
    private links: Link[] = [
        { url: '/how', title: '解き方' },
        { url: '/', title: '今週の問題' },
        { url: '/search-question', title: '過去問たち' },
        { url: '/column', title: 'コラム' },
        { url: '/about', title: 'About' }
    ]
}
</script>

<style>
    @import './style/init.css';

    .main {
        margin-top: 80px;
    }
</style>
