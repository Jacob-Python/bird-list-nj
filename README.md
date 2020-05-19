# bird-list-nj
 A JSON list of all (or most) New Jersey birds.

# Features
The repo includes an HTML page and parser. Below is the documentation.

# Documentation
```javascript
search(JSON args)
```
Search the database. The args are:
Argument | Function
-------- | ---------
```keyword``` | Keyword to search for, use. Subparameters are "type" for searching by different things and "value" for search keyword.
```order``` | Sort the result by this argument.
```genus``` | Search by genus.

```javascript
get_bird_by_latin(String name)
```
Get info on a bird by Latin name. If no such bird is found it throws a ```BirdNotFound``` error.

```javascript
get_bird_by_common(String name)
```
Get info on a bird by common name. If no such bird is found it throws a ```BirdNotFound``` error.
```javascript
get_bird_by_index(index)
```
Get info on a bird by common name. If no such bird is found it throws an error.