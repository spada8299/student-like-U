'use strict';

$(document).ready(function() {
	$.getJSON('json/email_address.json', function(data) {
		console.log(data);
	});
});