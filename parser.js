window.onload = function(){
	var s = document.createElement("script");
	s.src = "list.js";
	document.head.appendChild(s);
}
function get_bird_by_name(name){
	let f = 0;
	let fi = 0;
	for (let i = 0; i < json.length; i ++){
		if (json[i].name.toLowerCase() == name){
			f = 1;
			fi = i;
		}
	}
	if (f == 0){
		return json[fi]
	} else {
		return "Bird not found."
	}
}
function get_bird_by_index(index){
	try {
		return json[index]
	} catch(e) {
		return "Bird not found."
	}
}
function search(args){
	let keyword = args.keyword.toLowerCase();
	let match_cat = args.type;
	let order = args.order;
	let matches = [];
	let outdata = [];
	for (let item of json){
		let count;
		if (match_cat == "name"){
			itemtext = item.name.toLowerCase();
			count = (itemtext.match(RegExp(keyword, 'g')) || []).length;
		} else {
			itemtext = item.type.toLowerCase();
			count = (itemtext.match(RegExp(keyword, 'g')) || []).length;
		}
		if (count >= 1) {
			matches.push([count,item])
		}
	}
	matches = matches.sort();
	if (!order) {
		let temp = [];
		for (var i = matches.length; i > 0; i --){
			temp.push(matches[i])
		}
		matches = temp;
	}
	let jsont = [];
	console.log(matches)
	for (var i = 0; i < matches.length; i ++){
		jsont.push(matches[i][1])
	}
	return jsont;
}