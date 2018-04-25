<table border="1">
<?php
for($i = 1; $i <= 10 ;$i++)
{
	echo '<tr>';
	for($j = 1; $j <= 10; $j++)
	{
		echo '<td>'.($i * $j) . '</td>';
	}
	echo '</tr>';
}
?>
</table>
