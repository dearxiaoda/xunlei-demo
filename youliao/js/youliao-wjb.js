window.onload = function(){
    var dotline = new Dotline({
        dom:'J_dotLine',//����id
        cw:800,//������
        ch:500,//������
        ds:50,//��ĸ���
        r:0.5,//Բ��뾶
        dis:80//�������ߵľ���
    }).start();
};/**
 * Created by ���ѱ� on 2017/12/12.
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
