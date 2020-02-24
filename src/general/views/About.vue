<template lang="pug">
    .about
        MCard
            MCardTitle(:color="color") このページについて
            MCardBody
                p あひゃえもん & Dr.Kenによる虫食い算サイト。
                p 基本的にあひゃえもんがサイトを構築しており、Dr.Kenはブレインとして虫食い算を作成している。
            MCardSubTitle あひゃえもん
            MCardBody
                p メール：musikui4u[@]gmail.com
                p 公式サイト：
                    a(href="https://ahyaemon.com" target="_blank") あひゃえもんのページ
            MCardSubTitle Dr.Ken
            MCardBody
                p twitter：
                    a(href="https://twitter.com/drken1215" target="_blank") @drken1215
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import mCardComponents from '@/components/card/MCardComponents'
import Color from '@/domain/vo/Color'

@Component({
    components: {
        ...mCardComponents
    }
})
export default class App extends Vue {
    get color () {
        return Color.Red
    }
}
</script>
