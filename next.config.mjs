/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ortizpiano.com',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/piano.webp',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
