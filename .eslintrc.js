module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: { // by default eslint rules are dog shit
        indent: ['warn', 4],
        'vue/html-indent': ['off', 4],
        'vue/multiline-html-element-content-newline': ['off'],
        'semi': ['off'],
        'quotes': ['off'],
        'quote-props': ['off'],
        ['no-dupe-keys']: ['off'],
        'vue/require-prop-types': ['off'],
        'space-before-function-paren': ['off'],
        'no-console': ['off'],
        'comma-dangle': ['off'],
        'vue/html-self-closing': ['off'],
        'vue/html-closing-bracket-spacing': ['off'],
        'vue/html-self-closing': ['off'],
        'vue/order-in-components': ['off'],
        'no-lone-blocks': ['off'],
        'require-await': ['off'],
        'import/no-mutable-exports': ['off'],
        'no-useless-computed-key': ['off'],
        curly: ['off']
    }

}
