/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "out",
    reactStrictMode: true,
    images: {
        domains: [
            "imgs.xkcd.com",
        ],
        path: "/",
    }
};

export default nextConfig;
