function getTemplate(templateName, callback) {
	require.ensure([], function(require) {
		callback(require("../require.context/templates/"+templateName)());
	});
}
getTemplate("a", function(a) {
	
});
getTemplate("b", function(b) {
	
});