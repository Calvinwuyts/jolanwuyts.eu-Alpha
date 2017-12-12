
$(document).ready(function(){
    console.log('testing jquery');
    $(changeback);
    $('#carousel').slick({
        accessibility: true,
        adaptiveHeight: true,
        dots:true
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
            $('html').css({'background': "url('../newwebsite/images/redseaback.png') repeat"});
        } else if (slide === 3) {
            $('html').css({'background': "url('../newwebsite/images/pinkseaback.png') repeat"});
        }


    });
}
