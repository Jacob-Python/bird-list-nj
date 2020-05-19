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
			itemtext = item.type[0].toLowerCase();
			let count1 = (itemtext.match(RegExp(keyword, 'g')) || []).length;
			itemtext = item.type[1].toLowerCase();
			let count2 = (itemtext.match(RegExp(keyword, 'g')) || []).length;
			count = count1 + count2 / 2;
		}
		if (count < 1) {
			matches.push(count)
		}
	}
	let tmatches = matches;
	matches = matches.sort();
	if (!order) {
		let temp = [];
		for (var i = matches.length; i > 0; i --){
			temp.push(matches[i])
		}
		matches = temp;
	}
	for (var i = 0; i < matches.length; i ++){
		outdata.push(tmatches.indexOf(matches[i]))
	}
	let jsont = [];
	for (var i = 0; i < matches.length; i ++){
		if (JSON.stringify(json[outdata[i]]) != undefined) {
			jsont.push(JSON.stringify(json[outdata[i]])+"<br>")
		}
	}
	return jsont;
}