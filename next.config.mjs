/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos"
            },
            {
                hostname: "images.unsplash.com"
            }
        ]
    }
};

export default nextConfig;
