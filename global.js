
window.onload = function(){
	
	if(location.origin === "file://"){
		var links = document.getElementsByTagName("a");
		for(var i = 0; i < links.length; i += 1){
			var local_href = links[i].getAttribute("data-local");
			if(local_href){
				links[i].setAttribute("href", local_href);
			}
		}
	}
	
	var textures = document.getElementById("textures");
	
	if(textures){
		
		textures.style.transition =
		textures.style.webkitTransition =
		textures.style.mozTransition =
			"background 0.2s ease-in-out";
		
		var tiles = textures.children;
		for(var i = 0; i < tiles.length; i += 1){ (function(tile, i){
			var img = tile.children[0];
			if(img && img.src){
				
				tile.onmouseenter = function(){
					textures.style.backgroundImage = 'url("'+img.src+'")';
				};
				tile.onmouseleave = function(){
					//textures.style.backgroundImage = "";
				};
				
				tile.style.transition =
				tile.style.webkitTransition =
				tile.style.mozTransition =
					"opacity 0.5s ease-in-out";
				
				/*if((i%2)==0){
					var spacer = document.createElement("div");
					spacer.className = "spacer";
					textures.insertBefore(spacer, tile);
				}*/
			}
		})(tiles[i], i); }
		
	}
	
};
