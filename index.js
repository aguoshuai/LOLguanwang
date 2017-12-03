$(function(){
    $('.top2').mouseover(function(){
        $(".lianjie").css({
            'display': 'block',

        });
    });
    $('.lianjie').mouseover(function(){
        $(".lianjie").css({
            'display': 'block',

        });
        });
        $('.top2').mouseout(function(){
        $(".lianjie").css({
            'display': 'none',

        });
    })
    $('.lianjie').mouseout(function(){
        $(".lianjie").css({
            'display': 'none',

        });
    })
})

/*function bottom() {
    var top = $(document.body).scrollTop() + $(document.documentElement).scrollTop();
    if ($(document).scrollTop() <100) { //窗口 srcolltop方法设置或返回被选元素的水平滚动条位置。
        $(".shoutu>img").css({
            'height': '750px',

        });
    } else {
        $(".shoutu>img").css('height', '351px');
    }
    setTimeout(bottom);
}
bottom();*/

// $(function(){
//     $('.nav2>li').click(function(){
//         $(this).css('border-bottom','2px solid #d1ab57')
        
//     });
// })

window.onload=function(){
    
    var oUl1=document.getElementById('nav2');
	var oLi1=oUl1.getElementsByTagName('li');

    for(var i=0;i<oLi1.length;i++){
		oLi1[i].index=i;
		oLi1[i].onclick=function(){
			show(this.index)
		}
	}
     
	function show(j){
		for(var i=0;i<oLi1.length;i++){
				oLi1[i].className="";
			}
			oLi1[j].className="active";

			
    }
}

$(function(){
    var i = 0;
    var $Liwidth = $('#banner1>li').width();
    var timer = null;
    $('#banner1').width($Liwidth*5);
   
   $('#banner2>li').mouseover(function(){
       var index = $(this).index();
       show(index);
   })
   $("#banner").mouseover(function(){
       clearInterval(timer);
   })
   $("#banner").mouseout(function(){
       lunbo();
   })
   //点击切换
//    $('#ul2>li').click(function(){
//        var long = $('#ul1>li').length;
//        if(i<long-1){
//            i++;
//            show(i)
//        }
//    })

   function show(j){
       $('#banner2>li').eq(j).addClass('active').siblings().removeClass('active');
       var long = -$Liwidth*j+'px';
       $('#banner1').stop().animate({left:long},1000);
   }

   function lunbo(){
       clearInterval(timer);
       timer = setInterval(function(){
           i++;
           show(i);
           if(i==4){
               i=-1
           }
       },2000)
   }
   lunbo();
});

 

 $(function(){
     $('.xinwen>li').mouseover(function(){
     var i = $('.xinwen>li').index(this);

     $('.xinwen>li b').css({'backgroundColor':'#ebebeb','color':'#7a7a7a'});
      $('.xinwen>li b').eq(i).css({'backgroundColor':'#d1ab57','color':'#fff'});

        $('.xinwen>li').css({'color':'#555555'});
      $('.xinwen>li').eq(i).css({'color':'#d1ab57'});
         

    })

    $('.xinwen>li').mouseout(function(){
        $('.xinwen>li b').css({'backgroundColor':'#ebebeb','color':'#7a7a7a'});
        $('.xinwen>li').css({'color':'#555555'});
    })
 });

//  $(function(){
//      $('#youxia_box>ul>li>p').mouseover(function(){
//         //  alert('11')
//          var i = $('#youxia_box>ul>li').index(this);
//          $('#youxia_box>ul>li>p').eq(i).css({' display':'block'})
//      })
//  })



$(function(){
    for(var i=0; i<$("#xuanze>ul>li").length;i++){
    $("#xuanze>ul>li").eq(i).click(function(){
        var i=$(this).index();
        $('.yingxiong>ul').eq(i).attr({style:"display:block"}).siblings().attr({style:"display:none"})
    })
    }
})

