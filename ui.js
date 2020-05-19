function showdiv(id){
	if (document.getElementById(id).hidden){
		document.getElementById(id).hidden = false;
		document.getElementById(id+"a").innerHTML = document.getElementById(id+"a").innerHTML.replace("+","-")
	}else{
		document.getElementById(id).hidden = true;
		document.getElementById(id+"a").innerHTML = document.getElementById(id+"a").innerHTML.replace("-","+")
	}
}