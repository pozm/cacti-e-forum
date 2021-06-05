<template>
    <div class="ThreadReply">
        <div class="ThreadGrid">
            <div class="UserDat">
                <div>
                    <div class="avatarParent">
                        <avatar :url="reply.Author.Avatar" :size="128" />
                    </div>
                </div>
                <div class="belowAva">
                    <h2 class="usa">
                        {{ reply.Author.Username }}
                    </h2>
                </div>
            </div>
            <div class="ReplyDat">
                <p>
                    {{ reply.Content.slice(0,3500) }}
                </p>
            </div>
        </div>
        <div class="ReplyFooter">
            <div class="FooterLeft">
                <vs-button size="small">
                    <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=thumb-up" width="18" height="18" color="#ffffff" />
                    {{ reply.Likes }}
                </vs-button>
                <vs-button size="small" danger>
                    <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=thumb-down" width="18" height="18" color="#ffffff" />
                    {{ reply.Dislikes }}
                </vs-button>
            </div>
            <div class="FooterRight">
                <p class="ReplyTime">
                    {{ timeMade }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue, { PropType } from 'vue'
import '@/assets/user.scss'
import { forumData } from '~/types/_/forum'
export default Vue.extend({
    name: 'ThreadReply',
    props: {
        reply: {
            type: Object as PropType<forumData.Reply>,
            required: true
        }
    },
    computed: {
        timeMade () {
            return this.reply.TimeMade.toLocaleString(this.$nuxt.$isServer ? 'EN-GB' : window.navigator.language)
        }
    }
})

</script>

<style lang="scss" scoped>

    @import "assets/Var";
    .ThreadReply {
        background: scale-color($--background-color,$lightness:1%);
        min-height: 5em;
        border-radius: 8px;
        padding: 1em 2em;
        & > .ReplyFooter {
            display: flex;
            flex-flow: wrap;
            align-items: center;
            & > .FooterLeft {
                display: flex;
                flex-flow: wrap;
            }
            & > .FooterRight {
                margin-left: auto;
                align-items: center;
                & > p {
                    margin-top: 0;
                }
            }
        }
        & > .ThreadGrid {
            display: grid;
            & > .UserDat {
                grid-row: 1;
                grid-column: 1/3;

                border: solid 2px scale-color($--background-color,$lightness:1.7%);
                border-radius: 8px;
                padding:.6em;
                height: max-content;

                & .belowAva {
                    display: flex;
                    justify-content: center;
                    & > .usa {

                    }
                }
            }
            & > .ReplyDat {
                grid-row: 1;
                display: flex;
                justify-content: center;
                padding-left: 1em;
            }
        }
        &:not(:last-child) {
            margin-bottom: 2em;
        }
    }
</style>
