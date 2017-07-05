$(document).ready(function(){
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
	var metaEl = document.querySelector('meta[name="viewport"]');
	var view1 = document.querySelector('#view-1');
	if(window.screen.width < 540){
		dpr = window.devicePixelRatio || 1;
		scale = 1 / dpr;
		rem = docEl.clientWidth * dpr / 10;
	}else{
		dpr = 1;
		scale =1;
		rem = 54;
	}
//貌似最新的淘宝网站又去掉了，只是限制了主体内容的宽度

	// 设置viewport，进行缩放，达到高清效果
	metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
	
	// 设置整体div的宽高
	view1.setAttribute('style', 'width:'+ docEl.clientWidth+'px; height:'+ docEl.clientHeight+'px');

	// 设置data-dpr属性，留作的css hack之用
	docEl.setAttribute('data-dpr', dpr);

	// 动态写入样式
	docEl.firstElementChild.appendChild(fontEl);
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
	$('body').attr('style', 'font-size:' + dpr * 12 +'px');

	// 给js调用的，某一dpr下rem和px之间的转换函数
	window.rem2px = function(v) {
	    v = parseFloat(v);
	    return v * rem;
	};
	window.px2rem = function(v) {
	    v = parseFloat(v);
	    return v / rem;
	};

	window.dpr = dpr;
	window.rem = rem;
})