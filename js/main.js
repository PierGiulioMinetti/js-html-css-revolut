
$(document).ready(function() { 

// referenze
var dropLinks = $('.with-d-down > a');
var dropMenu = $('.with-d-down > .drop-down');

// visibilità
dropLinks.click(function() {
    
    var actualMenu = $(this).next('.drop-down');

    dropMenu.not(actualMenu).hide();

    // $(this).next('.drop-down').toggle();
    

    actualMenu.toggle();

})

 });