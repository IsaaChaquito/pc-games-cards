/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/sounds/[name].[ext]',
      },
    });
    return config
  }
}
