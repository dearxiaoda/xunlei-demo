/**
 * Created by pc on 2017/12/6.
 */
var gtop,gleft,wtop,wleft,wxd_index=0,tId,wxd_trigger,wxd_num;
function getPoint() {
    if(!gtop&&gtop!=0) {
        console.log(gtop = $('.wxd-d1 .wxd-gay ').position().top+160);
        console.log(gleft = $('.wxd-d1 .wxd-gay').position().left+150);
    }
}
function move1(e) {
    if(!wtop&&wtop!=0) {
        wtop = $('.wxd-d1 .wxd-gay .wxd-gword').position().top;
        wleft = $('.wxd-d1 .wxd-gay .wxd-gword').position().left;
    }

    $('.wxd-d1 .wxd-gay').css({
        top:gtop-160-(e.pageY-gtop)/(8+Math.abs(e.pageY-gtop)/150),
        left:gleft-150-(e.pageX-gleft)/(8+Math.abs(e.pageX-gleft)/150)
    });
    $('.wxd-d1 .wxd-gay .wxd-round').css({
        top:wtop-(e.pageY-gtop)/(10+Math.abs(e.pageY-gtop)/20),
        left:wleft-(e.pageX-gleft)/(10+Math.abs(e.pageX-gleft)/20)
    });
}
function move2(e) {
    if(!wtop&&wtop!=0) {
        wtop = $('.wxd-d2 .wxd-gay .cricle').position().top;
        wleft = $('.wxd-d2 .wxd-gay .cricle').position().left;
    }
    $('.wxd-d2 .wxd-gay').css({
        top:gtop-160-(e.pageY-gtop)/(8+Math.abs(e.pageY-gtop)/150),
        left:gleft-150-(e.pageX-gleft)/(8+Math.abs(e.pageX-gleft)/150)
    });
    $('.wxd-d2 .wxd-gay .cricle').css({
        top:wtop-(e.pageY-gtop)/(10+Math.abs(e.pageY-gtop)/20),
        left:wleft-(e.pageX-gleft)/(10+Math.abs(e.pageX-gleft)/20)
    });
}
function move3(e) {
    if(!wtop&&wtop!=0) {
        wtop = $('.wxd-d3 .wxd-gbk').position().top;
        wleft = $('.wxd-d3 .wxd-gbk').position().left;
    }
    $('.wxd-d3 .wxd-gay').css({
        top:gtop-160-(e.pageY-gtop)/(8+Math.abs(e.pageY-gtop)/250),
        left:gleft-150-(e.pageX-gleft)/(8+Math.abs(e.pageX-gleft)/250)
    });
    $('.wxd-d3 .wxd-gbk').css({
        top:wtop-(e.pageY-gtop)/(10+Math.abs(e.pageY-gtop)/50),
        left:wleft-(e.pageX-gleft)/(10+Math.abs(e.pageX-gleft)/150)
    });
}
function bg1() {
    $(function () {
        $('.wxd-d2 .active').removeClass('active');
        $('.wxd-d2 .wxd-gay').css('display','none');
        setTimeout("$('.wxd-d2 .wxd-gay').removeAttr('style');$('.wxd-bg .wxd-gay .cricle').removeAttr('style');wtop=null;",1000);
        $('body').off('mousemove');
        if(wxd_num){
            setTimeout("$('.wxd-bg').eq(wxd_index+1).slideDown(500)",300);
            setTimeout("$('.wxd-bg').eq(wxd_index).slideDown(500)",300);
        }
        setTimeout("$('.wxd-d1 .wxd-bgcenter .wxd-play').addClass('active')",2000);
        setTimeout("$('.wxd-d1 .wxd-bgcenter .wxd-word').addClass('active')",2300);

        setTimeout("$('.wxd-d1 .wxd-earth').addClass('active')",100);
        setTimeout("$('.wxd-d1 .wxd-earth .wxd-river').addClass('active')",600);
        setTimeout("$('.wxd-d1 .wxd-earth .wxd-tree').addClass('active')",800);
        setTimeout("$('.wxd-d1 .wxd-earth .wxd-phone').addClass('active')",2400);

        setTimeout("$('.wxd-d1 .wxd-gay').addClass('active')",1100);
        setTimeout("$('.wxd-d1 .wxd-gshine').addClass('active')",1800);
        setTimeout("$('.wxd-d1 .wxd-gshine').removeClass('active')",2000);
        setTimeout("$('.wxd-d1 .wxd-gshine').addClass('active')",2200);
        setTimeout("$('.wxd-d1 .wxd-gay .wxd-gword').addClass('active')",1800);
        setTimeout("$('.wxd-d1 .wxd-gay .wxd-gphone').addClass('active1')",1700);
        setTimeout("$('.wxd-d1 .wxd-gay .wxd-gphone').addClass('active2')",1800);
        setTimeout("$('.wxd-d1 .wxd-gay .wxd-gphone').removeClass('active2')",1900);
        setTimeout("$('.wxd-d1 .wxd-gay .wxd-gphone').addClass('active2')",2000);
        setTimeout("$('.wxd-d1 .wxd-gay .wxd-gphone').removeClass('active1 active2')",2100);
        setTimeout("getPoint();$('body').on('mousemove',move1);wxd_trigger=1",2400);
    })
}
function bg2() {
    $(function () {

        $('body').off('mousemove');
        if(wxd_num){
            setTimeout("$('.wxd-bg').eq(wxd_index+1).slideDown(500)",300);
            setTimeout("$('.wxd-bg').eq(wxd_index).slideDown(500)",300);
            $('.wxd-d3 .active').removeClass('active');
            $('.wxd-d3 .wxd-gay').css('display','none');
            $('.wxd-d3 .wxd-gbk').css('display','none');
            setTimeout("$('.wxd-d3 .wxd-gay').removeAttr('style');$('.wxd-d3 .wxd-gbk').removeAttr('style');wtop=null;",1000);
        }else {
            $('.wxd-d1 .active').removeClass('active');
            $('.wxd-d1 .wxd-gay').css('display','none');
            setTimeout("$('.wxd-gay').removeAttr('style');$('.wxd-bg .wxd-gay .wxd-round').removeAttr('style');wtop=null;",1000);
            setTimeout("$('.wxd-bg').eq(wxd_index-1).slideUp(500)",300);
        }
        setTimeout("$('.wxd-d2 .wxd-bgcenter .wxd-play').addClass('active')",2000);
        setTimeout("$('.wxd-d2 .wxd-bgcenter .wxd-word').addClass('active')",2400);

        setTimeout("$('.wxd-d2 .wxd-gay').addClass('active')",1100);
        setTimeout("$('.wxd-d2 .wxd-gay .cricle').addClass('active')",1400);
        setTimeout("$('.wxd-d2 .wxd-gay .cricle .cricle1').addClass('active')",1420);
        setTimeout("$('.wxd-d2 .wxd-gay .cricle .cricle2').addClass('active')",1500);
        setTimeout("$('.wxd-d2 .wxd-gay .cricle .cricle3').addClass('active')",1580);
        setTimeout("$('.wxd-d2 .wxd-gay .cricle .cricle4').addClass('active')",1660);
        setTimeout("$('body').on('mousemove',move2);wxd_trigger=1",2400);
    })
}
function bg3() {
    $(function () {
        $('.wxd-d2 .active').removeClass('active');
        $('.wxd-d2 .wxd-gay').css('display','none');
        setTimeout("$('.wxd-d2 .wxd-gay').removeAttr('style');$('.wxd-bg .wxd-gay .cricle').removeAttr('style');wtop=null;",1000);
        $('body').off('mousemove');
        setTimeout("$('.wxd-bg').eq(wxd_index-1).slideUp(500)",300);
        setTimeout("$('.wxd-d3 .wxd-bgcenter .wxd-play').addClass('active')",2000);
        setTimeout("$('.wxd-d3 .wxd-bgcenter .wxd-word').addClass('active')",2400);

        setTimeout("$('.wxd-d3 .wxd-earth.wxd-bgd3').addClass('active')",1100);
        setTimeout("$('.wxd-d3 .wxd-gay.wxd-fly').addClass('active')",1200);
        setTimeout("$('.wxd-d3 .wxd-gbk ').addClass('active')",1100);
        setTimeout("$('body').on('mousemove',move3);wxd_trigger=1",2400);
    })
}
function wxd_color() {
    switch (wxd_index){
        case 0:
            $(function(){
                    $('.navSide>div').eq(0).addClass('active').siblings().removeClass('active');
                    $('.btnFreeDownBox .btnFreeDown>a').css('backgroundPositionY',0);
                    $('#buttom-nav>ul>.wxd-last>a').css('backgroundColor','#39AAF2');
                }
            );break;
        case 1:
            $(function(){
                    $('.navSide>div').eq(1).addClass('active').siblings().removeClass('active');
                    $('.btnFreeDownBox .btnFreeDown>a').css('backgroundPositionY',-100);
                    $('#buttom-nav>ul>.wxd-last>a').css('backgroundColor','#8FD023');
                }
            );break;
        case 2:
            $(function(){
                    $('.navSide>div').eq(2).addClass('active').siblings().removeClass('active');
                    $('.btnFreeDownBox .btnFreeDown>a').css('backgroundPositionY',-200);
                    $('#buttom-nav>ul>.wxd-last>a').css('backgroundColor','#FFA70F');
                }
            );break;
    }
}
function bg() {
    switch (wxd_index){
        case 1:bg2();break;
        case 2:bg3();break;
        case 0:bg1();break;
    }
}
$(function () {
    bg();wxd_color();
    tId= setInterval(function () {
        wxd_index++;
        bg();wxd_color();
        if(wxd_index==2){
            clearInterval(tId);
        }
    },4000);
})

function addEvent(obj,xEvent,fn) {
    if(obj.attachEvent){
        obj.attachEvent('on'+xEvent,fn);
    }else{
        obj.addEventListener(xEvent,fn,false);
    }
}
window.onload = function () {
    //接着利用我们自己封装的函数给p绑定事件，
    addEvent(document,'mousewheel',onMouseWheel);
    addEvent(document,'DOMMouseScroll',onMouseWheel);
    // 当滚轮事件发生时，执行onMouseWheel这个函数
    function onMouseWheel(e) {
        e=e||window.event;
        if(wxd_trigger){
            if(e.wheelDelta>0){
                if(wxd_index==0)return;
                --wxd_index;
                wxd_num=1;
                bg();
            }else if(e.detail<0){
                if(wxd_index==0)return;
                --wxd_index;
                wxd_num=1;
                bg();
            }else {
                if(wxd_index==2)return;
                ++wxd_index;
                wxd_num=false;
                bg();
            }
            clearInterval(tId);
            wxd_trigger=false;
            wxd_color();
        }

    }
}

