const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const isProd = process.env.VERCEL_ENV === 'production';

const nextConfig = {
  images: {
    qualities: [80],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mzamovillagehomestead.co.za' }],
        destination: 'https://www.mzamovillagehomestead.co.za/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          { key: 'X-Robots-Tag', value: isProd ? 'index, follow' : 'noindex, nofollow' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors https://www.rollingrover.co.za https://rollingrover.co.za;",
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);