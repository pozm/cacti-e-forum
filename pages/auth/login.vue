<template>
    <div class="model parent" >
        <div class="model bg">
        </div>
        <div class="model box login">

            <div class="hhhh" >

                <h1>Login</h1>
                <div class="lg">
                    <vs-input v-model="Username" state="primary" label-placeholder="Username" />
                    <vs-input v-model="Password" state="primary" label-placeholder="Password" />
                </div>
                <vs-button style="margin-top: 1em" block>
ok
</vs-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        Username: '',
        Password: ''
    })
})
</script>

<style lang="scss">
@import "assets/styling/modelbg/index";

.model .box .lg div:not(:last-child) {
    margin-bottom: 1em;
}
.hhhh {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}

</style>
