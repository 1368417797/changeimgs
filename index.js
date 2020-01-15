setInterval(next,2000)//计时器调用数据

var n=0;

var p=0;

var flag=1;

var img=document.querySelectorAll("img");

img.forEach(element => {

    element.id="img"+n;
    n=n+1;

})

var num=n;

n=1;

document.getElementById("img0").style.display = "block";

document.getElementById("next").addEventListener('click',next);
document.getElementById("last").addEventListener('click',last);

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
console.log(num)
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

