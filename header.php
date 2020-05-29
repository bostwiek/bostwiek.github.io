<?php 

/**
	
	Need to add style hrefs and js srcs, and foreach loop to add

**/

// Reads browser window for where current directory is
$readURL = $_SERVER['REQUEST_URI'];

echo '

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>' . $title . '</title>
	<link type="text/css" rel="stylesheet" href="css/style.css">
	<link type="text/css" rel="stylesheet" href="css/viewport.css">
	<link type="text/css" rel="stylesheet" href="css/jquery.jscrollpane.css" media="all">

	<script src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.jscrollpane.js"></script>

</head>
<body>

	';
	
?>