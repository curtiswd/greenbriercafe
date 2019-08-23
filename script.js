$(document).ready(function () {
	

    $('#datepicker').datepicker({
        todayHighlight: 'true',
        todayBtn: 'linked',
        disableTouchKeyboard: 'True'

    });


    $('#datepicker').on('changeDate', function () {

        $('#datepicker').datepicker('hide');
        var date = new Date($('#datepicker').val());
        var newDay = date.getDate();
        var newMonth = date.getMonth();
        var newYear = date.getFullYear();
        var newTarget = 'https://apps.aurora.org/cafeteriamenu/calendar.do?method=menu&year=' + newYear + '&month=' + newMonth + '&date=' + newDay + '&location=6';
        console.log(newTarget);

        $('#menu').attr("src", newTarget);

    });
});
