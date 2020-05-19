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
		return Result(json[fi]);
	} else {
		return "Bird not found."
	}
}
function get_bird_by_index(index){
	try {
		return Result(json[index]);
	} catch(e) {
		return "Bird not found."
	}
}
function search(args){
	let keyword = args.keyword;
	let matches = [];
}
class Result{
	constructor(json){
		this.json = json;
	}
	html(){
		let htmlval = [];
		for (var i = 0; i < this.json.length; i ++){
			htmlval.append("<h3>"+this.json[i].name+"</h3><p>Family: "+this.json[i].type[0]+"s / "+this.json[i].type[0]+"</p>")
		}
		return html;
	}
	csv(){
		var json = this.json;
		var fields = Object.keys(json[0])
		var replacer = function(key, value) { return value === null ? '' : value } 
		var csv = json.map(function(row){
		  return fields.map(function(fieldName){
		    return JSON.stringify(row[fieldName], replacer)
		  }).join(',')
		})
		csv.unshift(fields.join(',')) // add header column
		return csv.join('\r\n');
	}
}