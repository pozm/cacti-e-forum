<template>
    <div class="model parent" >
        <div class="model bg"> </div>
        <div class="model box">

            <div >
                <h1>
                    Welcome to cacti
                </h1>
                <h3>
                    aka ∫∫'s website
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

<style lang="scss" scoped>
@import "assets/styling/modelbg/index";

.model {
    &.bg {
        background-image: url("~/assets/image/h-green.jpg");
        filter:blur(4px) brightness(70%);
        height: 100vh;
    }
}

</style>
