/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.hizliresim.com'
            },
            {
                protocol: 'https',
                hostname: 'ozgungraphic.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io'
            }
        ]
    }
}
