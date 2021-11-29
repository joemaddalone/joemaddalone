const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	return {
		dir: {
			input: 'src/writes',
			output: 'dist/writes',
		},
		htmlTemplateEngine: 'njk',
	};
};
