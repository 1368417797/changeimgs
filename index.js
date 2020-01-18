// imglist,将作为img的src
var img_list = [
    "./img/img1.jpg",
    "./img/img2.png",
    "./img/img3.jpg",
    "./img/img4.jpg",
]
var play_list = img_list
// 自动播放时间
const TIME = 2000
var my_img_show
// 用来clearInterval
var time_controller = null;


window.onload = function () {
    my_img_show = document.getElementById("my-img-show")
    document.getElementById("next").addEventListener("click", nextPicture)
    document.getElementById("last").addEventListener("click", lastPicture)
    my_img_show.addEventListener("mouseover", () => {
        // 清除interval
        clearInterval(time_controller)
        console.warn("stop auto play")
    })
    my_img_show.addEventListener("mouseleave", () => {
        autoPlay()
        console.warn("start auto play")
    })
    // init img 
    // 因为在html里面,src为空.
    updataImg()

    // 上面全是初始化工作


    // 作为入口,开始第一次执行
    autoPlay()
}

/**
 * 更新渲染视图,也就是数据修改了,呈现出来.
 * 如果是现代框架vue的话,数据修改会触发函数,自动通知视图层面更新视图.
 */
function updataImg() {
    my_img_show.setAttribute("src", play_list[0])
}
/**
 * setInterval自行查文档这是个啥.
 * 和setTimeout()一起对比.
 */
function autoPlay() {
    time_controller = setInterval(nextPicture, TIME)
}

function nextPicture() {
    console.log("onnext")
    // 好好看这个.play_list 完全可以只有两个,就像是聚焦框一样,聚焦在img_list上.
    // play_list 是 img_list 的子集
    /**
     * 好奇的话,console看一下,play_list.shift()的返回值,是啥.
     * play_list.shift() pop(),这两个方法的返回值,都是被弹出来的数据.
     * 然后把这个数据作为插入的数据,插入到数组.
     * 实现了把第一个数值移动到最后一个.其他顺着往前移动.
     */
    play_list.push(play_list.shift())
    console.log("play_list:" + play_list)
    updataImg();
}

function lastPicture() {
    console.log("onlast")
    play_list.unshift(play_list.pop())
    console.log("play_list:" + play_list)
    updataImg()
}