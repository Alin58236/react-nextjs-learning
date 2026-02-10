/** @type {import('next').NextConfig} */
const nextConfig = {
    images: /**{
        domains: ['bytegrad.com'],
    },*/
    {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bytegrad.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    }
}

module.exports = nextConfig
