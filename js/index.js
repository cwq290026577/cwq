$(function() {
	var key = 0;
	var timer = null;
	var flag = 0;
	removeCla();
	$(window).mousewheel(function(event,num){  //  当鼠标滚动的时候触发事件
		/*console.log(num);*/
		/*-1   1     //  让我们的 key  匹配上索引值
		1    0
		2    1
		3    2*/
		/*key = key -num;*/

		 
		/*if(key > 5){
			key = 5
		};
		if(key > 5) key = 5;
		*/
		

		/*函数节流*/
		/*clearTimeout(timer);  // 清除定时器
		timer = setTimeout(function(){  // 利用定时器实现函数节流
			key -= num; 
			key > 5 ? key =5 : key;   // 当往下滚动到第6屏的时候默认停留在第六屏
			key < 0 ? key =0 : key;		// 当往上滚动到第0屏的时候默认停留在第0屏
			$('.box').stop().animate({top : -key*100+'%'},500);  // 让。box滚动
		},100)*/
			/*if(flag == 0){
				flag = 1;
				key -= num; 
				key > 5 ? key =5 : key;   // 当往下滚动到第6屏的时候默认停留在第六屏
				key < 0 ? key =0 : key;		// 当往上滚动到第0屏的时候默认停留在第0屏
				$('.box').stop().animate({top : -key*100+'%'},500,function(){   // 利用回调函数来实现函数节流
					flag = 0;
				}); 
			}*/
			if(!$('.box').is(':animated')){  // 当我们的。box不在做动画的时候才去触发里面的东西
				key -= num; 
				key > 5 ? key =5 : key;   // 当往下滚动到第6屏的时候默认停留在第六屏
				key < 0 ? key =0 : key;		// 当往上滚动到第0屏的时候默认停留在第0屏
				$('.box').stop().animate({top : -key*100+'%'},500);
				$('.rightNav li').eq(key).addClass('current').siblings().removeClass('current');
				removeCla();
			}		
	})

	// 创建节点
	var dom = $('<span></span>')  
	$('.rightNav li').append(dom);  // 将dom节点插入到 Li 里面

	// 定义文字数组
	var arr = ['首　页','营销手段','服务优势','特色功能','技术特点','申请加入']
	$.each($('.rightNav li'),function(index, el) {  // 遍历$('.rightNav li')  
		$(this).children('span').html(arr[index]);  // 将相对应的数组内容插入到相对应的li里面
	});


	/*$('.rightNav li').bind('mouseover',function(){   //绑定单个事件
		alert(1)
	})*/

	$('.rightNav li').bind({
		mouseover:function(){
			$(this).children('span').css('display','block');
		},
		mouseout:function(){
			$(this).children('span').css('display','none');
		},
		click:function(){
			key = $(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$('.box').stop().animate({top : -key*100+'%'},500);
			removeCla();
		}
	})

	/*$('button').click(function(event) {
		alert(2)
		$('.page1').removeClass('comeout');
	});*/
	function removeCla (){
		$('.page').addClass('comeout').eq(key).removeClass('comeout');
	}
});