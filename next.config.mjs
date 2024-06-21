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
};
export default nextConfig;
