/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*` ||
          "http://localhost:8001/:path*",
      },
    ];
  },
};

export default nextConfig;
