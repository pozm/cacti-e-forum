<template>
    <div>
        <thread-reply :reply="testr" />
        <thread-reply :reply="testr" />
    </div>
</template>
<script lang="ts" >
import Vue from 'vue'
import { forumData } from '~/types/_/forum'
import { userData } from '~/types'

export default Vue.extend({
    layout: 'forum',
    data: () => {
        // test data
        const Rank:userData.Rank = {
            RankId: 1,
            RankName: 'sex',
            RankPermissions: 0xFFFF
        }
        const Author: userData.User = {
            Avatar: 'https://cdn.discordapp.com/avatars/288062966803333120/c2ab313b26e940ac262a61ae961ae704.webp?size=2048',
            RankId: 1,
            Password: '',
            Ips: [],
            CreatedAt: new Date(),
            LastLogin: new Date(),
            Username: 'Pozm',
            Reputation: 525,
            Rank,
            Badge: 0b00000 | userData.Badges.GAMER
        }
        const testt: forumData.Thread = {
            ThreadId: 1,
            ThreadName: 'pozm is soooooooooooo epic',
            AuthorId: 1,
            TetherId: 1,
            Author
        }
        const testr : forumData.Reply = {
            Author,
            ThreadId: 1,
            AuthorId: 1,
            Dislikes: 1,
            Likes: 2,
            QuoteId: undefined,
            ReplyId: 1,
            TimeMade: new Date(),
            Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.repeat(77)
        }
        return { testt, testr }
    },

    fetch (ctx) {
        const id = ctx.params.id
        const valid = id === 'test' // actually add logic l8r
        if (!valid)
            ctx.error({
                statusCode: 404,
                message: 'Thread not found'
            })
    }

})

</script>
