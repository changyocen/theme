var can=document.getElementsByTagName("canvas")[0];
var ctx=can.getContext("2d");
var str = "10";
can.width=1900;
can.height=800;
var fontSize=20;
ctx.font=fontSize+"px '宋体'";

var ment=can.width/fontSize;
var oo=[];
for(a=0;a<ment;a++){
    oo[a]=0;
}
setInterval(fun, 100);
function fun(){
    ctx.fillStyle="rgba(10,10,10,0.1)";
    ctx.fillRect(0,0,1900,1920);

    ctx.fillStyle="#0f0";
    for(var i=0;i<oo.length;i++){
        ctx.fillText(str[Math.floor(Math.random()*str.length)],fontSize*i, fontSize*oo[i] );

        oo[i]++;
        if(fontSize*oo[i]>can.height&&Math.random()>0.9) {
            oo [i] = 0;
        }
    }
}