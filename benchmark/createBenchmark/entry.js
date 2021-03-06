const webpack = require("webpack");
const MemoryFs = require("memory-fs");
const path = require("path");

const testCase = process.argv[2];

const config = {
	context: __dirname,
	entry: `./${testCase}`,
	output: {
		path: path.resolve(__dirname, "output-" + testCase)
	},
	devtool: process.argv[3]
};

const compiler = webpack(config);
compiler.run((err, stats) => {
	if(err) {
		console.error(err);
	} else {
		
	}
});
