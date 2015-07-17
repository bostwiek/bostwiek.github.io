<html>
<head>
<title>dbtest</title>
</head>
<body>

<?php

$db = mysql_connect("localhost", "bostwiek_admin", "asZXC123", "bostwiek_frustrated"); 
if (!$db) {
	die("Database connection failed miserably: " . mysql_error());
}

//execute the SQL query and return records

$result = mysql_query("SELECT * FROM frustrated WHERE");
$result2 = mysql_query($result) or die($result."<br/><br/>".mysql_error());

//fetch tha data from the database

while ($row = mysql_fetch_array($result)) {
   echo "ID:".$row{'ID'}." Name:".$row{'name'}." 
   ".$row{'password'}."<br>";
}

?>
</body>
</html>
