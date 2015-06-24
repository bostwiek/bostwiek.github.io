var six = $(".six"),
	ten = $(".ten"),
	h = $("#h"),
	hh = $("#hh"),
	m = $("#m"),
	mm = $("#mm"),
	s = $("#s"),
	ss = $("#ss"),
	degreesH = 0,
    degreesHH  = 0,
	degreesM = 0,
    degreesMM  = 0,
	degreesS = 0,
    degreesSS  = 0,

    secondCounter = 0;

$(".next").on("click", rotateN);
$(".prev").on("click", rotateP);
$(".all").on("click", rotateAll);

function rotateN(e){
	degreesSS = degreesSS - 36;
 	ss.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});

	if (secondCounter == 9) {
		secondCounter = 0;
		degreesS = degreesS - 60;
		s.css({
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
 	s.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});

	if (secondCounter == 0) {
		secondCounter = 9;
		degreesS = degreesS + 60;
		s.css({
			"-webkit-transform": "rotateX("+degreesS+"deg)",
			"-moz-transform": "rotateX("+degreesS+"deg)",
			"-o-transform": "rotateX("+degreesS+"deg)",
			"transform": "rotateX("+degreesS+"deg)"
		});
	} else {
		secondCounter = secondCounter - 1;
	}

}

function rotateAll(){
	degreesS = degreesS + 60;
	degreesSS = degreesSS + 36;
	s.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});
	ss.css({
			"-webkit-transform": "rotateX("+degreesS+"deg)",
			"-moz-transform": "rotateX("+degreesS+"deg)",
			"-o-transform": "rotateX("+degreesS+"deg)",
			"transform": "rotateX("+degreesS+"deg)"
	})
}
