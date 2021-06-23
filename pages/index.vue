<template>
    <div class="model parent" >
        <div class="model bg">
        </div>
        <div class="model box">

            <div >
                <h1>
                    Welcome to cacti
                </h1>
                <h3>
                    aka pozm's website
                </h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="scss">
@import "assets/styling/modelbg/index";

.model {
    &.bg {
        background-image: url("~/assets/image/14ba4fd010262c4ae2260478f846c5e0.jpg");
        filter:blur(4px);
        height: 100vh;
    }
}

</style>
