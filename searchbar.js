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
				r = search({"keyword":document.getElementById("search").value,"type":t, "order":false})
				document.getElementById("result").innerHTML = r
			}
		</script>`;