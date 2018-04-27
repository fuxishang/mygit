function animate(obj,target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var step = (target - obj.offsetLeft) / 10;
            step = step>0?Math.ceil(step):Math.floor(step);
            obj.style.left = obj.offsetLeft + step + 'px';
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
            }
        },30)
    }

    // 上面是动画函数封装，接下来，执行逻辑操作

    /* 准备工作 */
    var box = document.getElementById('all');
    var ul = document.getElementById('ul');
    var ulis = ul.children;
    var wt = 380;//一张图片的宽度
    //因为我们需要无缝滚动，所以要在最后面克隆一个第一张
    ul.appendChild(ul.children[0].cloneNode(true));//加true深层复制
    // var ol = document.createElement('ol');
    // box.appendChild(ol);
    // for(var i = 0; i < ulis.length - 1; i ++){
    //     var li = document.createElement('li');
    //     li.innerText = i + 1;//给小圆点添加数字内容
    //     ol.appendChild(li);
    // }


    /* 开始动画部分 */
    // var olis = ol.children;
    // for(var i = 0 ; i < olis.length; i ++){
    //     olis[i].index = i;//给每个oli添加index索引
    //     olis[i].onmouseover = function(){
    //         for(var j = 0; j < olis.length; j ++){
    //             olis[j].className = '';
    //         }
    //         this.className = 'current';
    //         animate(ul,-this.index*wt)
    //         key = sq = this.index;
    //     }
    // }

    /* 添加计时器，让他自己动起来 */
    var timer = null;
    var key = 0;//表示当前真正显示的图片的索引
    // var sq = 0;//表示当前选中的小圆点的索引
    timer = setInterval(autoplay,3000);

    function autoplay(){
        key++;
        if(key > ulis.length - 1){
            ul.style.left = '0px';
            key = 1;
        }
        animate(ul,-key * wt);
        // sq ++;
        // if(sq > olis.length - 1){
        //     sq = 0;
        // }
        // for (var k = 0; k < olis.length; k++) {
        //     olis[k].className = '';
        // }
        // olis[sq].className = 'current';
    }


    // box.onmouseover = function(){
    //     clearInterval(timer);
    // }
    // box.onmouseout = function(){
    //     timer = setInterval(autoplay,2000);
    // }