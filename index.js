setInterval(next,2000)
var n=1;
var p=0;
var flag=1;
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
function next()
{
    if(flag == 2)
    {
        return;
    }
    n=n%4;

    var img1="img"+n;
    
    p=p%4;
    var img2="img"+p;
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

