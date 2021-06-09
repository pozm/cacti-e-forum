<template>
    <div class="model parent" >
        <div class="model bg">
        </div>
        <div class="model box">

            <div >
                <h1>
                    Mewski likes loli
                </h1>
                <h3>
                    And catgirls
                </h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head() {
        return {
            title: 'Mewski likes lolis',
            meta: [
                {
                    content: 'https://cdn.discordapp.com/attachments/519306219291279362/852233053752524840/vansmug2.png', // yea fuck u, im too lazy i've spent wayyy 2 long tryna fix
                    name: 'og:image'
                },
                {
                    content: 'Cacti',
                    name: 'og:site_name'
                },
                {
                    content: 'Mewski likes loli',
                    name: 'og:title'
                },
                {
                    content: 'she also likes nekos',
                    name: 'og:description'
                }
            ]
        }
    }

})
</script>

<style lang="scss">

@import "assets/styling/modelbg/index";

.model {
    &.bg {
        background-image: url("~/assets/image/mewskibg.jpg") !important;
    }
}

</style>
