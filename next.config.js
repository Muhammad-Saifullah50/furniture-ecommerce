/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3-alpha-sig.figma.com',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
          },
        ],
      },
}

module.exports = nextConfig
