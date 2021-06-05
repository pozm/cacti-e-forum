<template>
    <div>
        <thread-reply :reply="testr" />
        <thread-reply :reply="testr" />
    </div>
</template>
<script lang="ts" >
import Vue from 'vue'
import { forumData } from '~/types/_/forum'

export default Vue.extend({
    layout: 'forum',
    data: () => {
        // test data
        const Author = {
            Avatar: 'https://cdn.discordapp.com/avatars/288062966803333120/c2ab313b26e940ac262a61ae961ae704.webp?size=2048',
            RankId: 1,
            Password: '',
            Ips: [],
            CreatedAt: new Date(),
            LastLogin: new Date(),
            Username: 'Pozm'
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
            Content: 'The quick brown fox jumps over the lazy dog'.repeat(77)
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
