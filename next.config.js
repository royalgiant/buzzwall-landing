/** @type {import('next').NextConfig} */
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  env: {
    STARTER_PRICE: isProduction ? process.env.STARTER_PRICE_PROD : process.env.STARTER_PRICE_TEST,
    LAUNCH_PRICE: isProduction ? process.env.LAUNCH_PRICE_PROD : process.env.LAUNCH_PRICE_TEST,
    GROW_PRICE: isProduction ? process.env.GROW_PRICE_PROD : process.env.GROW_PRICE_TEST,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  }
}

module.exports = nextConfig
