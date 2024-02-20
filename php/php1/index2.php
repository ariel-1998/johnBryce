<?php
    require_once './index.php';
    require_once './index3.php';


    echo add(1,2);
    echo "<br/>";
    echo avgOfThree(1,2,3);

    $person = new Person("ariel", "what");
    echo $person;

    require_once './arrays.php';
    $arr = [1,2,2,5,7,8,9,10];
    $num = 4;
    if (isExist($arr, $num)) {
        echo "true";
    } else {
        echo "fales";
    }

?>