(function() {

	$(document).on('click', '.diag-item', function(evt) {
		var item = $(this);
		var test_id = item.data('testid');

		loadPage('testView', {test_name: "Test Name", test_expl: "Explanation", test_id: 1})
		// Retrieve test information
	});

	$(document).on('click', '.diag-help-btn', function(evt) {
		var item = $(this);
		var test_id = item.data('testid');

		loadPage('testHelpView', {test_name: "Test Name", test_expl: "Explanation", test_id: 1})
		// Retrieve test information
	});

	$(document).on('click', '#diag-back', function(evt) {
		evt.preventDefault();
		$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
		$('body').css('background-size', 'cover');
		loadPage('patient');
	});


	$(document).on('click', '#test-back', function(evt) {
		evt.preventDefault();
		$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
		$('body').css('background-size', 'cover');
		loadPage('diag');
	});


})();