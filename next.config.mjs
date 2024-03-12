/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qirnxlznpdcakagqhxls.supabase.co",
      },
    ],
  },
};

export default nextConfig;
