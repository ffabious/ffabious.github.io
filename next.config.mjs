/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        domains: [
            "imgs.xkcd.com",
        ],
        path: "/",
    }
};

export default nextConfig;
