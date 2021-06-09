<template>
    <div>
        <div v-show="$mq==='sm' && !show" class="sbbutton" @click="show=true">
            <vs-button icon>
                <svg data-src="https://s2.svgbox.net/hero-outline.svg?ic=menu" width="16" height="16" color="#000000" />
            </vs-button>
        </div>
        <transition name="fade" mode="in-out">
            <div v-if="($mq==='sm' && show) || $mq !== 'sm'" class="sidebar" @click="sbclick">
                <div class="inner">
                    <div class="top">
                        <vs-button transparent to="/">
                            <svg data-src="https://s2.svgbox.net/hero-outline.svg?ic=home" width="24" height="24" color="#ffffff" />
                            Home
                        </vs-button>
                        <vs-button transparent to="/forum">
                            <svg data-src="https://s2.svgbox.net/materialui.svg?ic=push_pin" width="24" height="24" color="#ffffff" />
                            Forum
                        </vs-button>
                    </div>
                    <div v-if="userStore.LoggedIn" class="ava">
                        <template>
                            <Avatar :size="64" :url="userStore.User.AvatarUri" :shadow="false" />

                            <div class="tool">
                                <div v-if="userStore.LoggedIn">
                                    <p style="margin-bottom: 0; font-size: small;text-align: center">
                                        {{ userStore.User.Username }}
                                    </p>
                                    <vs-button size="small" to="/account/dash" transparent>
                                        dash
                                    </vs-button>
                                    <vs-button size="small" transparent @click="userStore.logout()">
                                        logout
                                    </vs-button>
                                </div>
                                <div v-else />
                            </div>
                        </template>
                    </div>
                    <div v-else class="bottom">
                        <vs-button transparent to="/account/login">
                            <svg data-src="https://s2.svgbox.net/hero-outline.svg?ic=user" width="24" height="24" color="#ffffff" />
                            Login
                        </vs-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { userStore } from '~/utils/store-accessor'

export default Vue.extend({
    name: 'SideBar',
    data () {
        return {
            userStore,
            show: true
        }
    },
    mounted () {
        this.show = this.$mq !== 'sm'
    },
    methods: {
        sbclick () {
            this.show = this.$mq !== 'sm'
            console.log(this.show)
        }
    }
})

</script>

<style scoped lang="scss" >

@import 'assets/styling/sidebar';
.inner {
    color: white!important;
    //grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
.top{
    align-self: baseline;
}
</style>
