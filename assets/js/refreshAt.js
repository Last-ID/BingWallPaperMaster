function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();
    if (now.getHours() > hours || (now.getHours() == hours && now.getMinutes() > minutes) || now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);
    var timeout = (then.getTime() - now.getTime());
    setTimeout(function () {
        //$("#bottom").load(location.href + " #bottom")
        window.location.reload(true);
        //this line is to watch the result in console , you can remove it later	
        console.log("Refreshed");
    }, timeout);
}