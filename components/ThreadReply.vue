<template>
    <div class="ThreadReply">
        <div class="UserDat">
            <div>
                <div class="avatarParent">
                    <avatar  :url="reply.Author.Avatar" :size="128" />
                </div>
            </div>
            <div class="belowAva">
                <h2 class="usa" >
                    {{reply.Author.Username}}
                </h2>
            </div>
        </div>
        <div class="ReplyDat">
            <p>
                {{ reply.Content }}
            </p>
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
            default: () => ({}),
            required: true
        }
    },
    data: () => ({ loaded: false }),
    watch: {
        url () {
            this.loaded = false
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
        display: grid;
        padding: 1em 2em;
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
        &:not(:last-child) {
            margin-bottom: 2em;
        }
    }
</style>
