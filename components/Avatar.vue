<template>
    <div :class="{['drop-shadow']:shadow}">
        <style>

            :root {
            --PrimCol : rgb({{ primaryColor }});
            }

        </style>
        <div :hidden="!loaded" class="CircleMask p1" :style=" outer ? { background: outer} : '' ">
            <div class="CircleMask p2" :style=" inner ? { background: inner} : '' ">
                <img
                    class="CircleMask"
                    :src="this.url"
                    :width="this.size"
                    alt=""
                    @load="loaded=true"
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import '~/assets/styling/user.scss'
const Vibrant = require('node-vibrant')

export default Vue.extend({
    name: 'Avatar',
    props: {
        url: String,
        size: {
            type: Number,
            default: 128
        },
        inner: String,
        outer: String,
        shadow: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        Vibrant.from(this.url).getPalette((err : any, palette : any) => {
            this.primaryColor = palette.Vibrant.rgb.join(" ")
            console.log(err)
        })
    },
    data: () => ({ loaded: false, primaryColor: '0,0,0' }),
    watch: {
        url () {
            this.loaded = false
        }
    }
})

</script>

<style>

.drop-shadow {
    box-shadow: 3px 10px 20px -10px var(--PrimCol) !important;
}
.p1 {
    background: var(--PrimCol) !important;
}

</style>

<style lang="scss">
    @import "assets/styling/Var";
    .drop-shadow{
        border-radius: 50%;
        box-shadow: 3px 10px 20px -10px rgba($color-primary, 1);
        //margin-right: 10px;

    }
    .p1 {
        padding:2px;
        background: $color-primary;
    }
    .p2 {
        padding:3px;
        background: $background-color-light;
    }
</style>
