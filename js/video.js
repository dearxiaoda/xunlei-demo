/**
 * Created by Administrator on 2017/12/8.
 */
//��������
//�ҵ���������
var li = document.getElementById("navigationBar").children;
//console.log(li);
for (var i = 0; i < li.length; i++) {

    li[i].onmouseover = function () {
        this.setAttribute("class", "borderTop");
        this.style.paddingTop = 28 + "px";
    };
    li[i].onmouseout = function () {
        this.removeAttribute("class", "borderTop");
        this.style.paddingTop = 32 + "px";
    }

}
//�ҵ���Ӱ��ͼƬ���Ӹ��汾��ͼƬ���ӣ�������һ����ʱ����
var chaoren = document.getElementsByClassName("chaoren")[0];
var banben = document.getElementsByClassName("banbensm")[0];
var timeID = setInterval(function () {
    chaoren.style.left = chaoren.offsetLeft + 1 + "px";
    if (chaoren.offsetLeft == 10) {
        clearInterval(timeID)
    }

}, 7)
var timeId = setInterval(function () {
    banben.style.left = banben.offsetLeft - 1 + "px";
    if (banben.offsetLeft == 720) {
        clearInterval(timeId)
    }
}, 7)

$('#xiazai').on('click', function () {
    $('#body').css({display: 'none'})
    $('#lT').css({display: 'block'})
})

var arr=[
    [
        358,
        0,
        150,
        600,
        700
    ],
    [
        5,
        4,
        3,
        3,
        4
    ],
    [
        180,
        150,
        50,
        50,
        150
    ],
    [
        1,
        0.8,
        0.4,
        0.4,
        0.8
    ],
    [
        450,
        400,
        350,
        350,
        400
    ]
]

//var num=['left','zIndex','top','opacity','width']
xZmm(arr)
setInterval(function () {
    xZmm(arr)
},3000)

function xZmm(arr){

    for (var i = 0; i < arr[0].length; i++) {
        arr[i].unshift(arr[i].pop())
    }
    for (var i = 0; i < arr[0].length; i++) {

        for (var j = 0; j < arr[0].length; j++) {

            //$('#lT'+(j+1)).animate((num[i]), (arr[0][j]))
            $('#lT'+(j+1)).animate({left:arr[0][j],
                top:arr[2][j],
                opacity:arr[3][j],
                width:arr[4][j],
                zIndex:arr[1][j],
            });
            //$('#lT'+(j+1)).css(
            //    'zIndex',arr[1][j]
            //    //top:arr[2][j],
            //    //opacity:arr[3][j],
            //    //width:arr[4][j]
            //)

            //$('#lT'+(j+1)).animate({zIndex:arr[1][j]},500)
            //$('#lT'+(j+1)).animate({top:arr[2][j]},500)
            //$('#lT'+(j+1)).animate({opacity:arr[3][j]},500)
            //$('#lT'+(j+1)).animate({width:arr[4][j]},500)
        }
    }
}



var body= document.getElementById("body");
var head= document.getElementById("head");
var bottom= document.getElementById("bottom");
var zhutibody= document.getElementsByClassName("zhutibody")[0];
var lT = document.getElementById("lT");
body.style.height = document.documentElement.clientHeight -head.offsetHeight - bottom.offsetHeight  + "px";
lT.style.height = document.documentElement.clientHeight -head.offsetHeight - bottom.offsetHeight  + "px";
zhutibody.style.top=(document.documentElement.clientHeight -head.offsetHeight - bottom.offsetHeight)*0.1+ "px";

window.onresize = function () {
    body.style.height = document.documentElement.clientHeight -head.offsetHeight - bottom.offsetHeight  + "px";
    lT.style.height = document.documentElement.clientHeight -head.offsetHeight - bottom.offsetHeight  + "px";
    zhutibody.style.top=(document.documentElement.clientHeight -head.offsetHeight - bottom.offsetHeight)*0.1+ "px";
};







    //if (windownsShx.offsetWidth < 1200) {
    //    windownsShx.style.height == 1200 + "px";
    //}
    //for (var i = 0; i < wrap_liList.length; i++) {
    //    wrap_liList[i].style.width = document.documentElement.clientWidth + "px";
    //    wrap_liList[i].style.height = document.documentElement.clientHeight + "px";

