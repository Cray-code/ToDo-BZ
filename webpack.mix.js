const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

const path = require('path');
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            { "loose": true, "useBuiltIns": true }
                        ],
                        [
                            "@babel/plugin-proposal-object-rest-spread"                            
                        ]
                    ],
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
            }
        ]
    },

    resolve: {
        alias: {
            '@actions': path.resolve(__dirname, 'resources', 'js', 'store', 'actions'),
            '@middlewares': path.resolve(__dirname, 'resources', 'js', 'store', 'middleware'),
            '@store': path.resolve(__dirname, 'resources', 'js', 'store'),
            '@route': path.resolve(__dirname, 'resources', 'js', 'route'),
            '@root': path.resolve(__dirname, 'resources', 'js'),
            '@loggedIn': path.resolve(__dirname, 'resources', 'js', 'components', 'loggedIn'),
            '@loggedOut': path.resolve(__dirname, 'resources', 'js', 'components', 'loggedOut'),
            '@common': path.resolve(__dirname, 'resources', 'js','common'),
            '@logged_in': path.resolve(__dirname, 'resources', 'js', 'components', 'loggedIn'),
            '@logged_out': path.resolve(__dirname, 'resources', 'js', 'components', 'loggedOut'),
            '@shared': path.resolve(__dirname, 'resources', 'js','common'),
            '@constants': path.resolve(__dirname, 'resources', 'js','common', 'constants'),
        }
    },
});

