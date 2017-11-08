// Provide a "System" global.
module.exports = {
	// Make sure import is only used as "System.import"
	import: () => {
		throw new Error("System.import cannot be used indirectly");
	}
};
