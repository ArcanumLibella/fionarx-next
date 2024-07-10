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
    domains: ['fionarx-strapi-images.s3.eu-west-3.amazonaws.com']
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};
export default nextConfig;
