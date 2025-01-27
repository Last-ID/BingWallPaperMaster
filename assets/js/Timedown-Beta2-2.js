function TimeDown(id, startDateStr, endDateStr, style) {
    //当前时间
    var nowDate = new Date();
    //开始时间
    var startDate = new Date(startDateStr);
    //结束时间
    var endDate = new Date(endDateStr);

    //[开始]相差的总秒数
    var totalStartSeconds = parseInt((startDate - nowDate) / 1000);
    //[结束]相差的总秒数
    var totalEndSeconds = parseInt((endDate - nowDate) / 1000);

    //[开始]天数
    var StartDays = Math.floor(totalStartSeconds / (60 * 60 * 24));
    //[结束]天数
    var EndDays = Math.floor(totalEndSeconds / (60 * 60 * 24));

    //[开始]取模（余数）
    var StartModulo = totalStartSeconds % (60 * 60 * 24);
    //[结束]取模（余数）
    var EndModulo = totalEndSeconds % (60 * 60 * 24);

    //[开始]小时数
    var StartHours = Math.floor(StartModulo / (60 * 60));
    StartModulo = StartModulo % (60 * 60);
    //[结束]小时数
    var EndHours = Math.floor(EndModulo / (60 * 60));
    EndModulo = EndModulo % (60 * 60);

    //[开始]分钟
    var StartMinutes = Math.floor(StartModulo / 60);
    //[结束]分钟
    var EndMinutes = Math.floor(EndModulo / 60);

    //[开始]秒
    var StartSeconds = StartModulo % 60;
    //[结束]秒
    var EndSeconds = EndModulo % 60;


    var StartDayscut = StartDays;
    var cutTime = 22;


    //输出到页面
    if (style=="d") {
        document.getElementById(id).innerHTML = " 还有" + StartDays + "天";// + "(nowHours:" + nowHours+")" + "(进位时刻"+cutTime+":00  输出：" + StartDayscut + "day(s))";
    }
    else if(style=="time")
    {
    }

    //延迟一秒执行自己
    setTimeout(function () {
        TimeDown(id, startDateStr, endDateStr,style);
    }, 1000)
}
function TimeGet(id, style){

    var nowHours = nowDate.getHours();
    var nowMinutes = nowDate.getMinutes();
    var nowDay = nowDate.getUTCDay();
    var nowDate = nowDate.getUTCDate();
    var nowMonth = nowDate.getUTCMonth();
    document.getElementById(id).innerHTML =nowMonth+"月"+nowDate+"日"+nowHours+":"+nowMinutes;
    //延迟一秒执行自己
    setTimeout(function () {
        TimeGet(id,style);
    }, 1000)

}