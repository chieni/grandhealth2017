(function() {

	$(document).on('click', '.appt-item', function(evt) {
		var item = $(this);
		var test_id = item.data('apptid');

		loadPage('apptView', {doctor_name: "Doctor Name", doctor_type: "type of doctor"})
		// Retrieve test information
	});


	$(document).on('click', '#appt-back', function(evt) {
		evt.preventDefault();
		$('body').css({'background': 'linear-gradient( rgba(217, 217, 217, 1), rgba(217, 217, 217, 1))'});
		$('body').css('background-size', 'cover');
		loadPage('appts');
	});


})();