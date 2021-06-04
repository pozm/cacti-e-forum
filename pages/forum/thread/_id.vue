<template>
    <div class="container">
        <div />
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
