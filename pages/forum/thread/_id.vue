<template>
    <div>
        <h1>pozm has a big</h1>
    </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
    layout: 'forum',

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
