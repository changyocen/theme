function goFTP() {
    var url;
    url=window.location.href;
    var urls=url.split("/working");
    url=urls[0]+"FTP/";
    window.location.href="/FTP/";
}
function get_time()//获取时间函数
{
    var d=new Array(10);
    var now=new Date();
    d[1]=now.getFullYear()+"年";
    d[2]=now.getMonth()+1+"月";
    d[3]=now.getDate()+"日";
    d[4]=now.getHours()+"点";
    d[5]=now.getMinutes()+"分";
    d[6]=now.getSeconds()+"秒";
    var str=d[1]+d[2]+d[3]+"    "+d[4]+d[5]+d[6]+"  ";
    document.getElementById("ptime").innerText="GMT+8: "+str;
    document.getElementById("ptime").style.color="#d90019";
    document.getElementById("ptime").style.fontSize="25px";
    // function change_ip_size() {
    // }
    setTimeout(get_time,1000);
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function domain() {
    if(!IsPC()){//移动设备
        // window.location.href="/working/updating/";
       document.getElementById("special_day").src="https://cdn.jsdelivr.net/gh/changyocen/theme@1.0/media/img/phone_bg.JPG";
    }else{
        document.getElementById("special_day").src="https://cdn.jsdelivr.net/gh/changyocen/theme@1.0/media/img/temp.png";
    }

}