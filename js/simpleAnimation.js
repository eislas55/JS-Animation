var counter = 0;
$(document).keydown(function(tecla){
	switch(tecla.which){
		case 39: //Tecla-derecha
			counter ++;
	  		$( ".pedro" ).animate({ "left": "+=50px" });
	  		$( ".face" ).animate({ "right": "-44px"});
	  		$( ".armR" ).animate({'right': '82px'});
	  		$( ".armL" ).animate({'left': '80px'});
	  		$(".armR").css({'border-color':'black'});
	  		$(".armL").css({'border-color':'red'});
			break;
		case 37: //Tecla-izquierda
			counter ++;
	  		$( ".pedro" ).animate({ "left": "-=50px" } );
	  		$( ".face" ).animate({ "right": "32px"});
	  		$( ".armR" ).animate({'left': '-82px'});
	  		$( ".armL" ).animate({'right': '-82px'});
	  		$(".armL").css({'border-color':'black'});
	  		$(".armR").css({'border-color':'red'});
	  		break;
	}
	if(counter%2==1){
  		$( ".legR" ).removeClass('rotateRPair');
  		$( ".legL" ).removeClass('rotateRUnpair');
  		$( ".legR" ).addClass('rotateRUnpair');
  		$( ".legL" ).addClass('rotateRPair');
		$(".legL").css({'left':'52px'});
		$(".legR").css({'right':'66px'});
  		console.log("impar");
	}
	else{
		$(".legR").css({'right':'2px'});
  		$(".legL").css({'left':'6px'});
  		$( ".legR" ).removeClass('rotateRUnpair');
  		$( ".legL" ).removeClass('rotateRPair');
  		$( ".legR" ).addClass('rotateRPair');
  		$( ".legL" ).addClass('rotateRUnpair');
  		console.log("par");
	}
});