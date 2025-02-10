/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: process.env.GENERATE_ROBOTS_TXT === 'true',
    changefreq: 'weekly',
    priority: 1,
    sitemapSize: 5000,
    exclude: ['/404', '/admin', '/admin*'],
    generateIndexSitemap: false,
    additionalPaths: async (config) => [
        {
            loc: '/debate/democracy-system-analysis-usa',
            changefreq: 'monthly',
            priority: 0.8,
        },
    ],
}