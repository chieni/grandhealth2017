Handlebars.registerPartial('header', Handlebars.templates['header']);

var loadPage = function(template, data) {
	data = data || {};
	$('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
	$('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url("../images/table.jpg") no-repeat center center fixed'});
	$('body').css('background-size', 'cover');
	loadPage('index');
};

$(document).ready(function() {
	loadHomePage();
});

/*
This method will load the home-page when the home link is clicked
*/
$(document).on('click touchstart', '#home-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('patient');
});

$(document).on('click touchstart', '#sherpa-link', function(evt) {
	evt.preventDefault();
	// $('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url("../images/table.jpg") no-repeat center center fixed'});
	// $('body').css('background-size', 'cover');
	loadHomePage();
});


$(document).on('click touchstart', '#bc-btn', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('patient');
});

$(document).on('click touchstart', '#diag-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('diag');
});

$(document).on('click touchstart', '#diag-box', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('diag');
});

$(document).on('click touchstart', '#appts-box', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('appts');
});

$(document).on('click touchstart', '#appt-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('appts');
});

$(document).on('click touchstart', '#docs-box', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('docs');
});

$(document).on('click touchstart', '#doc-link', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
	$('body').css('background-size', 'cover');
	loadPage('docs');
});
