var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var imgList = new Array();
var wrapper = null; 
var spriteIndex = 0;
var spriteX = 0;
var spriteY = 0;

init = function() {
  for (var i=0; i<6; ++i)
  {
    imgList.push(new Image());
    imgList[i].src = "img/Frame" + i + ".png"; 
  }

  var img = document.createElement('IMG');
  img.src=  "img/Frame0.png";
  img.className = 'precarga';
  img.elemento = imgList[0];

  document.getElementsByTagName('BODY')[0].appendChild(img);

  canvas.width = 1000; 
  canvas.height = 204;
  img.onload = function(){
    ctx.fillStyle = "rgba(109,73,138,1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(this.elemento,0,0,this.width,this.height);
    this.parentNode.removeChild(this);
  }
  wrapper = document.getElementById("wrapper");
  wrapper.appendChild(canvas);
} //init
document.onkeydown = function (event) {
    var teclaC; 

    if ( event == null ) {
        teclaC = window.event.keyCode;
    }
    else {  
        teclaC = event.keyCode;
    }

    switch (teclaC) {
        case 39:animateFrame(1);
            break;  
        case 37:animateFrame(-1);
            break;  
        default: resetFrames();
    }
}
updateCanvas = function (){  
  ctx.fillStyle = "rgba(109,73,138,1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(imgList[spriteIndex],spriteX,spriteY,imgList[spriteIndex].width,imgList[spriteIndex].height);
}
animateFrame = function (dir) {
   if ( dir > 0)
   {
        spriteIndex = ( spriteIndex >= 5 ) ? 0 : ++ spriteIndex;
        spriteX = ( spriteX >= 1000 ) ? 1000 : spriteX + 4;
   }
   else 
   {
        spriteIndex = ( spriteIndex <= 0 ) ? 5 : -- spriteIndex;
        spriteX = ( spriteX <= 0 ) ? 0 : spriteX + 4;
   }
   ctx.clearRect(0,0,canvas.width, canvas.height); 
   updateCanvas();
}
resetFrames = function()
{
   ctx.clearRect(0,0,canvas.width, canvas.height);
   spriteIndex = 0;
   updateCanvas();
}