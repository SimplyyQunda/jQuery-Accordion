// function close_box(){
// 	$('#heading').removeClass('active');
// }
console.log('loaded');

function jaccordian() {

	$("#panel1").toggleClass("open");
	$("#panel2").toggleClass("open");
	$("#panel3").toggleClass("open");

	console.log("click");
	console.log($("#panel1"));

}

var jqueryPanel1 = $("#heading1");
jqueryPanel1.click(jaccordian);

var jqueryPanel2 = $("#heading1");
jqueryPanel2.click(jaccordian);

var jqueryPanel3 = $("#heading1");
jqueryPanel3.click(jaccordian);





