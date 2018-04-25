<form method="get">
Tabuada do: <input type="text" name="numero" id="numero" />
<input type="submit" value="Calcular" />
</form>
<table border="1">
<?php
  if(isset($_GET['numero']))
  {
    $n = $_GET['numero'];
    for($i = 1; $i <= $n; $i++)
    {
      echo '<tr>';
      for($j = 1; $j <= $n; $j++)
      {
        echo '<td>' . ($i * $j) . '</td>';
      }
      echo '</tr>';
    }
  }
?>
</table>
