<html>
<head>
<title>Método GET com vários campos de texto</title>
<style type="text/css">
  body{font-family: Arial; font-size: 14px;}
</style>
</head>
<body>
<?php
$texto = $_GET["texto"];
for($cont = 0; $cont < 5; $cont++){
   print "Campo " . ($cont + 1) . ": $texto[$cont]<br>\n";
}
?>
</body>
</html>
