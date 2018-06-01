
$(document).ready(function(){
    console.log('pausing animation');
    $(".skills").css("animation-play-state", "paused");
    $(changeback);
    $('#carousel').slick({
        accessibility: true,
        adaptiveHeight: true,
        dots:true,
        lazyload:'progressive'
    });
    console.log('slick initialized');
});


function changeback(){
    $('#carousel').on('afterChange', function(event, slick, currentSlide){
        var slide = currentSlide;
        if (slide === 0){
            console.log(slide);
            $('html').css({'background': "url('../newwebsite/images/blueseaback.png') repeat"});
        } else if (slide === 1){
            console.log(slide);
            $('html').css({'background': "url('../newwebsite/images/greenseaback.png') repeat"});
        } else if (slide === 2) {
            console.log("playing animation");
            $(".skills").css("animation-play-state", "running");
            $('html').css({'background': "url('../newwebsite/images/redseaback.png') repeat"});
        } else if (slide === 3) {
            $('html').css({'background': "url('../newwebsite/images/pinkseaback.png') repeat"});
        }


    });
}
