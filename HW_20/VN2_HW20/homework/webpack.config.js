const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/index.js',
        main: './src/styles/main.scss',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    target: ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins : ['@babel/plugin-transform-arrow-functions']
                    },
                },
            },
            {
                test: /\.(png|svg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new PrettierPlugin({
            'arrowParens': 'always',
            'bracketSameLine': false,
            'bracketSpacing': true,
            'embeddedLanguageFormatting': 'auto',
            'htmlWhitespaceSensitivity': 'css',
            'insertPragma': false,
            'jsxSingleQuote': true,
            'printWidth': 80,
            'proseWrap': 'preserve',
            'quoteProps': 'as-needed',
            'requirePragma': false,
            'semi': true,
            'singleQuote': true,
            'tabWidth': 2,
            'trailingComma': 'es5',
            'useTabs': false,
            'vueIndentScriptAndStyle': false
        }),
    ]
}