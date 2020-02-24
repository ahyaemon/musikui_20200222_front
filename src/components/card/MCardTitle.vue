<template lang="pug">
    .m-card-title(:style="colorStyle")
        slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Color from '@/domain/vo/Color'

@Component export default class MCardTitle extends Vue {
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
            background: 'linear-gradient(90deg, ' + this._color + ', white)'
        }
    }
}
</script>

<style lang="scss">
    .m-card-title {
        padding: 4px 0px 4px 10px;
        margin: 0 0 10px 0;
        color: white;
        font-size: 1.4em;
        font-weight: bold;
    }
</style>
