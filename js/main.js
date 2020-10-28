
$(document).ready(function() { 

// referenze
var dropLinks = $('.with-d-down > a');
var dropMenu = $('.with-d-down > .drop-down');

// visibilità
dropLinks.click(function() {
    $(this).next('.drop-down').toggle();
})

 });