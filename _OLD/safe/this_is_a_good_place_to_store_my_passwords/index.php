<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title></title>
	<link type="text/css" rel="stylesheet" href="css/style.css">
</head>
<body>



	<?php

		//

	/** 

	CURRENT PROJECT:	Set - buttons after player list as delete buttons

	**/



		/*==========================o
		|	 DATABASE CONNECTION 	|
		o==========================*/

		$con = mysql_connect('localhost','bostwiek_admin','asZXC123','bostwiek_game');
		if (!$con) {
		    die('Could not connect: ' . mysql_error($con));
		}

		mysql_select_db($con);
		$sqlPlayer="SELECT * FROM player";
		$sqlMon="SELECT * FROM monsters";

		// THESE TWO LINES JUST DISPLAY THEIR RESPECTIVE TABLES
			include 'playertable.php';
			include 'monstertable.php';
		//NEED TO REMOVE LATER

		mysql_close($con);


		
	?>

	<div id="game_container">

		<?php include 'interface.php'; ?>

	</div>
		


	<?php	

		include 'functions.php';

		startGame();
		
	?>	

	</div>
	
	<script src="js/jquery.js"></script>
	<script src="js/custom.js"></script>

</body>
</html>