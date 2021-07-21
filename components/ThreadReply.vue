<template>
    <div class="ThreadReply">

        <div v-if="reply.Author.RankId ===1" class="ThreadUpper">
            <div>
                <vs-button transparent circle icon @click.prevent.stop="OnCtxMen($event)" @contextmenu.prevent="OnCtxMen($event)" >
                    <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=dots-vertical" width="24" height="24" color="#ffffff" />
                </vs-button>
            </div>
        </div>
        <div class="ThreadGrid">
            <div class="UserDat">
                <div class="Avapp">
                    <div class="avatarParent">
                        <nuxt-link :to="'/forum/user/'+reply.Author.UserId" >
                            <avatar :url="reply.Author.Avatar" :size="128" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="belowAva">
                    <h2 class="usa">
                        {{ reply.Author.Username }}
                    </h2>
                    <h3 :class="{usa2:true,Rank:true,['r'+reply.Author.RankId]:true}">
                        {{ reply.Author.Rank.RankName }}
                    </h3>
                    <p class="usa2">
                        <vs-tooltip>
                            <svg data-src="https://s2.svgbox.net/materialui.svg?ic=date_range" width="20" height="20" color="#ffffff"></svg>
                            <template #tooltip>
                                Creation date of this user
                            </template>
                        </vs-tooltip>
                        <span>Joined {{ timeMadeAuth }}</span>
                    </p>
                    <p class="usa2">
                        <vs-tooltip>
                            <template #tooltip>
                                Reputation of this user, higher means better.
                            </template>
                            <svg data-src="https://s2.svgbox.net/hero-outline.svg?ic=emoji-happy" width="18" height="18" color="#fff"></svg>
                        </vs-tooltip>
                        <span>Reputation <span style="margin: 0" :class="{rep:true,[reply.Author.Reputation > -1 ? 'good':'bad']:true}">
                            {{ reply.Author.Reputation }}
                        </span></span>
                    </p>
                    <div class="badgeSector">
                        <div v-for="badge in getBadges" :key="badge+uuidv4">
                            <vs-tooltip>
                                <template #tooltip>
                                    {{ badge2name(badge) }}
                                </template>
                                <svg :data-src="badge2ico(badge)" width="32" height="32" color="#ffffff" />
                            </vs-tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ReplyDat">
                <div class="inline_HTML" v-html="Content" />
            </div>
        </div>
        <div class="ReplyFooter">
            <div class="FooterLeft">
                <vs-button size="small" success style="color:#000000" >
                    <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=thumb-up" width="18" height="18" color="#000000" />
                    {{ reply.Likes }}
                </vs-button>
                <vs-button size="small" danger>
                    <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=thumb-down" width="18" height="18" color="#ffffff" />
                    {{ reply.Dislikes }}
                </vs-button>
            </div>
            <div class="FooterRight">
                <p class="ReplyTime">
                    <vs-tooltip>
                        <template #tooltip>
                            Date made
                        </template>
                        <svg data-src="https://s2.svgbox.net/materialui.svg?ic=date_range" width="20" height="20" color="#ffffff"></svg>
                    </vs-tooltip>
                    {{ timeMade }}
                </p>
            </div>
        </div>
        <vue-simple-context-menu
            ref="ctxmen"
            :element-id="reply.ReplyId+uuidv4"
            :options="getCtxOpts"
            @option-clicked="ctxClick"
        />
    </div>
</template>

<script lang="ts">

import Vue, { PropType } from 'vue'
import '~/assets/styling/user.scss'
import sanitize from "sanitize-html";
import { forumData } from '~/types/_/forum'
import { Badge } from '~/assets/Badge'
import { SanOpts, ThreadReplyOptionsctx, uuidv4 } from '~/assets/Functions'
import { userData } from '~/types'
export default Vue.extend({
    name: 'ThreadReply',
    data: () => ({ primaryColor: '255, 25, 25' }),
    props: {
        reply: {
            type: Object as PropType<forumData.Reply>,
            required: true
        }
    },
    computed: {
        Content () {
            return sanitize(this.reply.Content, SanOpts)
        },
        timeMade () {
            return this.reply.TimeMade.toLocaleString(this.$nuxt.$isServer ? 'EN-GB' : window.navigator.language)
        },
        timeMadeAuth () {
            return this.reply.Author.CreatedAt.toLocaleDateString(this.$nuxt.$isServer ? 'EN-GB' : window.navigator.language, {
                month: 'short',
                year: 'numeric'
            })
        },
        getBadges () {
            const b = Badge.has(this.reply.Author.Badge)
            return b
        },
        uuidv4,
        getCtxOpts: () => ([...ThreadReplyOptionsctx])
    },
    methods: {
        badge2ico (bad: userData.Badges) {
            switch (bad) {
            case userData.Badges.bang: {
                return 'https://s2.svgbox.net/hero-outline.svg?ic=currency-bangladeshi'
            }
            case userData.Badges.oka: {
                return 'https://s2.svgbox.net/hero-solid.svg?ic=sparkles'
            }
            case userData.Badges.liked: {
                return 'https://s2.svgbox.net/hero-solid.svg?ic=thumb-up'
            }
            }
        },
        badge2name (bad:userData.Badges) {
            return userData.Badges[bad].toString()
        },
        ctxClick: () => {
            // do stuff
        },
        OnCtxMen(_: any, item: any) {
            (this.$refs.ctxmen as any).showMenu(event, item);
        },

    }
})

</script>

<style lang="scss" scoped>

    @import "assets/styling/Var";
    .ThreadReply {
        background: scale-color($background-color-lightest);
        z-index: 20;
        min-height: 5em;
        border-radius: 8px;
        padding: 1em 2em;
        box-shadow: 7px 7px 20px 0px rgba(  scale-color($background-color-lightest,$lightness:-40%),.4);
        border: solid 2px scale-color($background-color-black,$lightness:1.3%);
        & > .ThreadUpper {
            display: flex;
            flex-flow: row-reverse;
            align-items: center;
            & svg {
                margin: 0;
            }

        }
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
                    display: flex;
                    flex-flow: wrap;
                    margin-top: 0;
                }
            }
        }
        & > .ThreadGrid {
            display: flex;
            flex-flow: row;
            & > .UserDat {
                //grid-row: 1;
                //grid-column: -50;
                background: $background-color-lightest;
                box-shadow: 7px 7px 20px 0px rgba(  scale-color($background-color-lightest,$lightness:-40%),.4);

                border: solid 2px scale-color($background-color-black,$lightness:1.3%);
                border-radius: 8px;
                padding:.6em;
                height: max-content;
                & > .Avapp {
                    display: flex;
                    justify-content: center;
                }
                & .belowAva {
                    & svg {
                        display: flex;
                        flex-flow: wrap;
                    }
                    display: flex;
                    justify-content: center;
                    flex-flow: column;
                    text-align: center;
                    & > .usa {
                        margin-bottom: 0;
                    }
                    & > .usa2 {
                        margin-top: 0;
                        margin-bottom: 0;
                        display: flex;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        & :not(:first-child) {
                            margin-left: 4px;
                        }
                    }
                    & > .badgeSector {
                        display: flex;
                        flex-flow:wrap;
                        justify-content: center;
                    }
                }
            }
            & > .ReplyDat {
                flex:auto;
                display: flex;
                justify-content: center;
                padding-left: 1em;
                & > .inline_HTML {
                    width:100%;
                }
            }
        }
        &:not(:last-child) {
            margin-bottom: 2em;
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
