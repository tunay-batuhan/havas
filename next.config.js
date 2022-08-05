/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "teknasyon-mailling.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
