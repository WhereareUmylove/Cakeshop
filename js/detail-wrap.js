/**
 * Created by student on 2018/11/26.
 */
$(function() {
    var timer=0;
    var index=0;
    function wrapper() {
        index++;
        if(index>3){
            index=0;
        }
        console.log(index);
        $(".gallery-top .swiper-wrapper .swiper-slide").eq(index).fadeIn().siblings().fadeOut();
    }
    timer=setInterval(wrapper,2000);
    $(".gallery-top").mouseover(function(){
        clearInterval(timer),function(){
            timer=setInterval(wrapper, 2000);}
    })
    $(".gallery-top").mouseout(function(){
        timer=setInterval(wrapper, 2000);
    })
})