<html>
<head>
<title>Utilização de índice misto</title>
<style type="text/css">
  body{font-family: Arial; font-size: 14px;}
</style>
</head>
<body>
<?php
$result = $_GET["info"];
$campos = array_keys($result);

for($i=0; $i<sizeof($campos); $i++){
   print "<b>" . $campos[$i] . ":</b> " . $result[$campos[$i]] . "<br>\n";
}
?>
</body>
</html>
