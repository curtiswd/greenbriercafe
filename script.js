$(document).ready(function () {
	
	$('#update').on('click', function () {

        var date = new Date($('#datepicker').val());
        var newDay = date.getDate();
        var newMonth = date.getMonth();
        var newYear = date.getFullYear();
        var newTarget = 'https://apps.aurora.org/cafeteriamenu/calendar.do?method=menu&year=' + newYear + '&month=' + newMonth + '&date=' + newDay + '&location=6';
        console.log(newTarget);

        $('#menu').attr("src", newTarget);
        // $('#menu').attr('src', $('#menu').attr('src'));
    });

    $('#datepicker').datepicker({
        todayHighlight: 'true'

    });
});
