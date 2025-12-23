const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addPassthroughCopy('icons')

    eleventyConfig.addCollection('slashpages', function(collection) {
        return collection.getFilteredByGlob('pages/**/*.md')
            .sort((a,b) => (a.data.title > b.data.title) ? 1 : ((b.data.title > a.data.title) ? -1 : 0));
    })

    eleventyConfig.addFilter('objectDebug', function(value) {
        // usage {{ myObject | objectDebug | safe }}
        return `<pre>${JSON.stringify(value, '', 2)}</pre>`
    })

    eleventyConfig.addFilter('domainOnly', function(url) {
        return new URL(url).hostname
    })
}