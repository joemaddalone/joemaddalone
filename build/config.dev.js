const config = require("./config.common");


const onLoadPlugin = {
	name: 'onload',
	setup(build) {
		build.onLoad({ filter: /\.css$/ }, (args) => {
			console.log('args', args);
      return {
				watchFiles: ['/\.css$/']
			};
    });
	}
};


module.exports = Object.assign(config, {
  watch: {
    onRebuild(error) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded.");
    },
  },
  define: Object.assign(config.define, {
    "process.env.NODE_ENV": `"development"`,
  }),
	plugins: [...config.plugins, onLoadPlugin]
});
