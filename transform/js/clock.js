var six = $(".six"),
	ten = $(".ten"),
	degreesS = 0,
    degreesSS  = 0,

    secondCounter = 0;

$(".next").on("click", rotateN);
$(".prev").on("click", rotateP);


function rotateN(e){
	degreesSS = degreesSS - 36;
 	ten.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});

	if (secondCounter == 9) {
		secondCounter = 0;
		degreesS = degreesS - 60;
		six.css({
			"-webkit-transform": "rotateX("+degreesS+"deg)",
			"-moz-transform": "rotateX("+degreesS+"deg)",
			"-o-transform": "rotateX("+degreesS+"deg)",
			"transform": "rotateX("+degreesS+"deg)"
		});
	} else {
		secondCounter = secondCounter + 1;
	}

}
function rotateP(e){
	degreesSS = degreesSS + 36;
 	ten.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});

	if (secondCounter == 0) {
		secondCounter = 9;
		degreesS = degreesS + 60;
		six.css({
			"-webkit-transform": "rotateX("+degreesS+"deg)",
			"-moz-transform": "rotateX("+degreesS+"deg)",
			"-o-transform": "rotateX("+degreesS+"deg)",
			"transform": "rotateX("+degreesS+"deg)"
		});
	} else {
		secondCounter = secondCounter - 1;
	}

}
