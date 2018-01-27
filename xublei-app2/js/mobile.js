/**
 * Created by candy on 2017/12/6.
 */

//----------------第二张大图上的二维码放大效果开始-------------------
    var  QRCode=document.getElementById("xian-qr1");
    var bigQRcode=document.getElementsByClassName("xian-bigQRcode1")[0];


    QRCode.onmouseover=function(){

        bigQRcode.style.display="block";


    }

    QRCode.onmouseout=function(){
        bigQRcode.style.display="none";

    }

//----------------第二张大图上的二维码放大效果结束-------------------

     $(function(){
         //--------------------------点击第一张图的iphone-------------------

         $('.xian-smalliphone').click(function(){
             $('.xian-banner').css('display','none');
             $('.xian-banner1').css('display','block');
             $('.xian-banner2').css('display','none');

         });
         //--------------------------点击第一张图的ipad-------------------
         $('.xian-bigiphone').click(function(){
             $('.xian-banner').css('display','none');
             $('.xian-banner1').css('display','none');
             $('.xian-banner2').css('display','block');

         });


         //--------------------------点击第二张图的Android-------------------

          $('.xian-robot1').click(function(){

              $('.xian-banner').css('display','block');
              $('.xian-banner1').css('display','none');
              $('.xian-banner2').css('display','none');
          });

         //--------------------------点击第二张图的ipad------------------
            $('.xian-bigiphone1').click(function(){
                $('.xian-banner').css('display','none');
                $('.xian-banner1').css('display','none');
                $('.xian-banner2').css('display','block');

            })
         //--------------------------点击第三张图的Android------------------
          $('.xian-robot2').click(function(){
              $('.xian-banner').css('display','block');
              $('.xian-banner1').css('display','none');
              $('.xian-banner2').css('display','none');

          })

         //--------------------------点击第三张图的iphone------------------

             $('.xian-smalliphone2').click(function(){
                 $('.xian-banner').css('display','none');
                 $('.xian-banner1').css('display','block');
                 $('.xian-banner2').css('display','none');

             });


//--------------- -------------四个广告图标的鼠标移入事件----------------------
            $('.xian-appPic>ul>li').mouseenter(function(){

            $(this).children('h4,b').css('color','navy');
                $(this).children('p').fadeOut(function(){
                    $('.xian-appPic>ul>li').children('p').fadeIn();
                });





            });

         $('.xian-appPic>ul>li').mouseleave(function(){

            $(this).children('h4,b').css('color','#222222');


            });


//-----------------第二张大图页面的加载中动态图---------------


         var interval = setInterval(increment,100);
         var current = 0;

         function increment(){
             current++;
             $('#counter').html(current+'%');
             if(current == 100) { current = 0; }
         }

         $('.load-bar').mouseover(function(){
             clearInterval(interval);
         }).mouseout(function(){
             interval = setInterval(increment,100);
         });
//----------------------------第二张大图页面的加载中动态图结束 ----------------------------------
//----------------四个广告图标的突出显示-----------------------------------

         //setInterval(function(){
         //
         //    $('.xian-appPic>ul>li').css('opacity',1).siblings('opacity',0.4);
         //
         //},1000)
         //$('.xian-appAd').css('backgroundColor','#cccccc');

         //$('.xian-appPic>ul>li').mouseenter(function () {
         //    $(this).css({
         //       'opacity' :'1',
         //
         //    }).siblings().css(
         //        {
         //            'opacity' :'0.3'
         //        });
         //
         //});
         $(".xian-appPic>ul>li").mouseenter(function () {
             $(this).css({opacity:1}).siblings().css({opacity:0.3});
         })
         $(".xian-appPic>ul>li").mouseleave(function () {
             $(".xian-appPic>ul>li").css({opacity:1});

          })
         //-------------------------------打字效果------------------------


             function fn(txt){
                 //b.声明2个变量，一个idx用来记录索引，一个str就是要在span标签显示的内容。
                 var idx = 0;
                 var str = '';
                 //c.设置计时器，让span显示内容
                 var timerId = setInterval(function () {

                     if(txt[idx] != undefined){
                         str += txt[idx]; //拼接得到显示的内容
                         $('.xian-iphone2>i').text(str);
                         idx++;
                     }else {
                         //停止计时器了
                         clearInterval(timerId);

                         idx = 0;
                         fn('海量视频，极速下载。');
                     }

                 },300);
             }
         fn('海量视频，极速下载。');


         function f22(txt){
             //b.声明2个变量，一个idx用来记录索引，一个str就是要在span标签显示的内容。
             var idx = 0;
             var str = '';
             //c.设置计时器，让span显示内容
             var timerId = setInterval(function () {

                 if(txt[idx] != undefined){
                     str += txt[idx]; //拼接得到显示的内容
                     $('.xian-iphone22>i').text(str);
                     idx++;
                 }else {
                     //停止计时器了
                     clearInterval(timerId);

                     idx = 0;
                     f22('热门影片，轻松乐享。');
                 }

             },300);
         }

         f22('热门影片，轻松乐享。');





//----------------------------------------------------------------------------------
     });

var index=0;
var screen = document.getElementById("screen");

var ul = screen.children[0];

function movePic() {

    if (index == ul.children.length - 1) {

        index = 0;
        ul.style.left = 0;
    }

    //索引+1
    index++;

    //根据索引移动
    animate(ul, -index * screen.offsetWidth);





}

//自动移动图片
var timerID = setInterval(movePic, 1500);




