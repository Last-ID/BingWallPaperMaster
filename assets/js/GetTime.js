/*function TimeGet(id, endDateStr) {
    var nowDate = new Date();
    var THours = nowDate.getHours();
    var TMinutes = nowDate.getMinutes();
    var TDay = nowDate.getDay();
    var TYear = nowDate.getFullYear();
    var TMonth = nowDate.getMonth();
    var TDate = nowDate.getDate();
    document.getElementById(id).innerHTML = TYear + "/" + TMonth + "/" + TDate + "--" + THours +
        //延迟一秒执行自己
        setTimeout(function() {
            TimeGet(id, endDateStr);
        }, 1000)
}*/

function formatDate(id, str) {
    var time = new Date();
    var obj = {
        yyyy: time.getFullYear(),
        yy: ('' + time.getFullYear()).slice(-2),
        M: time.getMonth() + 1,
        MM: ('0' + (time.getMonth() + 1)).slice(-2),
        d: time.getDate(),
        dd: ('0' + time.getDate()).slice(-2),
        H: time.getHours(),
        HH: ('0' + time.getHours()).slice(-2),
        h: time.getHours() % 12,
        hh: ('0' + (time.getHours() % 12)).slice(-2),
        m: time.getMinutes(),
        mm: ('0' + time.getMinutes()).slice(-2),
        s: time.getSeconds(),
        ss: ('0' + time.getSeconds()).slice(-2),
        w: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][time.getDay()]
    };
    document.getElementById(id).innerHTML = str.replace(/([a-z]+)/ig, function(item) { return obj[item] });
    //this line is to watch the result in console , you can remove it later	
    //console.log("Refreshed"); 
    //延迟1000ms
    setTimeout(function() {
            formatDate(id, str);
        }, 100)
        //return str.replace(/([a-z]+)/ig, function(item) { return obj[item] });

}