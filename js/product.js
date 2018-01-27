/**
 * Created by sheng on 2017/12/6.
 */

//动画效果代码
function animate(obj, target) {
  clearInterval(obj.timerID);
  obj.timerID = setInterval(function () {
    //取出当前位置
    var currentLeft = obj.offsetLeft;
    //设置每步走多少，往右走为正，往左走为负
    var step = target > currentLeft ? 10 : -10;
    //如果目标和当前位置之间的距离够走就走！
    if (Math.abs(target - currentLeft) > Math.abs(step)) {
      //距离还够走，就走这一步
      obj.style.left = currentLeft + step + "px";
    } else {
      //如果当前位置和目标位置不够走，就直接到目标位置
      obj.style.left = target + "px";
      //到了目标位置停止计时器
      clearInterval(obj.timerID);
    }
  }, 10);
}
//-------------------warp主体广告部分轮播图开始----------------------

//找到大和值做响应式布局
var windownsShx = document.getElementsByClassName("windownsShx")[0];
//找到warp可视窗盒子,给盒子增加自适应事件
var warp = document.getElementById("wrapVisualWindow");
//找到ul
var wrap_ul = document.getElementsByClassName("wrap_ul")[0];
//找到li标签增加自适应宽度
var wrap_liList = document.getElementsByClassName("wrap_li");
//找到轮播索引
var ic_btn = document.getElementsByClassName("ic_btn");
//保存计时器时间
var time = 3000;

//轮播图响应式布局JS
//第一次打开网页先获取可视区布局
windownsShx.style.height = document.documentElement.clientHeight + "px";
for (var i = 0; i < wrap_liList.length; i++) {
  wrap_liList[i].style.width = document.documentElement.clientWidth + "px";
  wrap_liList[i].style.height = document.documentElement.clientHeight + "px";
}
wrap_ul.style.width = wrap_liList[0].offsetWidth * wrap_liList.length + "px";

//自动监听网页可视区域，可视区变化则元素响应改变宽高
window.onresize = function () {
  windownsShx.style.height = document.documentElement.clientHeight + "px";
  if (windownsShx.offsetWidth < 1200) {
    windownsShx.style.height == 1200 + "px";
  }
  for (var i = 0; i < wrap_liList.length; i++) {
    wrap_liList[i].style.width = document.documentElement.clientWidth + "px";
    wrap_liList[i].style.height = document.documentElement.clientHeight + "px";
  }
};

//轮播索引盒子,增加鼠标移入事件
var index = 0;
for (var i = 0; i < ic_btn.length; i++) {
  ic_btn[i].setAttribute("index", i);
  ic_btn[i].onmouseover = function () {
    for (var j = 0; j < ic_btn.length; j++) {
      ic_btn[j].setAttribute("class", "ic_btn");
    }
    this.setAttribute("class", "ic_btn showblue");
    wrap_ul.style.left = -(+this.getAttribute("index")) * warp.offsetWidth + "px";
    clearInterval(timerId);
  }
}

//找到可视盒子，增加鼠标移入停止图片轮播
warp.onmouseover = function () {
  clearInterval(timerId);
}
//可视盒子，增加鼠标移出开始图片轮播
warp.onmouseout = function () {
  timerId = setInterval(moveUl, time);
}

//给ul增加自动轮播
function moveUl() {
  if (index == wrap_ul.children.length - 1) {

    index = 0;
    wrap_ul.style.left = 0;
  }
  index++;
  animate(wrap_ul, -index * warp.offsetWidth);
  //排他
  for (var i = 0; i < ic_btn.length; i++) {
    ic_btn[i].setAttribute("class", "ic_btn");
  }
  //如果是最后1张就让第0个高亮，其他的就是是什么索引，就谁高亮
  if (index == wrap_ul.children.length - 1) {

    ic_btn[0].setAttribute("class", "ic_btn showblue");
  } else {
    //根据索引要设置页码高亮
    ic_btn[index].setAttribute("class", "ic_btn showblue");
  }
}

var timerId = setInterval(moveUl, time);


//-------------------warp体广告部分轮播图结束----------------------



$(function () {
  //移动软件板块突出特效
  $('.products_shx>.products_list>li').mouseenter(function () {
      $(this).css('opacity',1).siblings().css('opacity','0.4');
  });
  $('.products_list').mouseleave(function () {
    $(this).find('li').css('opacity',1);
  });

  //智能硬件板块闪烁特效
  $('.products_shen>.products_list>li').mouseenter(function(){
        $(this).children('a').fadeOut(300,function(){
          $(this).fadeIn(700);
        })
  });

})