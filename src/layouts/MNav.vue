import Color from '@/domain/vo/Color'
import Color from '@/domain/vo/Color'
<template lang="pug">
    header#luxbar.luxbar-static(:style="borderStyle")
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
import Color from '@/domain/vo/Color'

    @Component
export default class MNav extends Vue {
    @Prop({ default: () => [] }) private links!: Link[]
    @Prop({ default: Color.Red }) private color!: Color

    get borderStyle () {
        let color
        if (this.color === Color.Red) {
            color = '#BA6262'
        } else if (this.color === Color.Green) {
            color = 'rgb(0,144,62)'
        } else {
            color = '#BA6262'
        }

        return {
            borderBottom: 'solid 5px ' + color
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
