Handlebars.registerPartial('header', Handlebars.templates['header']);

var loadPage = function(template, data) {
	data = data || {};
	$('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
	loadPage('index');
};

$(document).ready(function() {
	loadHomePage();
});

/*
This method will load the home-page when the home link is clicked
*/
$(document).on('click', '#home-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('patient');
});

$(document).on('click', '#sherpa-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url("../images/table.jpg") no-repeat center center fixed'});
	$('body').css('background-size', 'cover');
	loadHomePage();
});


$(document).on('click', '#bc-btn', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('patient');
});

$(document).on('click', '#diag-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('diag');
});

$(document).on('click', '#diag-box', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('diag');
});

$(document).on('click', '#appts-box', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('appts');
});

$(document).on('click', '#appt-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('appts');
});

$(document).on('click', '#docs-box', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('docs');
});

$(document).on('click', '#doc-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('docs');
});
