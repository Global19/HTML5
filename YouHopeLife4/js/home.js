//轮播图初始化
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 5000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
}) 
//遍历
$(".home_box_font ul li").mouseenter(function(){
	var index = $(this).index();
	$(this).parent().parent().next().children().next().hide();
	$(this).parent().parent().next().children().next().eq(index).show();
});

//商家/商品
$(".logo_search_box2").click(function(){
	$(".logo_search_box1").css({
		"background":"#fff",
		"color":"black"
	});
	$(this).css({
		"background":"#008CE1",
		"color":"#fff"
	});
	$(".logo_search_button a").attr("href","searched_commodity.html");
});
$(".logo_search_box1").click(function(){
	$(".logo_search_box2").css({
		"background":"#fff",
		"color":"black"
	});
	$(this).css({
		"background":"#008CE1",
		"color":"#fff"
	});
	$(".logo_search_button a").attr("href","searched_merchant.html");
});
