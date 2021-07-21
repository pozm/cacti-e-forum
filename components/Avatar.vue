<template>
    <div :class="{['drop-shadow']:shadow}" :style="{ ['box-shadow'] : shadow ? '3px 10px 20px -10px rgb('+primaryColor + ')' : '' }" >
        <div :hidden="!loaded" class="CircleMask p1" :style="{ background: outer ? outer: 'rgb('+primaryColor + ')' }">
            <div class="CircleMask p2" :style=" { background: inner ? inner: '' }">
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
<style lang="scss" scoped>
    @import "assets/styling/Var";
    .drop-shadow{
        border-radius: 50%;
        box-shadow: 3px 10px 20px -10px rgba($color-primary, 1);
        //margin-right: 10px;

    }
    img.CircleMask {
        user-select: text;
        -webkit-user-drag: none;
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
