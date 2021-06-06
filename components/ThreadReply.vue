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
                        <avatar :url="reply.Author.Avatar" :size="128" />
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
                        Joined {{ timeMadeAuth }}
                    </p>
                    <p class="usa2">
                        Reputation <span style="margin: 0" :class="{rep:true,[reply.Author.Reputation > -1 ? 'good':'bad']:true}">
                            {{ reply.Author.Reputation }}
                        </span>
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
import '@/assets/user.scss'
import { forumData } from '~/types/_/forum'
import { Badge } from '~/assets/Badge'
import { ThreadReplyOptionsctx, uuidv4 } from '~/assets/Functions'
import { userData } from '~/types'

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

    @import "assets/Var";
    .ThreadReply {
        background: scale-color($--background-color,$lightness:1%);
        z-index: 20;
        min-height: 5em;
        border-radius: 8px;
        padding: 1em 2em;
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
                & > .Avapp {
                    display: flex;
                    justify-content: center;
                }
                & .belowAva {
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
                        //color:#67717F;
                        display: ruby; // i have no clue what this is; but it works.
                    }
                    & > .badgeSector {
                        display: flex;
                        flex-flow:wrap;
                        justify-content: center;
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
