/**
 * Created by Charles on 2017/12/10.
 */
$(function(){
    var idx=0;
    var setId;
     show();
    $(".picGuideLy>i").click(function(){
        clearInterval(setId);
        $(".shopLy>.ul1>li").eq(idx).fadeOut();
        $(this).addClass("pic_colorLy").siblings("i").removeClass("pic_colorLy");;
        idx++;
        if(idx==6){
            idx=0
        }
        $(".shopLy>.ul1>li").eq(idx).fadeIn();
        idx=$(this).index();
        show();
    })
$(".shopLy>.rightLy").click(function(){
    clearInterval(setId);
    $(".shopLy>.ul1>li").eq(idx).fadeOut();
    $(".picGuideLy>i").eq(idx).addClass("pic_colorLy").siblings("i").removeClass("pic_colorLy");
    idx++;
    if(idx==6){
        idx=0;
         }
    $(".shopLy>.ul1>li").eq(idx).fadeIn();
    show();
          });
    $(".shopLy>.leftLy").click(function(){
        clearInterval(setId);
        $(".shopLy>.ul1>li").eq(idx).fadeOut();
        $(".picGuideLy>i").eq(idx).addClass("pic_colorLy").siblings("i").removeClass("pic_colorLy");
        idx--;
        if(idx<0){
            idx=5;
        }
        console.log(idx);
        $(".shopLy>.ul1>li").eq(idx).fadeIn();
        show();
    });
    function  show(){
        setId=setInterval(function(){
            $(".shopLy>.ul1>li").eq(idx).fadeOut();
            $(".picGuideLy>i").eq(idx).addClass("pic_colorLy").siblings("i").removeClass("pic_colorLy");
            idx++;
            if(idx==6){
                idx=0;
            }
            $(".shopLy>.ul1>li").eq(idx).fadeIn();
        },(1000));
    }
    var index=null;
    $(".middleCutLy  .middleNav  li").click(function(){
       index=$(this).index();
        $(this).addClass("liLy").siblings("li").removeClass("liLy");
        $(this).children(".moneytit").addClass("txtColorLy").parent().siblings().children(".moneytit").removeClass("txtColorLy");
        $(this).children(".moneytxt").addClass("titColorLy").parent().siblings().children(".moneytxt").removeClass("titColorLy");
        $(this).children(".moneyLy1").css({'backgroundPositionY':'-115PX'}).parent().siblings().children(".moneyLy1").css({'backgroundPositionY':'-15PX'})
        $(this).children("b").css({'backgroundPositionY':'-199PX'}).parent().siblings().children("b").css({'backgroundPositionY':'-151PX'});
        $(".middleCutLy .productLy ul").eq(index).addClass("selectLy").siblings("ul").removeClass("selectLy");

    })


})