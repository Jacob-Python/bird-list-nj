# bird-list-nj
 A JSON list of all (or most) New Jersey birds.

# Features
The repo includes an HTML page and parser. Below is the documentation.

# Documentation
```javascript
search(JSON args)
```
and
```javascript
search_html(JSON args)
```
Search the database. The args are:
Argument | Function
-------- | ---------
```keyword``` | Keyword to search for, use. Subparameters are "type" for searching by different things and "value" for search keyword.
```order``` | Sort the result by this argument.
```genus``` | Search by genus.
```search()``` returns a JSON object.
```search_html()``` returns a formatted HTML text.
If no such bird is found it throws an error.

```javascript
get_bird_by_name(String name)
```
Get info on a bird by common name. If no such bird is found it throws an error.
```javascript
get_bird_by_index(index)
```
Get info on a bird by common name. If no such bird is found it throws an error.

# Sample
`
<html>
	<head>
		<title>Birds of NJ example</title>
		<script src="parser.js"></script>
	</head>
	<body>
		<h1>Search for a bird</h1>
		<input id="search"></input>
		<br>
		<button onclick="search()">Search</button>
		<br>
		<div id="result"></div>
		<script>
			function search(){
				let r;
				try {
					r = get_bird_by_name({"keyword":{"type":"Warbler","name":document.getElementById("search").value}})
				} catch(e) {
					console.log(e)
					document.getElementById("result").innerHTML = "Not found."
				}
				if (r){
					document.getElementById("result").innerHTML = "<p>Name: "+r.name+"</p><p>Type: "+r.type[0]+"</p>"
				}
			}
		</script>
	</body>
</html>
`
