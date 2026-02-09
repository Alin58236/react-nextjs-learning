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
        ],
    }
}

module.exports = nextConfig
