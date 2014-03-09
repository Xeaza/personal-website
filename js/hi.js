jQuery(".videos .youtube-video a").click(function (){
    var videoID = jQuery(this).attr("href").split("=");
    var videoWidth = parseInt(jQuery(this).parent().parent().css("width"));
    var videoHeight = Math.ceil(videoWidth*(0.56)+1);

    jQuery(this).parent().hide();
    jQuery(this).parent().next().css('margin-left', '0');
    jQuery(this).parent().parent().prepend('<iframe width="450px" height="500px" src="http://www.youtube.com/embed/'+(videoID[1])+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    return false;
});

