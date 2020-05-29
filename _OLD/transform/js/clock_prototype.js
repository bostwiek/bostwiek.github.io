var carousel1 = $(".carousel1"),
    carousel2 = $(".carousel2"),
    currdeg1  = 0,
    currdeg2  = 0;

$(".next1").on("click", { d: "n" }, rotate);
$(".prev1").on("click", { d: "p" }, rotate);

$(".next2").on("click", { d: "n" }, rotate10);
$(".prev2").on("click", { d: "p" }, rotate10);

function rotate(e){
  if(e.data.d=="n"){
    currdeg1 = currdeg1 - 60;
  }
  if(e.data.d=="p"){
    currdeg1 = currdeg1 + 60;
  }
  carousel1.css({
    "-webkit-transform": "rotateY("+currdeg1+"deg)",
    "-moz-transform": "rotateY("+currdeg1+"deg)",
    "-o-transform": "rotateY("+currdeg1+"deg)",
    "transform": "rotateY("+currdeg1+"deg)"
  });
}

function rotate10(e){
  if(e.data.d=="n"){
    currdeg2 = currdeg2 - 36;
  }
  if(e.data.d=="p"){
    currdeg2 = currdeg2 + 36;
  }
  carousel2.css({
    "-webkit-transform": "rotateY("+currdeg2+"deg)",
    "-moz-transform": "rotateY("+currdeg2+"deg)",
    "-o-transform": "rotateY("+currdeg2+"deg)",
    "transform": "rotateY("+currdeg2+"deg)"
  });


  // for every 10 times bottom rotates, rotate top once
  //bug: A to B after a full rotation snaps 360deg opposite direction

  if (currdeg2 <= -360) {
    currdeg2 = 0;
    $(".next1").click();
  }
}