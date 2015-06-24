$(document).ready(function() {

/*===================o
|      Variables     |
o===================*/


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

    hoursCounter = 0,
    hourCounter = 0,
    minutesCounter = 0,
    minuteCounter = 0,
    secondsCounter = 0,
    secondCounter = 0;


/*========================o
|      Reading Time       |
o========================*/


var dt = new Date(),
	dtH = dt.getHours(),
	dtM = dt.getMinutes(),
	dtS = dt.getSeconds();

if(dtH < 10) {
	dtH = "0" + dtH;
}
if(dtM < 10) {
	dtM = "0" + dtM;
}
if(dtS < 10) {
	dtS = "0" + dtS;
}

var fullTime = dtH+""+dtM+""+dtS,
	fullTimeArray = [],
	xfullTime = fullTime.toString();

var cH = xfullTime[0],
	cHH = xfullTime[1],
	cM = xfullTime[2],
	cMM = xfullTime[3],
	cS = xfullTime[4],
	cSS = xfullTime[5];

//alert(cH+""+cHH+""+cM+""+cMM+""+cS+""+cSS)


/*===================o
|      Functions     |
o===================*/

function rotateCurrentTime() {

	//=====//
	//HOURS//
	//=====//

	if(cH != 0) {
		var cHR = cH * -60;
		h.css({
			"-webkit-transform": "rotateX("+cHR+"deg)",
			"-moz-transform": "rotateX("+cHR+"deg)",
			"-o-transform": "rotateX("+cHR+"deg)",
			"transform": "rotateX("+cHR+"deg)"
		})
	}
	if(cHH != 0) {
		var cHHR = cHH * -36;
		hh.css({
			"-webkit-transform": "rotateX("+cHHR+"deg)",
			"-moz-transform": "rotateX("+cHHR+"deg)",
			"-o-transform": "rotateX("+cHHR+"deg)",
			"transform": "rotateX("+cHHR+"deg)"
		})
	}

	//=======//
	//MINUTES//
	//=======//

	if(cM != 0) {
		var cMR = cM * -60;
		m.css({
			"-webkit-transform": "rotateX("+cMR+"deg)",
			"-moz-transform": "rotateX("+cMR+"deg)",
			"-o-transform": "rotateX("+cMR+"deg)",
			"transform": "rotateX("+cMR+"deg)"
		})
	}
	if(cMM != 0) {
		var cMMR = cMM * -36;
		mm.css({
			"-webkit-transform": "rotateX("+cMMR+"deg)",
			"-moz-transform": "rotateX("+cMMR+"deg)",
			"-o-transform": "rotateX("+cMMR+"deg)",
			"transform": "rotateX("+cMMR+"deg)"
		})
	}

	//=======//
	//SECONDS//
	//=======//

	if(cS != 0) {
		var cSR = cS * -60;
		s.css({
			"-webkit-transform": "rotateX("+cSR+"deg)",
			"-moz-transform": "rotateX("+cSR+"deg)",
			"-o-transform": "rotateX("+cSR+"deg)",
			"transform": "rotateX("+cSR+"deg)"
		})
	}
	if(cSS != 0) {
		var cSSR = cSS * -36;
		ss.css({
			"-webkit-transform": "rotateX("+cSSR+"deg)",
			"-moz-transform": "rotateX("+cSSR+"deg)",
			"-o-transform": "rotateX("+cSSR+"deg)",
			"transform": "rotateX("+cSSR+"deg)"
		})
	}

}

//declare rotated variables to 
//save memory when addSecond is called

function addSecond() {
	//going to trigger this function every second
	//need to check if anything makes a full rotation 
	//due to time being dynamically called -_-
	ss.css({
		"-webkit-transform": "rotateX("+degSS+"deg)",
		"-moz-transform": "rotateX("+degSS+"deg)",
		"-o-transform": "rotateX("+degSS+"deg)",
		"transform": "rotateX("+degSS+"deg)"
	})

}






/*===================o
|      Buttons       |
o===================*/


$(".next").on("click", rotateN);
$(".prev").on("click", rotateP);
$(".all").on("click", rotateAll);


//Next
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
		secondsCounter = secondsCounter + 1;
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


//Previous
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


//All
function rotateAll(){
	degreesS = degreesS - 36;
	degreesSS = degreesSS - 60;
	h.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});
	hh.css({
			"-webkit-transform": "rotateX("+degreesS+"deg)",
			"-moz-transform": "rotateX("+degreesS+"deg)",
			"-o-transform": "rotateX("+degreesS+"deg)",
			"transform": "rotateX("+degreesS+"deg)"
	})
	m.css({
		"-webkit-transform": "rotateX("+degreesSS+"deg)",
		"-moz-transform": "rotateX("+degreesSS+"deg)",
		"-o-transform": "rotateX("+degreesSS+"deg)",
		"transform": "rotateX("+degreesSS+"deg)"
	});
	mm.css({
			"-webkit-transform": "rotateX("+degreesS+"deg)",
			"-moz-transform": "rotateX("+degreesS+"deg)",
			"-o-transform": "rotateX("+degreesS+"deg)",
			"transform": "rotateX("+degreesS+"deg)"
	})
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




rotateCurrentTime();

setInterval(addSecond, 1000);

})