/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
    images: {
        domains: [
            "imgs.xkcd.com",
        ]
    }
};

export default nextConfig;
