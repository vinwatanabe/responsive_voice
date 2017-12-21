$(document).ready(function(){
    var text_to_read = $(".facebook_post").attr("alt");
    var talk = "Olá, tudo bem?";
    
    $(".facebook_post").on('mouseenter', function(){
        responsiveVoice.speak(text_to_read, "Brazilian Portuguese Female", {rate: 1});
    });
    
    $(".facebook_post").on('mouseleave', function(){
        responsiveVoice.cancel();
    });
    
});