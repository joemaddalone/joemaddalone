const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

async function imageShortcode(src, alt, sizes, pageURL) {
	const imgPath = pageURL ? pageURL : "img";
	const metadata = await Image(src, {
		widths: [640, 768],
		formats: ["jpeg"],
		urlPath: ".",
		outputDir: "dist/" + imgPath,
		filenameFormat: function (id, src, width, format, options) {
			const extension = path.extname(src);
			const name = path.basename(src, extension);
			return `${name}-${width}w.${format}`;
		},
	});
	const imageAttributes = {
		alt,
		sizes,
		loading: "lazy",
		decoding: "async",
	};
	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addShortcode('youtube', (id) => {
		return `<iframe class="yt-embed" src="https://www.youtube-nocookie.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
	});

	eleventyConfig.addShortcode('image', imageShortcode);
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/public');
	eleventyConfig.addPassthroughCopy("src/content/*/*.jpg");

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

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
		htmlTemplateEngine: 'njk',
	};
};
