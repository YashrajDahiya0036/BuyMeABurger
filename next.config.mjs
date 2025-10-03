/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
                // "https://avatars.githubusercontent.com/u/235892109?v=4"
            },
        ],
    }
};

export default nextConfig;
