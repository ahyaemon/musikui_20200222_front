<template lang="pug">
    header#luxbar.luxbar-static(v-bind:style="borderStyle")
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
import { Component, Prop, Vue } from 'vue-property-decorator'
import Link from '@/layouts/link'

@Component
export default class MNav extends Vue {
    @Prop({ default: () => [] }) private links!: Link[]
    @Prop({ default: '#000' }) private color!: string

    get borderStyle () {
        return {
            borderBottom: 'solid 5px ' + this.color
        }
    }
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
