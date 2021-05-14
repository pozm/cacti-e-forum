<template>
    <div id="main" style="display: flex; flex-flow: row">
        <SideBar />
        <div id="content">
            <nuxt />
        </div>
    </div>
</template>

<style>
.mu:not(.el-menu--collapse) {
    width: 200px;
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
