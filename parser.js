window.onload = function(){
	var s = document.createElement("script");
	s.src = "list.js";
	document.head.appendChild(s);
}
function get_bird_by_name(name){
	let f = 0;
	let fi = 0;
	for (let i = 0; i < json.length; i ++){
		if (json[i].name == name){
			f = 1;
			fi = i;
		}
	}
	if (f == 0){
		return json[fi];
	} else {
		console.error("No such bird")
	}
}
function get_bird_by_index(index){
	try {
		return json[index];
	} catch(e) {
		console.error("No such bird")
	}
}