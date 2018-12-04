var images = ["assets/images/bulbasaur.png",
"assets/images/charizard.png",
"assets/images/eevee.png",
"assets/images/jigglypuff.png",
"assets/images/pikachu.png"];

//vanila javascript

/*document.getElementById('choosepk').onclick = function() {
    var x = Math.floor((Math.random() * images.length));
    document.getElementById('mypoke').src = images[x];
}*/

//jquery version

$('#choosepk').click(function(){
	var x = Math.floor((Math.random() * images.length));
	$('#mypoke').attr("src", images[x]);
	$('#mypoke').addClass("blurred");
})

$('#mypoke').click(function() {
	$("#mypoke").removeClass("blurred");
})
