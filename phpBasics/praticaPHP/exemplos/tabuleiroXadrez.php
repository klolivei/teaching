<table border="1">
<?php
  $cor = array('#FFFFFF', '#000000');
  $k = 0;
  for($i = 1; $i <= 8; $i++)
  {
    echo '<tr>';
    for($j = 1; $j <= 8; $j++)
    {
      echo "<td bgcolor='{$cor[$k % 2]}' width='50' height='50'>&nbsp;</td>";
      $k++;
    }
    echo '</tr>';
    $k++;
  }
?>
</table>
