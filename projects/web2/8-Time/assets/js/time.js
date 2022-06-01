var showTime = document.querySelector("#theTime")
function myTimer() {
    var d = new Date();
    showTime.innerHTML = d.toLocaleTimeString();
}

myInterval = setInterval(myTimer, 1000)
var showDay = document.querySelector("#theDay")
window.onload = function(){
    window.addEventListener("keydown", function(e) {
        myInterval = setInterval(myTimer, 1000)
        if(e.key === "d") {
            whatDay()
        }
        if(e.key === "m") {
            whatMonth()
        }
        if(e.key === "y") {
            whatYear()
        }
        if(e.key === "a"){
            var a = new Date();
            var date = a.getDate();
            var b = new Date();
            var month = b.getMonth() + 1;
            var c = new Date();
            var year = c.getFullYear();
            showDay.innerHTML = `${year}-${month}-${date}`
        }

    })
    
}

function whatDay() {
    var c = new Date();
    var day = c.getDay();
    switch(day) {
        case 0:
            showDay.innerHTML = ("Söndag")
           break;
        case 1:
            showDay.innerHTML = ("Måndag")
            break;
        case 2:
            showDay.innerHTML = ("Tisdag")
            break;
        case 3:
            showDay.innerHTML = ("Onsdag")
            break;
        case 4:
            showDay.innerHTML = ("Torsdag")
            break;
        case 5:
            showDay.innerHTML = ("Fredag")
            break;
        case 6:
            showDay.innerHTML = ("Lördag")
            break;
       default:
            showDay.innerHTML = ("Idag är en dag.")   
    }
}

function whatMonth() {
    var c = new Date();
    var month = c.getMonth();
    switch(month) {
        case 0:
            showDay.innerHTML = ("Januari")
           break;
        case 1:
            showDay.innerHTML = ("Februari")
            break;
        case 2:
            showDay.innerHTML = ("Mars")
            break;
        case 3:
            showDay.innerHTML = ("April")
            break;
        case 4:
            showDay.innerHTML = ("Maj")
            break;
        case 5:
            showDay.innerHTML = ("Juni")
            break;
        case 6:
            showDay.innerHTML = ("Juli")
            break;    
        case 7:
            showDay.innerHTML = ("Augusti")
            break;
        case 8:
            showDay.innerHTML = ("September")
            break;
        case 9:
            showDay.innerHTML = ("Oktober")
            break;
        case 10:
            showDay.innerHTML = ("November")
            break;
        case 11:
            showDay.innerHTML = ("December")
            break;
       default:
            showDay.innerHTML = ("En Månad.")
    
    } 
}

function whatYear() {
    var c = new Date();
    var year = c.getFullYear();
    showDay.innerHTML = year
}