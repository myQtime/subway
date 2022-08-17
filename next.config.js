const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    entry: './pages/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
            '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
            '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
        }
    },
}
