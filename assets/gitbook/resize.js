$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.height() >= 820)  { $( ".book" ).addClass("with-summary") }
    if (win.width() >= 1280) { $( ".book" ).removeClass("with-summary"); }
});