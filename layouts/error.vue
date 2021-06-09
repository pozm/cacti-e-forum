<template>
    <div class="__nuxt-error-page">
      <div class="title">An error occured - {{ error.statusCode }} </div>
      <p>Error Message: {{ error.message }}</p>
      <p v-if="error.statusCode == 404">redirecting to <NuxtLink :to="{ path: '/' }" no-prefetch="">/</NuxtLink> in {{ seconds }} seconds</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    layout: "default",
    props: ["error"],
    head() {
        return {
            title: "Pozm.Pw (Cacti) " + this.error.statusCode
        }
    },
    data() {
        return {
            seconds: 5
        }
    },
    mounted() {
        const interval: NodeJS.Timeout = setInterval(() => {
            if (this.seconds <= 1) {
                this.$router.push("/");
                return clearInterval(interval);
            }
            this.seconds -= 1
        }, 1000);
    },
})
</script>

<style>

</style>
