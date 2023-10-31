<?php
// Getting the entered number from a form
$num = $_POST["number"];
// Creating an html table with a border
echo "<table border='1'>";
// Creating the first row of column headers
echo "<tr><th></th>";
// Generating column headers from 1 to the entered number
for ($i = 1; $i <= $num; $i++) {
    echo "<th>$i</th>";
}
// Close the column header row
echo "</tr>";
// Generating the rows and columns of the multiplication table
for ($i = 1; $i <= $num; $i++) {
    // Starting a new row with the row header
    echo "<tr><th>$i</th>";
    // Find and display the multiplication results in each column
    for ($j = 1; $j <= $num; $j++) {
        echo "<td>" . $i * $j . "</td>";
    }
    // Close the row
    echo "</tr>";
}
// Close the table
echo "</table>";
?>