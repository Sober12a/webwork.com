/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-05-25 10:28:14
 * @version $Id$
 */
//界面加载完毕执行以下程序

//轮播图
//根据媒体查询，判断窗口大小start
function myFunction(x) {
   if (x.matches) { // 媒体查询
    $(function(){
    //定义i变量为动态控制图片轮播做准备，i的值与每张图片进行一一的对应
    var i=0;
    //时间变量，为自动轮播以及对光标的影响做出相应的反应
    var timer=null;
    //根据图片的张数动态添加圆点个数
    for (var j = 0; j < $('.img li').length; j++) {
        $('.num').append('<li></li>');
    }
    //默认情况下的第一个圆点进行背景设计
    $('.num li').first().addClass('active');
    //根据光标的影响控制按钮的显示和隐藏
    $('.banner').hover(function(){
        $('.btn').show();
    },function(){
        $('.btn').hide();
    });
    //将第一张图片复制并添加到img部分下与前五张图片相接
    var firstimg=$('.img li').first().clone(); //复制第一张图片
    $('.img').append(firstimg).width($('.img li').length*($('.img img').width()));
    //定时器自动轮播
    timer=setInterval(function(){
        i++;
        if (i==$('.img li').length) {
            i=1;
            $('.img').css({left:0});//保证无缝轮播，设置left值
        }
        //进行下一张图片
        $('.img').stop().animate({left:-i*350},1000);
        //圆点跟着变化
        if (i==$('.img li').length-1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },2000);
    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.img li').length) {
                i=1;
                $('.img').css({left:0});
            };
            //进行下一张图片
            $('.img').stop().animate({left:-i*350},1000);
            //圆点跟着变化
            if (i==$('.img li').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },2000)
    });
    //上一个按钮
    $('.prev').click(function(){
        i--;
        if (i==-1) {
            i=$('.img li').length-2;
            $('.img').css({left:-($('.img li').length-1)*350});
        }
        $('.img').stop().animate({left:-i*350},1000);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    });
    // 下一个按钮
    $('.next').click(function(){
        i++;
        if (i==$('.img li').length) {
            i=1; //这里不是i=0
            $('.img').css({left:0});
        };
        $('.img').stop().animate({left:-i*350},1000);
        if (i==$('.img li').length-1) { //设置小圆点指示
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        };
 
    });
    //鼠标划入圆点
    $('.num li').mouseover(function(){
        var _index=$(this).index();
        //维持i变量控制的对应关系不变
        i = _index;                 
        $('.img').stop().animate({left:-_index*350},500);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
    });
  })
    } else {
       $(function(){
    //定义i变量为动态控制图片轮播做准备，i的值与每张图片进行一一的对应
    var i=0;
    //时间变量，为自动轮播以及对光标的影响做出相应的反应
    var timer=null;
    //根据图片的张数动态添加圆点个数
    for (var j = 0; j < $('.img li').length; j++) {
        $('.num').append('<li></li>');
    }
    //默认情况下的第一个圆点进行背景设计
    $('.num li').first().addClass('active');
    //根据光标的影响控制按钮的显示和隐藏
    $('.banner').hover(function(){
        $('.btn').show();
    },function(){
        $('.btn').hide();
    });
    //将第一张图片复制并添加到img部分下与前五张图片相接
    var firstimg=$('.img li').first().clone(); //复制第一张图片
    $('.img').append(firstimg).width($('.img li').length*($('.img img').width()));
    //定时器自动轮播
    timer=setInterval(function(){
        i++;
        if (i==$('.img li').length) {
            i=1;
            $('.img').css({left:0});//保证无缝轮播，设置left值
        }
        //进行下一张图片
        $('.img').stop().animate({left:-i*1150},1000);
        //圆点跟着变化
        if (i==$('.img li').length-1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },2000);
    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.img li').length) {
                i=1;
                $('.img').css({left:0});
            };
            //进行下一张图片
            $('.img').stop().animate({left:-i*1150},1000);
            //圆点跟着变化
            if (i==$('.img li').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },2000)
    });
    //上一个按钮
    $('.prev').click(function(){
        i--;
        if (i==-1) {
            i=$('.img li').length-2;
            $('.img').css({left:-($('.img li').length-1)*1150});
        }
        $('.img').stop().animate({left:-i*1150},1000);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    });
    // 下一个按钮
    $('.next').click(function(){
        i++;
        if (i==$('.img li').length) {
            i=1; //这里不是i=0
            $('.img').css({left:0});
        };
        $('.img').stop().animate({left:-i*1150},1000);
        if (i==$('.img li').length-1) { //设置小圆点指示
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        };
 
    });
    //鼠标划入圆点
    $('.num li').mouseover(function(){
        var _index=$(this).index();
        //维持i变量控制的对应关系不变
        i = _index;                 
        $('.img').stop().animate({left:-_index*1150},500);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
    });
});
   }
 }
 var x = window.matchMedia("(max-width: 640px)")
 myFunction(x) // 执行时调用的监听函数
 x.addListener(myFunction) // 状态改变时添加监听器
 //根据媒体查询，判断窗口大小end


//下拉
 $(document).ready(function() {
   $("#hero1").click(function() {
     $("html, body").animate({
       scrollTop: $("#int_hero1").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });
   $("#hero2").click(function() {
     $("html, body").animate({
       scrollTop: $("#int_hero2").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });
   $("#hero3").click(function() {
     $("html, body").animate({
       scrollTop: $("#int_hero3").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });
   $("#hero4").click(function() {
     $("html, body").animate({
       scrollTop: $("#int_hero4").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });
  $("#hero5").click(function() {
     $("html, body").animate({
       scrollTop: $("#int_hero5").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });
  $("#knowledge").click(function() {
     $("html, body").animate({
       scrollTop: $("#m-knowledge").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });
   $("#map").click(function() {
     $("html, body").animate({
       scrollTop: $("#main").offset().top }, {duration: 500,easing: "swing"});
     return false;
   });


//地图
var dataList=[
            {name:"南海诸岛",value:0},
            {name: '北京',value:594},
            {name: '天津', value:131},
            {name: '上海', value:1404},
            {name: '重庆', value:5},
            {name: '河北', value:1},
            {name: '河南', value:125},
            {name: '云南', value:17},
            {name: '辽宁', value:3},
            {name: '黑龙江', value:0},
            {name: '湖南', value:3},
            {name: '安徽', value:0},
            {name: '山东', value:2},
            {name: '新疆', value:0},
            {name: '江苏', value:14},
            {name: '浙江', value:30},
            {name: '江西', value:0},
            {name: '湖北', value:0},
            {name: '广西', value:10},
            {name: '甘肃', value:0},
            {name: '山西', value:0},
            {name: '内蒙古', value:0},
            {name: '陕西', value:6},
            {name: '吉林', value:201},
            {name: '福建', value:98},
            {name: '贵州', value:0},
            {name: '广东', value:66},
            {name: '青海', value: 0},
            {name: '西藏', value: 0},
            {name: '四川', value:241},
            {name: '宁夏', value:0},
            {name: '海南', value:0},
            {name: '台湾', value:1624871},
            {name: '香港', value:260703},
            {name: '澳门', value:1}
        ]
        
        // 随机函数
        function randomValue() {
            return Math.round(Math.random()*1000);
        }
        
        
        var option = {
            tooltip: {
                    formatter:function(params,ticket, callback){
                        return params.seriesName+'<br />'+params.name+'：'+params.value
                    }//数据格式化
                },
            visualMap: {
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],//取值范围的文字
                inRange: {
                    color: ['#e0ff00', '#006e00']//取值范围的颜色
                },
                show:true//图注
            },
            geo: {
                map: 'china',
                roam: false,//不开启缩放和平移
                zoom:1.23,//视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '现有确诊人数',
                    type: 'map',
                    geoIndex: 0,
                    data:dataList
                }
            ]
        };
        
      // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
      // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // 点击事件
        myChart.on('click', function (params) {
          alert(params.name+':'+params.seriesName+':'+params.value);
        });



 });