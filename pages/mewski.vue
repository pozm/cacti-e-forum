<template>
    <div id="lol1" >
        <div id="girl1">
        </div>
        <div id="her1">

            <div >
                <h1>
                    Mewski likes loli
                </h1>
                <h3>
                    And catgirls
                </h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="scss">
@import 'assets/Variables';
#her1{
    position: fixed;
    border: solid 2px transparent;
    width: 23rem;
    max-height: 10em;
    min-height: 10rem;
    transform: translateX(-30%);
    background-color: rgba($--background-color-sec,.5);
    background-clip: padding-box;
    backdrop-filter: blur(20px);
    border-radius: 8px;

    left: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    box-shadow: 3px 8px 17px 1px #08090a61;
    & h1,h2,h3,h4,h5 {
        text-align: center;
    }
}
#lol1 {
    display: flex;
    flex-flow: row;
}
#girl1 {
    height: calc(100vh - 16px);
    background-image: url("~/assets/image/mewskibg.jpg");
    //background-repeat: round;
    background-clip: content-box;
    background-position: center;
    background-size: cover;
    width: 100%;
    filter:blur(4px);
}

.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
