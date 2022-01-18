const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const pluginSEO = require('eleventy-plugin-seo');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addShortcode('youtube', (id) => {
		return `<iframe class="yt-embed" src="https://www.youtube-nocookie.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
	});

	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/public');

	eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
		if (outputPath.endsWith('.html')) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});

	eleventyConfig.addCollection('published', function (collectionApi) {
		const now = new Date();
		return collectionApi.getFilteredByTag('posts').filter((post) => !post.data.tags.includes('draft'));
	});

	eleventyConfig.addPlugin(pluginSEO, {
		title: 'joe talks too much',
		description: 'Joe Maddalone writes about nerdy stuff.  sometimes.',
		url: 'https://joemaddalone.com',
		author: 'Joe Maddalone',
		twitter: 'joemaddalone',
		image: "/assets/android-icon-192x192.png",
		options: {
			titleDivider: '|',
			imageWithBaseUrl: true,
			twitterCardType: 'summary_large_image',
			showPageNumbers: false,
		},
	});

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
		htmlTemplateEngine: 'njk',
	};
};
