function addSearchBar(div){
	document.getElementById(div).innerHTML = `<input id="search"></input><br>
		<input id="name" type="checkbox" checked>
		<label for="name">Search by name or by family</label>
		<br>
		<button onclick="searchf()">Search</button>
		<br>
		<p id="result"></p>
		<script>
			function searchf(){
				let r;
				let t = "family";
				if (document.getElementById("name").checked){
					t = "name";
				}
				r = search({"keyword":document.getElementById("search").value,"type":t, "order":true})
				t = [];
				for (var i = 0; i < r.length; i ++){
					t.push("<h3>Name: "+r[i].name+"</h3><br><p>Family: "+r[i].type[0]+"s/"+r[i].type[1]+"</p><br><hr>")
				}
				document.getElementById("result").innerHTML = t;
			}
		</script>`;