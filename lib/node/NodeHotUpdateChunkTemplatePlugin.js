/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const ConcatSource = require("webpack-sources").ConcatSource;

class NodeHotUpdateChunkTemplatePlugin {

	apply(hotUpdateChunkTemplate) {
		hotUpdateChunkTemplate.plugin("render", (modulesSource, modules, removedModules, hash, id) => {
			const source = new ConcatSource();
			source.add("exports.id = " + JSON.stringify(id) + ";\nexports.modules = ");
			source.add(modulesSource);
			source.add(";");
			return source;
		});
		hotUpdateChunkTemplate.plugin("hash", function(hash) {
			hash.update("NodeHotUpdateChunkTemplatePlugin");
			hash.update("3");
			hash.update(String(this.outputOptions.hotUpdateFunction));
			hash.update(String(this.outputOptions.library));
		});
	}
}
module.exports = NodeHotUpdateChunkTemplatePlugin;
