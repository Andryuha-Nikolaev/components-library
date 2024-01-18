/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "specialgamesclub.ru",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
