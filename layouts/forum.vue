<template>
    <div id="main">
        <div id="outer">
            <div id="topbar">
                <div id="Thread-name">
                    <h1>
                        {{ ThreadNamer }}
                    </h1>
                </div>
                <div id="naver">
                    <vs-button transparent to="/forum">
                        <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=folder" width="24" height="24" color="#ffffff" />
                        home
                    </vs-button>
                </div>
            </div>
            <div id="inner">
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
        background: rgba($--background-color-sec,1);
        border-radius: 8px;
        position: sticky;
        top:5px;
        z-index: 4324234;
        box-shadow: 0px 3px 6px 12px $--background-color;

        //backdrop-filter: blur(40px);
        //border: solid 3px transparent;

        & > #Thread-name {
            margin: 1rem .5rem .5rem .5rem;
            border-radius: 8px;
            * {
                padding: 0px .5rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        &:hover {
            #naver {
                transition: opacity .5s,transform .5s;
                transform: translateY(-6px);
                opacity: 1;
            }

        }
        & > #naver {
            transition: opacity .5s,transform .5s;
            opacity: 0;
            position: absolute;
            transform: translateY(-44px);
            background: linear-gradient(0deg, mix($--color-primary,$--background-color-sec,2) 0%, $--background-color-sec 100%);
            width: calc(100% - .5rem);
            box-shadow: 0px 10px 4px rgba($--background-color,238);
            padding-left: .5rem;
            //backdrop-filter: blur(40px);

            border-radius: 0 0 8px 8px;
        }
    }

    #inner {
        margin-top: 1rem;
        background: $--background-color-sec;
        border-radius: 8px;
        min-height: 100vh;
        z-index: 10;
        & > #content {
            margin: 3em 2em 2em;
            border-radius: 8px;
            min-height: inherit;
            padding:2em
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
