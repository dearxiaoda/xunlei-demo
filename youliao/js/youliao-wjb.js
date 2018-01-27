window.onload = function(){
    var dotline = new Dotline({
        dom:'J_dotLine',//画布id
        cw:800,//画布宽
        ch:500,//画布高
        ds:50,//点的个数
        r:0.5,//圆点半径
        dis:80//触发连线的距离
    }).start();
};/**
 * Created by 王佳宝 on 2017/12/12.
 */

$(function () {
    var flag = true;
    $('#btn').on('click', function () {
        if(flag){
            $(this).css({
                background : '"url("imgs/youliao/voice_spr.png") -47px -1px"'
            });
            flag = false;
        }else{
            $(this).css({
                background : ' "url("imgs/youliao/voice_spr.png") -1px -1px" '
            });
            flag = true
        }

    });
});
