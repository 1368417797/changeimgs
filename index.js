setInterval(next,2000)//计时器调用下一张函数

var n=0;

var p=0;
//切换图片的俩变量
var flag=1;
//鼠标事件的标志变量
var img=document.querySelectorAll("img");

img.forEach(element => {

    element.id="img"+n;
    n=n+1;

})
//设定每张图的id，如需加图直接加然后class=“img”即可
var num=n;
//记录img数便于之后取余运算
n=1;

document.getElementById("img0").style.display = "block";
//初始化n和第一张图

document.getElementById("img").addEventListener('mouseover',change1)

function change1()
{
    flag=2;
}

document.getElementById("img").addEventListener('mouseleave',change2)

function change2()
{
    flag=1;
}
//鼠标事件
document.getElementById("next").addEventListener('click',next);
document.getElementById("last").addEventListener('click',last);

function next()
{
    if(flag == 2)
    {
        return;
    }
    n=n%num;

    var img1="img"+n;
    
    p=p%num;

    var img2="img"+p;

    console.log(n);
    console.log(p);

    document.getElementById([img1]).style.display = "block";
    document.getElementById([img2]).style.display = "none";


    p=p+1;
    n=n+1;
}

function last()
{
    if(flag == 2)
    {
        return;
    }
    var q=n;
    p=p-1;
    n=n-1;
    if(n<0){n=3};
    if(p<0){p=3};
    console.log(n);
    console.log(p);
    var img1="img"+n;

    var img2="img"+q;
    document.getElementById([img1]).style.display = "block";
    document.getElementById([img2]).style.display = "none";

}
//两个函数下一张和上一张
