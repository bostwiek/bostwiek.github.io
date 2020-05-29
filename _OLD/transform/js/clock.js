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
    degreesSS  = 0;


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

/*
var cH = "2",
	cHH = "3",
	cM = "5",
	cMM = "9",
	cS = "5",
	cSS = "7";
*/
//alert(cH+""+cHH+""+cM+""+cMM+""+cS+""+cSS)


/*===================o
|      Functions     |
o===================*/

function rotateCurrentTime() {

	//=====//
	//HOURS//
	//=====//

	if(cH != 0) {
		var cHR = cH * -480;
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
/*
	cH = xfullTime[0],
	cHH = xfullTime[1],
	cM = xfullTime[2],
	cMM = xfullTime[3],
	cS = xfullTime[4],
	cSS = xfullTime[5];
*/
var cHR = cH * -480,
	cHHR = cHH * -36,
	cMR = cM * -60,
	cMMR = cMM * -36,
	cSR = cS * -60,
	cSSR = cSS * -36,

    hCounter = Number(cH),
    hhCounter = Number(cHH),
    mCounter = Number(cM),
    mmCounter = Number(cMM),
    sCounter = Number(cS),
    ssCounter = Number(cSS);



function addSecond() {

	/*==============o
	|	00:00:0X	|
	o==============*/
	cSSR = cSSR - 36;

	ss.css({
		"-webkit-transform": "rotateX("+cSSR+"deg)",
		"-moz-transform": "rotateX("+cSSR+"deg)",
		"-o-transform": "rotateX("+cSSR+"deg)",
		"transform": "rotateX("+cSSR+"deg)"
	})

	ssCounter = ssCounter+1;

	if (ssCounter == 10) {

		/*==============o
		|	00:00:X0	|
		o==============*/

		cSR = cSR - 60;
		
		s.css({
			"-webkit-transform": "rotateX("+cSR+"deg)",
			"-moz-transform": "rotateX("+cSR+"deg)",
			"-o-transform": "rotateX("+cSR+"deg)",
			"transform": "rotateX("+cSR+"deg)"
		})

		ssCounter = 0;
		sCounter = sCounter + 1

		if (sCounter == 6) {


			/*==============o
			|	00:0X:00	|
			o==============*/

			cMMR = cMMR - 36;
			
			mm.css({
				"-webkit-transform": "rotateX("+cMMR+"deg)",
				"-moz-transform": "rotateX("+cMMR+"deg)",
				"-o-transform": "rotateX("+cMMR+"deg)",
				"transform": "rotateX("+cMMR+"deg)"
			})

			sCounter = 0;
			mmCounter = mmCounter + 1

			if (mmCounter == 10) {

				/*==============o
				|	00:X0:00	|
				o==============*/

				cMR = cMR - 60;
				
				m.css({
					"-webkit-transform": "rotateX("+cMR+"deg)",
					"-moz-transform": "rotateX("+cMR+"deg)",
					"-o-transform": "rotateX("+cMR+"deg)",
					"transform": "rotateX("+cMR+"deg)"
				})

				mmCounter = 0;
				mCounter = mCounter + 1

				if (mCounter == 6) {

					/*==============o
					|	0X:00:00	|
					o==============*/

					cHHR = cHHR - 36;
					
					hh.css({
						"-webkit-transform": "rotateX("+cHHR+"deg)",
						"-moz-transform": "rotateX("+cHHR+"deg)",
						"-o-transform": "rotateX("+cHHR+"deg)",
						"transform": "rotateX("+cHHR+"deg)"
					})

					mCounter = 0;
					hhCounter = hhCounter + 1

					if (hhCounter == 10) {

						/*==============o
						|	X0:00:00	|
						o==============*/

						cHR = cHR - 480;
						
						h.css({
							"-webkit-transform": "rotateX("+cHR+"deg)",
							"-moz-transform": "rotateX("+cHR+"deg)",
							"-o-transform": "rotateX("+cHR+"deg)",
							"transform": "rotateX("+cHR+"deg)"
						})

						hCounter = hCounter + 1
					//end h
					}

					if (hhCounter == 4 && hCounter == 2) {
						// if 24:00:00, set everything to 00:00:00	
							hCounter = 0;
							hhCounter = 0;
							mCounter = 0;
							mmCounter = 0;
							sCounter = 0;
							ssCounter = 0;

							cHR = 0;
							cHHR = 0;
							cMR = 0;
							cMMR = 0;
							cSR = 0;
							cSSR = 0;

							h.css({
								"-webkit-transform": "rotateX("+cHR+"deg)",
								"-moz-transform": "rotateX("+cHR+"deg)",
								"-o-transform": "rotateX("+cHR+"deg)",
								"transform": "rotateX("+cHR+"deg)"
							})
							hh.css({
								"-webkit-transform": "rotateX("+cHHR+"deg)",
								"-moz-transform": "rotateX("+cHHR+"deg)",
								"-o-transform": "rotateX("+cHHR+"deg)",
								"transform": "rotateX("+cHHR+"deg)"
							})
							m.css({
								"-webkit-transform": "rotateX("+cMR+"deg)",
								"-moz-transform": "rotateX("+cMR+"deg)",
								"-o-transform": "rotateX("+cMR+"deg)",
								"transform": "rotateX("+cMR+"deg)"
							})
							mm.css({
								"-webkit-transform": "rotateX("+cMMR+"deg)",
								"-moz-transform": "rotateX("+cMMR+"deg)",
								"-o-transform": "rotateX("+cMMR+"deg)",
								"transform": "rotateX("+cMMR+"deg)"
							})
							s.css({
								"-webkit-transform": "rotateX("+cSR+"deg)",
								"-moz-transform": "rotateX("+cSR+"deg)",
								"-o-transform": "rotateX("+cSR+"deg)",
								"transform": "rotateX("+cSR+"deg)"
							})							
							ss.css({
								"-webkit-transform": "rotateX("+cSSR+"deg)",
								"-moz-transform": "rotateX("+cSSR+"deg)",
								"-o-transform": "rotateX("+cSSR+"deg)",
								"transform": "rotateX("+cSSR+"deg)"
							})

						//end day
					}

				//end hh
				}

			//end m
			}

		//end mm
		}

	//end s
	}

//end ss
}

rotateCurrentTime();

setInterval(addSecond, 1000);














/*==================o
|      Buttons      |
| going to get rid 	|
|	of these later 	|
o==================*/

/*
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

*/



})