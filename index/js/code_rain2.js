var s = window.screen;
var q=cabg;
var width = q.width = 2000;
var height = q.height = 5000 ;
var letters = Array(256).join(1).split('');
var ctx=q.getContext("2d");
var fontSize=25;
ctx.font=fontSize+"px '楷体'";
//alert(height+"x"+width);
var time=0.05;
var draw = function () {
    var time=Math.ceil(Math.random()*10);
    var r,g,b;
    r=g=b=0;
    q.getContext('2d').fillStyle='rgba(10,0,0,0.05)';//背景颜色
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#0F0';
    letters.map(function(y_pos, index){
        text = String.fromCharCode(34+Math.random()*33);
        //text = String.fromCharCode(3e4+Math.random()*33);//显示中文
        x_pos = index * fontSize;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + fontSize;
        //q.getContext('2d').fillStyle='#D90019';//+letters[index];
        //document.getElementById("ptime").innerText="#"+letters[index];
        //alert(letters[index]);
    });
};
setInterval(draw, 40);

//var q=cabg;