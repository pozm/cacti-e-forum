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
import { stateStore } from '~/store'

export default Vue.extend({
    layout: 'forum',
    data: () => {
        // test data
        let testr : forumData.Reply = {} as forumData.Reply;
        const Author: userData.User = {
            Avatar: 'https://cdn.discordapp.com/avatars/288062966803333120/ddea4f78c9b322192e77a206ef7f6099.webp?size=2048',
            Rank: userData.Rank.Sex,
            Id: 1,
            Password: '',
            Ips: [],
            CreatedAt: new Date(),
            LastLogin: new Date(),
            Username: 'Pozm',
            Reputation: 525,
            Badge: 0b00000 | userData.Badges.bang | userData.Badges.liked | userData.Badges.oka,
            Bio: "yes"
        }
        const testt: forumData.Thread = {
            Id: 1,
            Name: 'Cacti is obviously better than v3rm',
            AuthorId: 1,
            ReplyId: 1,
            Reply: testr,
            Author
        }
        testr = {
            Author,
            ThreadId: 1,
            AuthorId: 1,
            Dislikes: 1,
            Likes: 2,
            QuoteId: undefined,
            Quotes: [],
            Id: 1,
            Thread: testt,
            TimeMade: new Date(),
            Content: "<h1>Cacti forum</h1><h3>Is obviously winning</h3><p>Because stuff like v3rm is <span class='strike' >dogshit</span></p><br><h2 class='center'>Okay, but fr? </h2><img class='center' src='https://cdn.discordapp.com/icons/799393776119971860/4896ae78a692bb5359116fa481fd9488.webp?size=1024' /><p><b>#cacti winning</b></p>"
        }
        return { testt, testr }
    },
    mounted() {
        console.log(stateStore)
        stateStore.UpdateThread(this.testt.Name)
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
