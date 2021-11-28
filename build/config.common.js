const path = require("path");
const root = process.cwd();
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const postCssNesting = require('postcss-nesting');

module.exports = {
  bundle: true,
  entryPoints: [path.resolve(root, "./src/index.js")],
  outfile: path.resolve(root, "./dist/index.js"),
  loader: {
    ".js": "jsx",
    ".svg": "dataurl",
    ".png": "dataurl",
		".jpg": "dataurl",
  },
	plugins: [
		postCssPlugin({
			plugins: [postCssNesting],
		}),
	],
  define: { global: "window" },
};
