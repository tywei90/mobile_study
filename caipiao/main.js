// 页面动态js部分主要有：
//1、首页轮播图
//2、下拉head出现
$(document).ready(function(){
	$('.slideImgs,.slideList li').attr('style','width:' + window.screen.width + 'px;' + ' height:'+ window.screen.width * 100/320 + 'px');
	$('.slideList').attr('style','width:' + window.screen.width * 7 + 'px;');
	$('.slideList .lastLi').attr('style','width:' + window.screen.width + 'px;' + ' height:'+ window.screen.width * 100/320 + 'px;'+' left:' + window.screen.width * -7 + 'px;');
})