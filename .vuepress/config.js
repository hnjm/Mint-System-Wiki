
module.exports = {
    title: 'Knowledge Mint System',
    description: 'Knowledge Mint System',
    themeConfig: {
        sidebar: 'auto'
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        'vuepress-plugin-mermaidjs',
        'plausible-analytics',
        '@vuepress/back-to-top',
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://knowledge.mint-system.ch/'
            }
        ]
    ]
}
