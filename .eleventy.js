const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const pluginSEO = require('eleventy-plugin-seo');
const path = require('path');
const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt) {
	if (alt === undefined) {
		// You bet we throw an error on missing alt (alt="" works okay)
		throw new Error(`Missing \`alt\` on myImage from: ${src}`);
	}

	try {
		let imgSrc = src;
		let outputDir = './src/img';

		// handle same folder images, append the input path to make the path relative
		// to project folder as 11ty requires it
		if (!imgSrc.startsWith('.')) {
			const inputPath = this.page.inputPath;
			const pathParts = inputPath.split('/');
			pathParts.pop();
			imgSrc = pathParts.join('/') + '/' + src;
		}

		let metadata = await Image(imgSrc, {
			widths: [800],
			formats: ['jpeg'],
			outputDir,
		});

		let data = metadata.jpeg[metadata.jpeg.length - 1];

		return `<img src="${data.url}" alt="${alt}" loading="lazy" decoding="async">`;
	} catch (err) {
		return;
	}
}

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addShortcode('youtube', (id) => {
		return `<iframe class="yt-embed" src="https://www.youtube-nocookie.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
	});

	eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
	eleventyConfig.addLiquidShortcode('image', imageShortcode);
	eleventyConfig.addJavaScriptFunction('image', imageShortcode);

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
		image: '/assets/android-icon-192x192.png',
		options: {
			titleDivider: '|',
			imageWithBaseUrl: true,
			twitterCardType: 'summary_large_image',
			showPageNumbers: false,
		},
	});

	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/public');
	eleventyConfig.addPassthroughCopy('src/img');

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
		htmlTemplateEngine: 'njk',
	};
};
