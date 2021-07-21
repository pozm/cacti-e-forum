<template>
    <div v-if="!Author" >
        <p>loading</p>
    </div>
    <div v-else class="profile" >
        <div class="profile-top" >
            <div class="left">
                <h1>
                    Stats
                </h1>
                <p>
                    <vs-tooltip>
                        <svg data-src="https://s2.svgbox.net/materialui.svg?ic=date_range" width="20" height="20" color="#ffffff"></svg>
                        <template #tooltip>
                            Creation date of this user
                        </template>
                    </vs-tooltip>
                    <span>
                        {{ dateconv(Author.CreatedAt) }}
                    </span>
                </p>
                <p>
                    <vs-tooltip>
                        <svg data-src="https://s2.svgbox.net/materialui.svg?ic=sensor_door" width="20" height="20" color="#fff"></svg>
                        <template #tooltip>
                            When this user was last online
                        </template>
                    </vs-tooltip>
                    <span>
                        {{ dateconvf(Author.LastLogin) }}
                    </span>
                </p>
                <p>
                    <vs-tooltip>
                        <svg data-src="https://s2.svgbox.net/hero-outline.svg?ic=eye" width="20" height="20" color="#fff"></svg>
                        <template #tooltip>
                            Last viewing
                        </template>
                    </vs-tooltip>
                    <span>
                        {{ Author.LastViewing }}
                    </span>
                </p>
                <p>
                    <vs-tooltip>
                        <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=bookmark" width="20" height="20" color="#fff"></svg>
                        <template #tooltip>
                            Posts
                        </template>
                    </vs-tooltip>
                    <span>
                        {{ Author.Posts }}
                    </span>
                </p>
            </div>
            <div class="right">
                <div class="left" >
                    <p class="abs" >
{{ Author.Username }}'s bio
</p>
                    <div class="inline_HTML" v-html="Bio" />
                </div>
                <div class="avatarParent">
                    <avatar :url="Author.Avatar" :size="256" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" >

import Vue from 'vue'
import sanitize from "sanitize-html";
import { userData } from '~/types'
import { stateStore, userStore } from '~/store'
import { SanOpts } from "~/assets/Functions";

export default Vue.extend({
    layout: 'forum',
    data: () :
{
    Author:userData.User | undefined
} => ({ Author: undefined }),
    mounted() {
        console.log(stateStore)
        stateStore.UpdateThread(this.Author?.Username + "'s Profile")
    },
    computed: {
        Bio() {
            return sanitize(this.Author?.Bio ?? "", SanOpts)
        }
    },
    methods: {
        dateconv(d : Date) {
            return d.toLocaleDateString(this.$nuxt.$isServer ? 'EN-GB' : window.navigator.language, {
                // month: 'short',
                // year: 'numeric',
                // day: "numeric",
                // era: "short",
                dateStyle: "full"
            })
        },
        dateconvf(d : Date) {
            return !d
                ? 'NO'
                : d.toLocaleString(this.$nuxt.$isServer ? 'EN-GB' : window.navigator.language, {
                    timeStyle: "long",
                    dateStyle: "long",
                    localeMatcher: "best fit",
                    formatMatcher: "best fit"
                })
        }
    },

    fetch (ctx) {
        const id = ctx.params.id
        const valid = id === 'test' // actually add logic l8r
        if (!valid)
            ctx.error({
                statusCode: 404,
                message: 'Thread not found'
            })
        console.log('fetchin')
        userStore.Get().then((v) => {
            console.log(v)
            this.Author = v as any;
        })
    }

})

</script>

<style lang="scss" scoped>
@import "assets/styling/Var";

.profile {
    // pos
    display: flex;
    min-width: 100%;
    min-height: 100%;
    flex-flow: row;
    & > .profile-top {
        //pos
        flex:1;
        display: grid;
        @media only screen and (max-width: 600px) {
            display: flex;
            & > .right {
                grid-column: 1/1;
                grid-row: 1;
                & > .avatarParent > div {
                    margin-left: auto;
                }
            }
            & > .left {
                grid-column: 1/1;
                grid-row: 2;
                display: grid;
            }
        }
        grid-gap: 10px;
        & > .right {
            // style
            box-shadow: 7px 7px 20px 0px rgba(  scale-color($background-color-lightest,$lightness:-40%),.4);
            border: solid 2px scale-color($background-color-black,$lightness:1.3%);
            border-radius: 8px;
            background: scale-color($background-color-lightest);
            padding: 2em;
            //pos
            display: flex;
            grid-column: 2;
            grid-row: 1;
            & .left {
                & > .abs {
                    position: absolute;
                    transform: translateY(-15px);
                }
                flex:1;
            }
        }
        & > .left {
            // style
            box-shadow: 7px 7px 20px 0px rgba(  scale-color($background-color-lightest,$lightness:-40%),.4);
            border: solid 2px scale-color($background-color-black,$lightness:1.3%);
            border-radius: 8px;
            background: scale-color($background-color-lightest);
            padding: 2em;
            //pos
            grid-column: 1;
            //display: grid;
            & > p {
                margin-top: 0;
                margin-bottom: 0;
                display: flex;
                text-align: left;
                align-items: flex-start;
                justify-content: left;
                & span{
                    margin-left:4px
                }
            }

        }
    }
}

</style>

<style lang="scss" >
.inline_HTML {
    & img {
        max-width: 100%;
    }

    // classes you can use in the inlined
    & .center {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: block;
    }
    & .underline {
        text-decoration: underline;
    }
    & .strike {
        text-decoration: line-through;
    }
}
</style>
