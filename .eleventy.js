const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addShortcode('youtube', (id) => {
		return `<iframe class="yt-embed" src="https://www.youtube-nocookie.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
	});

	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('CNAME');
	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
		htmlTemplateEngine: 'njk',
	};
};
