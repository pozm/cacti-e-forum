<template>
    <div id="main">
        <div id="outer">
            <div id="topbar">
                <vs-button transparent to="/forum">
                    <svg data-src="https://s2.svgbox.net/materialui.svg?ic=push_pin" width="24" height="24" color="#ffffff" />
                    Forum
                </vs-button>
            </div>
            <div id="inner">
                <div id="Thread-name">
                    <h1>
                        {{ ThreadNamer }}
                    </h1>
                </div>
                <div id="content">
                    <nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" >

import Vue from 'vue'

export default Vue.extend({
    layout: 'forum',
    computed: {
        ThreadNamer () {
            return this.$store.state.states.ThreadName
        }
    }
})

</script>

<style lang="scss" >
.mu:not(.el-menu--collapse) {
    width: 200px;
}
@import 'assets/Variables';

#outer {
    margin: 5em 1em 1em;
    display: flex;
    flex-flow: column;
    //background: $--background-color-sec;
    //border-radius: 8px;
    #topbar {
        background: $--background-color-sec;
        border-radius: 8px;
        position: sticky;
        top:5px;
        box-shadow: 0px 10px 4px rgba($--background-color,238)
    }
    #inner {
        margin-top: 1rem;
        background: $--background-color-sec;
        border-radius: 8px;
        #Thread-name {
            margin: 2rem 1rem 1rem 1rem;
            border-radius: 8px;
            background: scale-color($--background-color-sec,$lightness:-10%);
            * {
                padding: 0px .5rem;
            }
        }
    }
}

</style>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
html {
    font-family: 'Poppins','Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

.title {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 55px;
    color: #35495e;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 25px 0;
}

.subtitle {
    font-weight: 300;
    font-size: 1.1rem;
    color: #526488;
    word-spacing: 2px;
    padding-bottom: 15px;
    max-width: 600px;
}

.subtitle a {
    font-weight: 500;
    color: inherit;
}

.links {
    padding-top: 15px;
    margin-bottom: 20px;
}

.content-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 500px;
}

.plus {
    font-size: 2.5rem;
    margin: 15px;
    color: #35495e;
}

.h3 {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    font-weight: 400;
    margin: 10px;
}
</style>
