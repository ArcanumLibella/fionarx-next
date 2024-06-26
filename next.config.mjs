/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // options here, if needed
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['127.0.0.1'], /* FIXME: A changer en prod */
  },
};
export default nextConfig;
