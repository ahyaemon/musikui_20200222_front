<template lang="pug">
    .m-card-subtitle(:style="colorStyle")
        slot
        .underline(:style="backgroundStyle")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Color from '@/domain/vo/Color'
@Component export default class MCardSubTitle extends Vue {
    @Prop({ default: Color.Red }) private color!: Color

    get _color () {
        if (this.color === Color.Red) {
            return '#5a3131'
        } else if (this.color === Color.Green) {
            return '#005a15'
        }
        return '#5a3131'
    }

    get colorStyle () {
        return {
            color: this._color
        }
    }

    get backgroundStyle () {
        return {
            background: 'linear-gradient(90deg, ' + this._color + ', white)'
        }
    }
}
</script>

<style lang="scss" scoped>
    $red: #000000;

    .m-card-subtitle {
        font-weight:bold;
        padding: 4px 0px 4px 10px;
        .underline {
            height:2px;
            width:100%;
        }
    }
</style>
