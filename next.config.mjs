/** @type {import('next').NextConfig} */
const nextConfig = {
    // Mengaktifkan mode strict untuk seluruh aplikasi
    reactStrictMode: true,

    // Mengonfigurasi domain gambar eksternal yang diizinkan
    images: {
        domains: ['example.com', 'another-domain.com'],
    },

    // Menambahkan header keamanan
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ];
    },

    // Mengonfigurasi redirects
    async redirects() {
        return [
            {
                source: '/old-page',
                destination: '/new-page',
                permanent: true,
            },
        ];
    },

    // Mengonfigurasi rewrites
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.example.com/:path*',
            },
        ];
    },

    // Mengonfigurasi webpack
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Kustomisasi konfigurasi webpack di sini
        return config;
    },

    // Mengonfigurasi environment variables yang dapat diakses di browser
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },

    // Mengonfigurasi path build output
    distDir: 'build',

    // Mengaktifkan generasi halaman AMP
    amp: {
        canonicalBase: 'https://example.com',
    },

    // Mengonfigurasi lokalisasi
    i18n: {
        locales: ['en', 'fr', 'de'],
        defaultLocale: 'en',
    },

    // Mengaktifkan optimisasi gambar otomatis
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: ['example.com'],
        path: '/_next/image',
        loader: 'default',
    },

    // Mengonfigurasi penggunaan SWC untuk kompilasi yang lebih cepat
    swcMinify: true,

    // Mengonfigurasi penggunaan trailing slash di URL
    trailingSlash: false,
};

export default nextConfig;