
$(document).ready(function(){
    console.log('testing jquery');
    $(preloadimgs);
    $(changeback);
    $('#carousel').slick({
        accessibility: true,
        adaptiveHeight: true,
        dots:true

    });
    console.log('slick initialized');
});

function preloadimgs(){
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
            console.log('loaded image'+i);
        }
    };

    $.preloadImages('../newwebsite/images/blueseaback.png', '../newwebsite/images/greenseaback.png', '../newwebsite/images/pinkseaback.png','../newwebsite/images/redseaback.png','../newwebsite/images/darkback.png','../newwebsite/images/crazyback.png');
}

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
            $('html').css({'background': "url('../newwebsite/images/redseaback.png') repeat"});
        } else if (slide === 3) {
            $('html').css({'background': "url('../newwebsite/images/pinkseaback.png') repeat"});
        }


    });
}
