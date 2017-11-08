onmessage = function(event) {
	let template = event.data;
	require(["../require.context/templates/" + event.data], function(tmpl) {
		postMessage(tmpl());
	});
}
