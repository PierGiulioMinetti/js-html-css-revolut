
$(document).ready(function() { 

// referenze
var aProdotti = $('.prodotti-class > a');
var dropProdotti = $('.prodotti-class > .drop-down');

var aAzienda = $('.li-drop-azienda > a');
var dropAzienda = $('.li-drop-azienda > azienda-drop-down');

// eventi
aProdotti.click(function()  {
    console.log('stai cliccando su prodotti');

    $(this).next('.drop-down').toggle();
});

aAzienda.click(function() {
    console.log('stai cliccando su azienda');

    var actualAzienda = $(this).next('.azienda-drop-down');

    dropAzienda.not(actualAzienda).hide();

    actualAzienda.toggle();

    // $(this).next('.azienda-drop-down').toggle();
});




 });