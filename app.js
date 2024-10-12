// JS Clock
let now1 = new Date()
let hour = now1.getHours()
let minute = now1.getMinutes()
let second = now1.getSeconds()
let ampm = ""


let currentTime = ` ${hour} : ${minute}: ${second} ${ampm} `
document.querySelector("#sub").innerHTML = currentTime


// if (hour === 0) {
    
// } else {
    
// }



if (hour >= 9) {
    hour = `${hour} 0`
}
if (second >= 9) {
    second = `${second} 0`
}
if (minute >= 9) {
    minute = `${minute}+ 0`
}


// Saturday octuber 12 2024.
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let now = new Date()


let day = days[now.getDay()]
let month = months[now.getMonth()]
let date = now.getDate()
let year = now.getFullYear()
let currentDate =`${day} ${month} ${date} ${year}`
document.querySelector('#sub2').innerHTML = currentDate
