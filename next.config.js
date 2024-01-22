/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    output: "standalone",
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
