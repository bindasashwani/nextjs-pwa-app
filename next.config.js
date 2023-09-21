const withPwa = require("next-pwa")({
  dest: "public",
  register: true
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPwa(nextConfig);
