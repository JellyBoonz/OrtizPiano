/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['framer-motion'],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    images: {
        domains: ['ortizpiano.com'],
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
