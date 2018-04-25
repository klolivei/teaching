<html>
<head>
<title>Exemplo com caixas de seleção</title>
<style type="text/css">
  body{font-family: Arial; font-size: 14px;}
</style>
</head>
<body>
<p>
<?php
$sel = $_GET["cb"];

if(sizeof($sel) == 0){
   print "Nenhum Número foi selecionado!";
}else{
   print "Numeros selecionados:\n";
   print "<ul>";
   for($i=0; $i<sizeof($sel); $i++){
      print "<li>$sel[$i]</li>\n";
   }
   print "</ul>";
}
?>
</p>
</body>
</html>
