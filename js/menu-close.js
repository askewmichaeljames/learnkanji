// JavaScript Document
$("#list_main_nav input[type='checkbox']").on('change', function () {
	$("#list_main_nav input[type='checkbox']").not(this).prop('checked', false);
});

$("#list_mobile_nav input[type='checkbox']").on('change', function () {
	$("#list_mobile_nav input[type='checkbox']").not(this).prop('checked', false);
});