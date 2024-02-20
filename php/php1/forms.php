<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="./sendform.php" method="post">
    <input type="text" name="firstName">
    <br>
    <input type="text" name="lastName">
    <br>
    <button>Submit</button>
</form>

<?php

if(isset($_GET["success"])) {
?>
<span>sucessfully sent form</span>
    
<?php
    }
    if (isset($_COOKIE['name'])) echo $_COOKIE['name'];
?>
</body>
</html>