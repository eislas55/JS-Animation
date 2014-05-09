$(document).keydown(function(tecla){
	switch(tecla.which){
		case 39:
	  		$( ".pedro" ).animate({ "left": "+=50px" });
	  		$( ".face" ).animate({ "right": "-44px"});
			break;
		case 37:
	  		$( ".pedro" ).animate({ "left": "-=50px" } );
	  		$( ".face" ).animate({ "right": "32px"});
	  		$( ".armR" ).animate({'transform':'(30deg)','left': '-82px'});
	  		break;
	}
});