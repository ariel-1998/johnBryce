<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
    <style>
        .ari {
            width:300px;
            background-color: yellow;
        }
    </style>
</head>
<body>
<?php
$arr = [];

for($i = 0; $i < 100; $i++){
    $fr = new stdClass();
    $fr->first = "ariel" . $i;
    $fr->last = "kas". $i;
    $fr->mail = "mail". $i;
    $arr[] = $fr;
}


?>
    <form class="ari" action="formAction.php" method="post">
    
    <div>
    <label>frist</label>
    <input name="first" type="text">
    </div>

    <div>
    <label>last</label>
    <input type="text" name="last">
    </div>

    <div>
    <label>mail</label>
    <input type="text" name="mail">
    </div>

    <button>submit</button>

    </form>



    <?php
if(count($arr) > 0) {
?>
<table>
    <tr>
        <th>first</th>
        <th>last</th>
        <th>mail</th>
    </tr>

    
    
   <?php
    foreach($arr as $a) {
        echo "</tr>";

        echo "<td>" . $a->first . "</td>";
        echo "<td>" . $a->last . "</td>";
        echo "<td>" . $a->mail . "</td>";
        echo "</tr>";
    
    }

   ?>
    
    

</table>
<?php
}
?>
</body>
</html>