
function currentSlide( current ) {
    $(".current_slide").text(current + " of " + $("#slides, #slides2").slides("status","total") );
}

$(function(){
    /*
     Initialize SlidesJS
     */
    $("#slides, #slides2").slides({
        navigateEnd: function( current ) {
            currentSlide( current );
        },
        loaded: function(){
            currentSlide( 1 );
        }
    });

    /*
     Play/stop button
     */
    $(".controls").click(function(e) {
        e.preventDefault();

        // Example status method usage
        var slidesStatus = $("#slides, #slides2").slides("status","state");

        if (!slidesStatus || slidesStatus === "stopped") {

            // Example play method usage
            $("#slides, #slides2").slides("play");

            // Change text
            $(this).text("Stop");
        } else {

            // Example stop method usage
            $("#slides, #slides2").slides("stop");

            // Change text
            $(this).text("Play");
        }
    });
});
