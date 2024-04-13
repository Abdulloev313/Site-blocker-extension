/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          `${process.env.SERVER_URL}/:path*` || "http://localhost:8001/:path*",
      },
    ];
  },
};
console.log(nextConfig.rewrites());
export default nextConfig;
