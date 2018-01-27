(function (window) {
    function selfBlank(obj) {
        //监听当前页面宽度函数
        getPageClientWH();
        obj.style.width = getPageClientWH().clientWidth + "px";
        obj.style.height = getPageClientWH().clientHeight + "px";

        //监听页面尺寸变化长宽函数
        window.onresize = function () {
            //监听当前页面宽度函数
            obj.style.width = getPageClientWH().clientWidth + "px";
            obj.style.height = getPageClientWH().clientHeight + "px";
        };
    }


//监听事件
    function getPageClientWH() {
        return {
            clientWidth: window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth
            || 0,

            clientHeight: window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight
            || 0
        }
    }

    window.selfBlank = selfBlank;
}(window));

(function (window) {
    function animate(obj, target) {

        //在开启之前先清除一下之前开启的计时器
        clearInterval(obj.timerID); //如果obj是红色进来，就只能停红色自己，是蓝色就只能停蓝色自己

        obj.timerID = setInterval(function () {

            //取出当前位置
            var currentLeft = obj.offsetLeft;

            //设置每步走多少，往右走为正，往左走为负
            var step = target > currentLeft ? 15 : -15;

            //如果目标和当前位置之间的距离大于1步的距离，那么这一步我就走！
            if (Math.abs(target - currentLeft) > Math.abs(step)) {

                //距离还够走，就走这一步
                obj.style.left = currentLeft + step + "px";

            } else {
                //如果当前位置和目标位置不够1步或刚好1步，就直接到目标位置
                obj.style.left = target + "px";
                //如果到了目标位置，就应该停止计时器
                clearInterval(obj.timerID);
            }

        }, 1);
    }


    window.animate = animate;
}(window));


