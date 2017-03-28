
var index = 0;

window.onload = function()
{
    //设置导航栏
    setNav();

    //改变banner
    changeBanner();

    //刷新banner
    updateBanner();
}

//刷新banner
function updateBanner()
{
    //获得banner中的小圆点
    var circle = getByClass("container", "circle")[0];
    var arrayLi = circle.getElementsByTagName("li");

    var time = setInterval(function()
    {
        if(index >= arrayLi.length)
        {
            index = 0;
        }

        //清除小圆点选中的状态
        clearState(arrayLi);

        //设置最后一个小圆点的CSS样式
        arrayLi[arrayLi.length - 1].style.paddingRight = "0px";

        //设置选中的小圆点的背景图片
        arrayLi[index].className = "current";

        //获得小圆点的下标
        setBanner(index);

        index++;
    },
    2000);
}

//设置导航
function setNav()
{
    //获得类名为header的标签
    var nav = getByClass("container", "nav")[0];

    //获得nav下的a标签
    var arrayA = nav.getElementsByTagName("a");

    for(var i = 0; i < arrayA.length; i++)
    {
        arrayA[i].onmousedown = function()
        {
            clearState(arrayA);
            this.className = "current";
        }
    }
}

//设置banner
function setBanner(index)
{
    //获得banner
    var banner = getByClass("container", "banner")[0];

    //获得banner下的img标签
    var img = banner.getElementsByTagName("img")[0];

    //设置img标签的src属性
    img.src = "images/banner" + parseInt(index + 1) + ".jpg";
}

//改变banner
function changeBanner()
{
    //获得banner中的小圆点
    var circle = getByClass("container", "circle")[0];
    var arrayLi = circle.getElementsByTagName("li");

    //遍历小圆点
    for(var i = 0; i < arrayLi.length; i++)
    {
        //清除小圆点的CSS样式
        arrayLi[i].onmousedown = function()
        {
            //清除小圆点选中的状态
            clearState(arrayLi);

            //设置最后一个小圆点的CSS样式
            arrayLi[arrayLi.length - 1].style.paddingRight = "0px";

            //设置选中的小圆点的背景图片
            this.className = "current";

            //获得小圆点的下标
            index = getIndex(arrayLi, this);
            setBanner(index);
        }
    }
}

//清除选中的状态
function clearState(arrayA)
{
    for(var i = 0; i < arrayA.length; i++)
    {
        arrayA[i].className = "";
    }
}

//获得节点在数组中的下标
function getIndex(arrayNode, node)
{
    for(var i = 0; i < arrayNode.length; i++)
    {
        if(arrayNode[i] == node)
        {
            return i;
        }
    }

}


//根据元素的类名获得元素
function getByClass(parent, className)
{
    parent = parent ? document.getElementById(parent) : document;

    //获得parent下的所有标签
    var arrayElem = parent.getElementsByTagName("*");

    //创建数组,保存类名为className的标签
    var array = [];

    //遍历标签
    for(var i = 0; i < arrayElem.length; i++)
    {
        if(arrayElem[i].className == className)
        {
            array.push(arrayElem[i]);
        }
    }

    return array;
}