<template lang="pug">
    .m-card-title
        slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component export default class MCardTitle extends Vue {}
</script>

<style lang="scss">
    .m-card-title {
        padding: 4px 0px 4px 10px;
        margin: 0 0 10px 0;
        color: white;
        background: linear-gradient(90deg, #5a3131, white);
        font-size: 1.4em;
        font-weight: bold;
    }
</style>
