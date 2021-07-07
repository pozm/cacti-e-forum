<template>
    <div class="model parent" >
        <div class="model bg">
        </div>
        <div class="model box">
            you got trolled dumbass
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
        background-image: url("~/assets/image/pnl.png");
        filter:blur(4px) brightness(70%);
        height: 100vh;
    }
}

</style>
