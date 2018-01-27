; $(function ($, window, document, undefined) {

	//轮播图
	  function Mslider (container,button){
			//现在的位置
		var currentIndex = 0,
			slides = container.children(),
			length = slides.length,
			buttonlist = button.children(),

			interval;
		//自动播放
		this.autoPlay = function () {
			interval = setInterval(function () {
				triggerPlay(currentIndex);
			},5000);
		}

		//自动播放的函数体
		function triggerPlay(cIndex){
			var index;
			(cIndex == length - 1) ? index = 0 : index = cIndex + 1;
			slides.fadeOut(400).eq(index).fadeIn(400);
			buttonlist.addClass("gray").eq(index).removeClass("gray");
			buttonlist.empty().eq(index).append("<em></em>");
			currentIndex = index;
		}

		//hover停止播放
		 // container.hover(function(){
			//  clearInterval(interval);
		 // },function(){
			//  interval =  setInterval(function () {
			// 	 triggerPlay(currentIndex);
			//  },5000);
		 // });
	}
	window.Mslider = Mslider;
}(jQuery, window, document));

