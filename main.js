// function close_box(){
// 	$('#heading').removeClass('active');
// }
console.log('loaded');

var panels = $(".section");
panels.click(jaccordian);

function jaccordian (event) {

	var target = event.target;


	if (target.id === "heading1") {
		console.log("You clicked heading 1");
		$("#panel1").toggleClass("open");
		$("#panel2").toggleClass("close");
		$("#panel3").toggleClass("close");
	};

	if (target.id === "heading2") {
		console.log("You clicked heading 2");
		$("#panel2").toggleClass("open");
		$("#panel1").toggleClass("close");
		$("#panel3").toggleClass("close");
	};

	if (target.id === "heading3") {
		console.log("You clicked heading 3");
		$("#panel3").toggleClass("open");
		$("#panel1").toggleClass("close");
		$("#panel2").toggleClass("close");
	};

	// if($(target.id)===(".open")) {
            

	// }



	// if (target.id === "heading2") {
	// 	console.log("You clicked heading 2");
	// 	$("#panel2").toggleClass("open")

	// } 

	// if (target.id === "heading3") {
	// 	console.log("You clicked heading 3");
	// 	$("#panel3").toggleClass("open");
	// } 

}
	
	// $("#panel2").toggleClass("open");
	// $("#panel3").toggleClass("open");

	// console.log("click");
	// console.log($("#panel1"));


// }



// // var jqueryPanel1 = $("#heading1");
// jqueryPanel1.click(jaccordian);
//  if ($("#heading1")===(".active")) {
//  	close_jqueryPanel2();
//  }


// var jqueryPanel2 = $(".section2");
// jqueryPanel2.click(jaccordian);

// var jqueryPanel3 = $(".section3");
// jqueryPanel3.click(jaccordian);



