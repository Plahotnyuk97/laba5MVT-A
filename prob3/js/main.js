function getTime(n) {
	var a, b, c;
	var res = "";
	a = Math.floor(n / 3600);
	n = n % 3600;
	b = Math.floor(n / 60);
	n = n % 60;
	c = n;
	
	if(a < 10){
		res += "0" + a;
	}
	else if(a == 0){
		res += "00";
	}
	else{
		res += a;
	}
	res += ":";

	if(b < 10){
		res += "0" + b;
	}
	else if(b == 0){
		res += "00";
	}
	else{
		res += b;
	}
	res += ":";

	if(c < 10){
		res += "0" + c;
	}
	else if(c == 0){
		res += "00";
	}
	else{
		res += c;
	}
	return res;

}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask3() {
	assert(getTime(20423) == "05:40:23", "Case '20423'");
	assert(getTime( 5320) == "01:28:40", "Case '5320'");
	assert(getTime(23630) == "06:33:50", "Case '23630'");
	assert(getTime(20381) == "05:39:41", "Case '20381'");
	assert(getTime(42718) == "11:51:58", "Case '42718'");
	assert(getTime(30002) == "08:20:02", "Case '30002'");
	assert(getTime( 3010) == "00:50:10", "Case '3010'");
	assert(getTime(20437) == "05:40:37", "Case '20437'");
	assert(getTime(40315) == "11:11:55", "Case '40315'");
	assert(getTime(18392) == "05:06:32", "Case '18392'");
	console.log("Done!");
}

runTask3();