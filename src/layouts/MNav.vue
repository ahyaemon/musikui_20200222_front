<template lang="pug">
    header#luxbar.luxbar-static
        input#luxbar-checkbox.luxbar-checkbox(type="checkbox")
        .luxbar-menu.luxbar-menu-left.luxbar-menu-dark
            ul.luxbar-navigation
                li.luxbar-header
                    router-link.luxbar-brand(to="/") 虫食い算やろうぜ！！
                    label#luxbar-hamburger.luxbar-hamburger.luxbar-hamburger-spin(for="luxbar-checkbox")
                        span
                li.luxbar-item(v-for="(link, ilink) in links" :key="ilink")
                    router-link(:to="link.url") {{ link.title }}
</template>

<script lang="ts">
import 'luxbar/build/luxbar.min.css'
import { Component, Vue } from 'vue-property-decorator'

interface Link {
    url: string;
    title: string;
}

@Component
export default class MNav extends Vue {
    private links: Link[] = [
        { url: '/how', title: '解き方' },
        { url: '/', title: '今週の問題' },
        { url: '/search-question', title: '過去問たち' },
        { url: '/column', title: 'コラム' },
        { url: '/about', title: 'About' }
    ]
}
</script>

<style scoped>
    header {
        border-bottom: solid 5px #BA6262;
    }
    .luxbar-brand {
        padding: 18px 0px 18px 10px;
    }
    .luxbar-menu-dark {
        background-color: rgb(37, 37, 37);
    }
</style>
