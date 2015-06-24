var wheel = $(".wheel"),
    degrees  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);


function rotate(e){
  if(e.data.d=="n"){
    degrees = degrees - 60;
  }
  if(e.data.d=="p"){
    degrees = degrees + 60;
  }
  wheel.css({
    "-webkit-transform": "rotateX("+degrees+"deg)",
    "-moz-transform": "rotateX("+degrees+"deg)",
    "-o-transform": "rotateX("+degrees+"deg)",
    "transform": "rotateX("+degrees+"deg)"
  });
}
