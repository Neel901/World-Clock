setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
	document.getElementById("ist").innerHTML = currentTime;

	currentTime = calcu(hour, min, sec, am_pm, 3, 30);
	document.getElementById("jst").innerHTML = currentTime;
	currentTime = calcu(hour, min, sec, am_pm, -11, -30);
	document.getElementById("mst").innerHTML = currentTime;
	currentTime = calcu(hour, min, sec, am_pm, -3, -30);
	document.getElementById("gst").innerHTML = currentTime;

	// return currentTime;
}
function calcu(h, m, s, ampm, offset_hours, offset_minute) {

	let newh = 0;
	newh=offset_hours + parseInt(h);
	let newmin=0;
	newmin = offset_minute + parseInt(m);
	// console.log(newh, offset_hours)
	if (newmin < 0) {
		newh -= 1;
		newmin += 60;
	}
	if (newmin >= 60) {
		newh += 1;
		newmin -= 60;
	}
	if(newh==12 && ampm=="AM"){
		ampm="PM";
	}

	if (newh == 0) {
		newh = 12;
		ampm = "AM";
	}

	if(newh>12 && ampm=="AM"){
		newh-=12;
		ampm="PM";	
	}
	if(newh>12 && ampm=="PM"){
		newh-=12;
		ampm="AM";	
	}
	if(newh<0 && ampm=="AM"){
		newh+=12;
		ampm="PM"
	}
	if(newh<0 && ampm=="PM"){
		newh+=12;
		ampm="AM"
	}

	newh = newh < 10 ? "0" + newh : newh;
	newmin = newmin < 10 ? "0" + newmin : newmin;
	let currentTime = newh + ":" + newmin + ":" + s + " " + ampm;
	return currentTime;


}
showTime();

