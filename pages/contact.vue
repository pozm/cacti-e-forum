<template>
    <div class="model parent" >
        <div class="model bg">
        </div>
        <div class="model box contact">
            <h1>
                Contact Information
            </h1>
            <br/>
            <h4>
                This is where you can find methods of contacting me!
            </h4>
            <br/>
            <div>
                <h2>
                    Socials
                </h2>
                <div class="soclist" >
                    <a v-for="(item) in socials" :key="item[0]" :href="item[0]" >
                        <svg :data-src="item[1]" width="32" height="32" :color="item[2]"></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        socials: [
            ["discord://discordapp.com/users/288062966803333120", "https://s2.svgbox.net/social.svg?ic=discord", "#889CFE"],
            ["https://steamcommunity.com/id/pozus/", "https://s2.svgbox.net/social.svg?ic=steam", "#C5C3C0"],
            ["https://www.twitter.com/pozmx", "https://s2.svgbox.net/social.svg?ic=twitter", "#1DA1F2"],
        ]
    })
})
</script>

<style lang="scss">
@import "assets/styling/modelbg/index";

.model {
    &.bg {
        background-image: url("~/assets/image/h-green.jpg");
        filter:blur(4px) brightness(70%);
        height: 100vh;
    }
    &.contact {

        width: 70%;
        left: calc(50% - (70%/2));
        min-height: 70%;
        top: calc(50% - (70%/2));
        align-items:start;
        display: initial;
        text-align: center;

        & div:not(.soclist) {
            display: flex;
            flex-flow: column;
        }
    }
}
.soclist {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    & a:not(:last-child) {
        margin-right: .6em;
    }
}

</style>
