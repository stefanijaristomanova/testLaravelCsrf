let mix = require('laravel-mix');
const resolve = require("path").resolve;

const jspath = resolve(__dirname, "resources/js");


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    resolve: {
    },
    plugins: [
    ],
})
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps(false)
    .vue();


if (mix.inProduction() || process.env.npm_lifecycle_event !== "test") {
    mix.version();
}



