
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    colour = "black";
    width_of_line = 2;

  var width= screen.width;
  var new_width= screen.width-70;
  var new_height= screen.height-300;

  if(width<992){
      document.getElementById("myCanvas").width=new_width;
      document.getElementById("myCanvas").height=new_height;
      document.body.style.overflow="hidden";
  }
////Sanvi's birthday is the best///

 canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(e){
     console.log("touchstart");
     last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
     last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
     console.log(last_position_of_x);
     console.log(last_position_of_y);
     colour= document.getElementById("colour_input").value;
     width_of_line= document.getElementById("width_input").value;
 }
 canvas.addEventListener("touchmove", my_touchmove);
////30 june left/////
function my_touchmove(e){
    console.log("my_touchmove");
    current_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y= e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth= width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("last_position of X & Y =");
    console.log("x-" + last_position_of_x + "y-" + last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}

function Sanvi(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}