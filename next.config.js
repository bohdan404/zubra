const withImage = require('next-images')

module.exports = withImage({
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });
   return  config
   
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }
    ],
    rules: [{
      test: /\.(png|jpe?g|gif|jp2|webp)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },],
  },
  images: {
    disableStaticImages: true,
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
    domains: ['amazonaws.com']
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|js)',
        // locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999',
          }
        ],
       
      },
    ]
  },
})
