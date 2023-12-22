/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
