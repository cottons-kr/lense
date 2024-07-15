/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  rewrites: async () => {
    return [
      {
        source: '/assets/:path*',
        destination: 'https://minio-m0wso0o.algorix.cloud/:path*',
      },
    ];
  },

};

export default nextConfig;
