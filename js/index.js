/**
 * Created by ct on 2017/12/6.
 */
/**
 * Created by J-LIN on 2017/11/26.
 */

//侧边栏实现
boxSlideLeft($("#more-list"), $("#more-nav"), "300")


// -----------导航栏左移-----------
/**
 *-导航栏左移
 * @param  {[type]} $e   触发事件源
 * @param  {[type]} $box    要移动的盒子
 * @param  {[type]} $time    时间
 * @return {[type]}     description
 */

//要加上stop（）去掉之前之前动画，执行当前的动画
function boxSlideLeft($e, $box, $time) {
    $time = $time || null;
    var $oldPosition = $box.css("right");
    $($e).mouseenter(function () {
        $($box).stop().animate({right: '0'}, $time);
    });
    $($e).mouseleave(function () {
        $($box).stop().animate({right: $oldPosition}, $time)
    });
}


/*翻页轮播图效果代码开始---------------------------------*/


/*翻页轮播图效果代码结束---------------------------------*/

//弹出意见反馈栏js 代码实现

//var wrap = document.getElementById("wrap");
//
////找到反馈栏按钮
//var btn = document.getElementById("page-btn");
//
////找到反馈栏
//var feedback = document.getElementById("feedback");
//
////找到关闭反馈栏标签
//var exit = document.getElementById("icon-cha");
//
////点击事件 弹出反馈栏
//btn.onclick = function () {
//    feedback.style.display = "block";
//    //console.log("lllllll");
//
//}
//
////关掉反馈页面
//exit.onclick = function () {
//    feedback.style.display = "none";
//    //console.log("lllllll");
//
//}


//---------------------------------------/*


// -----------关闭反馈栏------------
//
$(".wrap .page-btn").mousedown(function () {
    $(".feedback").fadeIn("slow");
});

$(".pop-feedback>i.icon-cha").mousedown(function () {
    $(".feedback").fadeOut("slow");

})


//按下打开反馈栏
$("#page-btn").mousedown(function () {
    //反馈栏  淡入
    $('#feedback').fadeIn(500);
    //$('#feedback').stop().animate(
    //    {left:300},
    //    500
    //)



    //声明变量 value 的值
    var $text = $(".feedback textarea").val();

    //判断value 是否有值，如果有，就清空
    if ($text) {

        $(".feedback textarea").val("");

        //判断 有没有这个类，有就切换 为无
        $(".pop-feedback>.pop_bot .submit").toggleClass("blue");


    }


});


// 输入内容
    var $text;
$(".feedback textarea").keyup(function () {
   $text = $(this).val();
    if ($text) {
        $(".pop-feedback>.pop_bot .submit").addClass("blue");


    } else {
        $(".pop-feedback>.pop_bot .submit").removeClass("blue");

    }
})



//输入成功后，点击提交  反馈栏淡出  意见反馈 成功淡入
$('.pop-feedback>.pop_bot').click(function () {
    //$text = value("");
    $('#feedback').fadeOut(500, function () {
        //$('#feedback').fadeIn(500);

        $('.feedback-img').fadeIn(2000, function () {
            $('.feedback-img').fadeOut(1000)
        });

    });

    //$('#feedback>.feedback-img').fadeIn(500);

});


// -----------反馈栏END-----------


// -----------修改页面尺寸-----------
$(window).resize(function () {

    $(".wrap").css({width: $(window).width(), height: $(window).height()});
    $(".media-box").css({width: $(window).width(), height: $(window).height()});
    $(".page-box").css({width: $(window).width(), height: $(window).height()});

});

//***************text-link 的动画效果开始**********************************
//实现的功能：
//1、当鼠标移到text-link 中，箭头 往的 x坐标为300
//2、鼠标移走后，慢慢回来

$(function() {

    //鼠标移入
    $('.page2 .content .text-link>a').mouseenter(function() {
        $('.icon-xiangyou').stop().animate(
            {left:300,fontSize: 30},
            //'fast'
            1000
        );
    })

    //鼠标移出
    $('.page2 .content .text-link>a').mouseleave(function() {
        $('.icon-xiangyou').stop().animate(
            {left:0,fontSize: 17},
            'slow'
        );
    })


})

//******************text-link 的动画效果结束******************************

//点击logo  回到主页的开始*****************************************
//$(function() {
//
//    $('.header a').click(function() {
//
//    })
//
//})



//点击logo  回到主页的结束*****************************************


// 指向的索引
var $index = 0;
// -----------切换大页面 START-----------
;(function () {
    // 大页面数组
    var $page = $(".page-wp .page-box");

    // -----鼠标移入圆点切换页面------
    $(".wrap .page_btns li").mouseenter(function () {
        // 鼠标移入的索引
        $index = $(this).index();

        // 找到当前的页面索引
        var $pageNum = $(".wrap .page_btns li.current").index();
        // 圆点变色
        $(this).addClass('current').siblings().removeClass();
        // 页面切换
        pageMove($page, $index, $pageNum);
    });


    setInterval(changePage, 1000);
    function changePage() {
        var $count = 0;//判断页面是否滚动或键盘按下

        //------鼠标滚轮滑动page页START------
        document.onmousewheel = function (e) {
            // 获取滚轮
            $count++;
            if ($count == 1) {
                // 滚轮向上是正值，索引减一
                var $wheelDelta = -e.wheelDelta;//取反

                // 找到当前的页面索引
                var $pageNum = $(".wrap .page_btns li.current").index();

                isChangeDiraction($wheelDelta);
                $(".wrap .page_btns li").eq($index).addClass('current').siblings().removeClass();
                pageMove($page, $index, $pageNum);
            }
        }
        //------鼠标滚轮滑动page页END------
        //

        //------键盘上下键滑动page页的开始------
        document.onkeydown = function (e) {

            // 键盘按下一次
            var code = e.keyCode || e.charCode || e.which;
            var $wheelDelta;
            if (code == 32 || code == 38 || code == 40) {
                $count++;
                switch (code) {
                    case 32:
                        $wheelDelta = 1;
                        break;
                    case 38:
                        $wheelDelta = -1;
                        break;
                    case 40:
                        $wheelDelta = 1;
                        break;
                }
                ;

                if ($count == 1) {
                    var $pageNum = $(".wrap .page_btns li.current").index();

                    isChangeDiraction($wheelDelta);
                    $(".wrap .page_btns li").eq($index).addClass('current').siblings().removeClass();
                    pageMove($page, $index, $pageNum);
                }
            }

        }
        //------键盘上下键滑动page页结束------


    };


    // 判断页面滑动方向
    function isChangeDiraction($wheelDelta) {
        if ($wheelDelta < 0) {
            $index--;
            if ($index < 0) {
                $index = $page.length - 1;
            }
        } else {
            $index++;
            if ($index == $page.length) {
                $index = 0;
            }
        }
        ;
    }


    //第一个页面向下点击切换到第二个页面-----------
    $(".next-page").mousedown(function () {
        $index++;
        $(".wrap .page_btns li").eq($index).addClass('current').siblings().removeClass();
        pageMove($page, $index, 0);
    });

}());


// -----------切换大页面 END-----------

// ------------
/**
 *页面切换
 * @param   $page    所有的页面
 * @param   $index   要到达的页面索引
 * @param  $pageNum 当前页面索引
 * @return          null
 */
function pageMove($page, $index, $pageNum) {
    // 移入的索引大于现在的索引，向下滑动
    // 有bug，进行多个事件会出bug
    if ($index > $pageNum) {
        $($page).eq($index).css({left: 0, top: "100%"}).stop().animate({top: 0}, 400);
        $($page).eq($pageNum).stop().animate({top: "-100%"}, 400, function () {
            $($page).eq($pageNum).css({left: "-9999px", top: 0})
        });
    } else if ($index < $pageNum) {
        $($page).eq($index).css({left: 0, top: "-100%"}).stop().animate({top: 0}, 400);
        $($page).eq($pageNum).stop().animate({top: "100%"}, 400, function () {
            $($page).eq($pageNum).css({left: "-9999px", top: 0})
        });
    } else {
        false;
    }
    ;

}


// ------页面1------
// 向下图标移动
if ($index == 0) {
    ;
    (function () {
        setInterval(move, 1);
        function move() {
            $(".next-page").animate({
                bottom: '42px'
            }, 500).animate({
                bottom: '36px'
            }, 500)
        }
    }());
}

// ------页面2------  //通过按钮切换banner


$(".btn-box li").mouseenter(function () {
    var $index = $(this).index();
    var $boxWidth = $(this).width();
    var $leftDistance = $boxWidth * $index;


    $(".page2 .bg-img").eq($index).stop().fadeIn("slow");
    $(".page2 .bg-img").eq($index).siblings('.bg-img').fadeOut("slow");


    // });
    //

    // 第二页下划线移动
    //$(".btn-wp .underline").stop().animate({
    //    left: $leftDistance,
    //}, 200);

    // 图标颜色
    $(this).addClass('current').siblings('li').removeClass('current');

})




// 二维码展现
$(".page2 .content .downloadBtn1").click(function (event) {
    var $index = $(this).data("num");
    $(".page-box .bg-img .qr").eq($index).stop().slideDown("slow");
    event.stopPropagation();
})

$("document,body").click(function () {
    $(".page-box .bg-img .qr").stop().slideUp("slow")
})

// ----------点赞效果的封装--------

//问题：  js中转换为 UTF-8  造成的问题是页面上点赞会是乱码
function great($eles, $time) {
    $($eles).mouseenter(function () {
        $(this).addClass('icon-zan1').stop().animate({top: "-2px"}, $time);
    });
    $($eles).mouseleave(function () {
        if (!$(this).hasClass("selected")) {
            $(this).stop().animate({top: "0px"}, $time, function () {
                $(this).removeClass('icon-zan1')
            });
        }

    });
    $($eles).mousedown(function () {
        if (!$(this).hasClass("selected")) {
            $(this).addClass('icon-zan1 selected').stop().animate({top: "-2px"}, $time);

            var $str = $(this).siblings("span").text();
            $str = +$str.match(/\d+/);
            console.log('$str的值为：' + $str);
            $(this).siblings("span").text(++$str + "人赞过");
        }

    });
}
// 第二页的点赞
great($(".great i"), 200);


//图标向右移动
function moveRight($eles, $position) {
    $($eles).mouseenter(function () {
        //console.log("x")
        $(this).children("i").animate({
            right: $position - 7 + 'px'
        }, 200).animate({
            right: $position + 'px'
        }, 200).animate({
            right: $position - 3 + 'px'
        }, 200).animate({
            right: $position + 'px'
        }, 200);
    })
}

// 第二页的右图标,第三页、第四页右图标
moveRight($(".page2 .content .text-link>a"), -5);
moveRight($(".page3 .content .text-link>a,.page4 .content .text-link>a"), -25);


//页面三  四 五 -----------------------------------------------

//var changeScreen = document.getElementById("changeScreen");
//selfBlank(changeScreen);
var hover = document.getElementsByClassName("hover");

//移入鼠标事件 p3 p4
for (var i = 0; i < hover.length; i++) {

    hover[i].parentNode.onmouseenter = function () {
        this.children[1].style.display = "none";
        this.children[0].style.display =  "block";
        this.children[0].style.left = this.offsetWidth+"px";
        animate(this.children[0] , 0);
    };
    hover[i].parentNode.onmouseleave =function(){
        this.children[1].style.display = "block";
        this.children[0].style.display =  "none";
    }
}
$('.hoverNoIcon').remove

//改hover里面的字体图标 //
$(function () {
    $('.txt_link a i').addClass('iconfont icon-arrow-right-thin icon-xiangyou').css(
        {
            fontWeight: 300,
            position: 'relative',
            top: -5,
            fontSize: 12
        });
    $('.txt_link a').mouseenter(function () {
        $(this).find('i').animate({left: 4}, 100).animate({left: 0}, 100).animate({left: 2}, 100).animate({left: 0}, 100);
    })
});
//点击爱心增加数字 移入上移
$(function () {
    //赞心 和link 加相对定位
    $('.txt_zan>a,.txt_link>a').css('position', 'relative');
    $('.txt_link a').css({
        width: '100%',
        height: '30'
    });


    ////txt_link移入 上移
    //$('.txt_link span').mouseenter(function () {
    //    $(this).css({
    //        position : 'absolute',
    //        height: 30,
    //        width: '50%'
    //    });
    //    $(this).stop().animate({top:-3},200).mouseleave(function () {
    //        $(this).stop().animate({top:0},200);
    //    })
    //});
    //增加数字
    //移入爱心上移
    $('.txt_zan>a').addClass('iconfont icon-zan').click(function () {
        if (!$(this).hasClass('iconfont icon-zan icon-zan1')) {
            var thisNum = parseInt($(this).siblings('span').text()) + 1;
            $(this).addClass('iconfont icon-zan1').siblings('span').html(thisNum);
        }
    }).mouseenter(function () {
        $(this).stop().animate({top: -3}, 200).mouseleave(function () {
            $(this).stop().animate({top: 0}, 200);
        })
    });

});


//footer 微信 微博等 移入上浮
$(function () {
    $('.btn_box>.btn:eq(0)').mouseenter(function () {
        $(this).find('div').css('display', 'block')
    });
    $('.btn_box>.btn').mouseenter(function () {
        $(this).stop().animate({top: -3}, 200).mouseleave(function () {
            $(this).stop().animate({top: 0}, 200);
        })
    })
    $('.btn_box>.btn:eq(0)').mouseleave(function () {
        $(this).find('div').css('display', 'none')
    });
});











