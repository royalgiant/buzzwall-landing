/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  }
}

module.exports = nextConfig
