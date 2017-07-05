// 页面动态js部分主要有：
// 1、首页轮播图
// 2、当首页往下超过一定高度时，页头会有半透明变红色
// 3、天猫热点轮播信息
// 4、秒杀清单轮播页
// 5、回顶部
// 6、页面懒加载
$(document).ready(function(){
	var scrwid = window.screen.width;
	var sliderHeight = scrwid * 154.453/320;
	$('#J_FocusSlider').attr('style', 'height:' + sliderHeight + 'px');
})