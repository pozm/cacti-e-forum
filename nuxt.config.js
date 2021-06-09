const IsDev = process.env.NODE_ENV !== 'production'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'cacti',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { async: true, type: 'text/javascript', src: 'https://unpkg.com/external-svg-loader@latest/svg-loader.min.js' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // 'vuesax/dist/vuesax.css',
        '@/assets/main.scss',
        '@/assets/bootstrap.css',
        '@/node_modules/vuesax/dist/vuesax.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/vuesax',
        '@/plugins/ctxmenu',
        '@/plugins/axios-accessor.ts'
    ],
    server: {
        port: IsDev ? 3000 : 80,
        host: '0.0.0.0',
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/svg'
        // ['nuxt-purgecss',
        //     {
        //         whitelist: '@/node_modules/vuesax/dist/'
        //     }
        // ] can't get it not to break shit
        // https://go.nuxtjs.dev/stylelint
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios', // making requests.
        'nuxt-mq', // detecting what resolution > that being, tablet, desktop, mobile, etc.
        'portal-vue/nuxt' // useful for teleporting elements to other places in the dom. -> for example. with modals.
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            sass: {}
        }
    }
}
