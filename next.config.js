/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'sub.stagingaja.com',
            },
        ],
    },
}

module.exports = nextConfig
