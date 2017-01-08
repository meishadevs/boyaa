//jQuery的入口函数
$(document).ready(function () {

    //设置顶部导航栏
    setNav();

    //设置大banner
    setBanner();

    //回到顶部
    gotoTop();

    //处理轮播图上的逻辑
    setSlider();

    ////改变头部导航栏
    //changeTopNav();
});

//设置顶部导航栏
function setNav()
{
    //获得顶部导航栏下的所有a标签
    var navAs = $("#nav a");

    //获得并不导航栏中所有的a标签
    //给a标签添加一个点击事件
    $("#nav a").on("click", function () {

        //清空a标签上所有的current类
        $("#nav a").removeClass("current");

        //给当前点击的a标签添加一个current类
        $(this).addClass("current");
    });
}

function setBanner()
{
    //获得slider下的li标签
    var sliderLis = $("#slider li");

    //轮播图中图片的下标
    var thatIndex = 0;
    var timer = null;

    //遍历li标签,并且为li标签设置背景图片和css样式
    //sliderLis数组中存放了所有的li标签
    //index：数组的下标
    //ele：li标签(ele是一个dom对象，使用jQuery之前需要先转换为jQuery对象)
    $.each(sliderLis, function (index, ele) {
        $(ele).css({
            "background" : "url(images/banner" + (index + 1) + ".jpg)",
            "background-repeat" : "no-repeat",
            "background-position" : "top center",
        });

        //隐藏li标签
        $(ele).hide();
    });

    //显示第一个li标签
    sliderLis.eq(0).show();

    //创建ol标签
    var $ol = $("<ol></ol>");

    //将ol标签添加到id为circle的div标签上
    $("#circle").append($ol);

    //遍历轮播图上的li标签
    $.each(sliderLis, function (index, ele) {

        //创建li标签
        var $li = $("<li></li>");

        //设置li标签中的文本
        $li.text(index);

        //将li标签添加到ol标签上
        $ol.append($li);
    });

    //选中第1个小圆点
    $("#circle li").eq(0).addClass("on");

    //给小圆点添加一个点击事件
    $("#circle li").on("click", function () {

        //只有当前用户点击的小圆点的下标与正在播放的轮播图的下标不同时，才播放当前与用户点击的小圆点对应的轮播图
        if($(this).index() != thatIndex)
        {
            //获得当前点击的小圆点的下标
            //并且将下标转换成轮播图中图片的下标
            thatIndex = parseInt($(this).text());

            //选中小圆点
            $("#circle li").removeClass("on");
            $(this).addClass("on");

            //播放轮播图
            sliderLis.hide();
            sliderLis.eq(thatIndex).show();
            sliderLis.eq(thatIndex).css("opacity", "0");
            animate(sliderLis[thatIndex], {opacity: 100}, 40);
        }
    });

    //创建定时器,用于实现图片的自动轮播
    timer = setInterval(autoPlaySlider, 3000);

    //鼠标放在banner上
    $("#banner").mouseleave(function () {
        //关闭定时器
        clearInterval(timer);
    });

    //鼠标离开banner
    $("#banner").mouseleave(function () {
        clearInterval(timer);

        //创建定时器,用于实现图片的自动轮播
        timer = setInterval(autoPlaySlider, 3000);
    });

    //图片自动轮播
    function autoPlaySlider()
    {
        //如果播放完了最后一张
        //从第1张开始播放
        thatIndex = ++thatIndex > sliderLis.length - 1 ? 0 : thatIndex;

        //选中小圆点
        $("#circle li").removeClass("on");
        $("#circle li").eq(thatIndex).addClass("on");

        //图片轮播
        sliderLis.hide();
        sliderLis.eq(thatIndex).show();
        sliderLis.eq(thatIndex).css("opacity", "0");
        animate(sliderLis[thatIndex], {opacity: 100}, 60);
    }
}

//回到顶部
function gotoTop()
{
    var goTop = $("goTop");

    var leader = 0;
    var target = 0;
    var timer = null;

    //监听浏览器滑动
    $(window).scroll(function () {

        //如果滑动了浏览器的滑块，显示回到顶部按钮
        $(document).scrollTop() > 0 ? $("#goTop").show() : $("#goTop").hide();

        //把滑块滑动的距离给起始位置
        leader = $(document).scrollTop();
    });

    //个回到顶部按钮添加一个点击事件
    $("#goTop").on("click", function () {

        clearInterval(timer);

        target = 0;

        timer = setInterval(function()
        {
            leader = leader + (target - leader ) / 10;

            //去往页面的某个位置
            window.scrollTo(0,leader);

            if(leader == target)
            {
                clearInterval(timer);
            }
        }, 10);
    });
}

//处理 轮播图上的逻辑
function setSlider()
{
    var w_slider = $("#w_slider");

    //获得承载轮播图的盒子
    var slider_main = $("#slider_main");

    //获得所有产品
    var arrayProduct = $(".slider-main-product");

    //获得所有小圆点
    var arrayCircle = $("#slider_ctrl li");

    //标记当前的索引
    var thatIndex = 0;

    //获得最大的盒子的宽度
    var scrollWidth = w_slider.width();

    //获得需要轮播的轮播图
    var arraySlider = $(".slider-main-img");

    //当前轮播图的索引
    var iNow = 0;

    //当鼠标放在产品上
    arrayProduct.on("mouseenter", function () {

        //修改产品名称的颜色
        var h5 = this.getElementsByTagName("h5")[0];
        var span = this.getElementsByTagName("span")[0];
        $(h5).css("color", "#fff");
        $(span).css({
            "color" : "#fff",
            "background" : "url(images/arrow_hover.png)",
            "background-repeat" : "no-repeat",
            "background-position" : "center right"
        });
    });

    //当鼠标离开产品
    arrayProduct.on("mouseleave", function () {

        //修改产品名称的颜色
        var h5 = this.getElementsByTagName("h5")[0];
        var span = this.getElementsByTagName("span")[0];
        $(h5).css("color", "#444866");
        $(span).css({
            "color" : "#38B774",
            "background" : "url(images/arrow.png)",
            "background-repeat" : "no-repeat",
            "background-position" : "center right"
        });
    });

    //将第1张到第4张轮播图移动到最右边
    for(var i = 1; i < arraySlider.length; i++)
    {
        arraySlider.eq(i).css("left", scrollWidth);
    }

    //给小圆点添加一个点击监听
    arrayCircle.on("click", function () {

        //获得小圆点上的数字
        thatIndex = parseInt(this.innerHTML);

        //轮播图向左轮播
        if(thatIndex > iNow)
        {
            //将当前正在展示的图片慢慢的移到左侧
            arraySlider.eq(iNow).animate({left : -scrollWidth - 1});

            //将当前需要展示的图片快速的移到到右侧
            arraySlider.eq(thatIndex).css("left", scrollWidth);
        }
        //轮播图向右播放
        else if(thatIndex < iNow)
        {
            //将当前正在展示的图片慢慢的移到右侧
            arraySlider.eq(iNow).animate({left : scrollWidth});

            //将当前需要展示的图片快速移到左侧
            arraySlider.eq(thatIndex).css("left", -scrollWidth);
        }

        iNow = thatIndex;

        //将当前需要展示的图片慢慢的移到舞台中央
        arraySlider.eq(thatIndex).animate({left : 0});

        //选中小圆点
        setCircle(arrayCircle, thatIndex);
    });


    var timer = null;

    //创建定时器,用于自动播放轮播图
    timer = setInterval(autoPlay, 4000);

    //当鼠标放在轮播图上
    w_slider.on("mouseenter", function () {

        //清除定时器
        clearInterval(timer);
    });

    //当鼠标离开轮播图
    w_slider.on("mouseleave", function () {

        clearInterval(timer);

        //创建定时器,用于自动播放轮播图
        timer = setInterval(autoPlay, 4000);
    });

    //自动播放轮播图
    function autoPlay()
    {
        //将当前展示在舞台中央的轮播图慢慢的移动到最左侧
        arraySlider.eq(iNow).animate({left : -scrollWidth - 1});

        //获得下一个轮播图的索引
        iNow = ++iNow > arraySlider.length - 1 ? 0 : iNow;

        //将下一个轮播图放在舞台的右侧(因为轮播图自动播放的方向是向左)
        arraySlider[iNow].style.left = scrollWidth + "px";


        //将下一个轮播图慢慢的移动到舞台中央
        arraySlider.eq(iNow).animate({left : 0});

        //选中小圆点
        setCircle(arrayCircle, iNow);
    }
}

//改变顶部导航栏
function changeTopNav()
{
    //记录滑动滑块之前的位置
    var start = 0;

    //记录滑动滑块之后的位置
    var end = 0;

    //监听滑块滑动
    $(document).scroll(function () {

        //获得滑块滑动的距离
        end = $(window).scrollTop();
        console.log("end = " + end);

        //滑块向下滑动了
        if(end > start)
        {
            //获得头部导航栏的高度
            var navTop = $(".header").height();

            //如果滑块向下滑动的距离超过了顶部导航栏的高度,就隐藏顶部导航栏
            if(end > navTop)
            {
                //使用淡出效果隐藏导航栏
                $(".header").fadeOut(1000);
            }
        }
        //滑块向上滑动了
        else if(end <= 0)
        {
            $(".header").css("display", "block");

            //使用淡入效果显示导航栏
            $(".header").fadeIn();
        }

        start = end;
    });
}


/**
* 选中了小圆点
* @param array 保存小圆点的数组
* @param index 选中的小圆点的下标
*/
function setCircle(array, index) {

    //清除小圆点上所有的类
    array.removeClass();

    //给最后一个小圆点添加一个"last"类
    array.eq(array.length - 1).addClass("last");

    //给当前选中的小圆点添加"on"类，其他小圆点移除"on"类
    array.eq(index).addClass("on").siblings().removeClass("on");
}