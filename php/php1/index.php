<?php 
    echo "hello";

    $ariel = "ariel"; //variable

    $a = 3;
    $b = 2;

    //connecting variabls 
    $a.' '.$b;

    //array
    $array = [1, 2];

    //push
    $array[] = "3";

    //for loop
    for( $i = 0; $i < count($array); $i++) {
        echo $array[$i].' ';
    };

    $array[] = 4;

    foreach($array as $arr) {
        echo $arr.' ';
    };

    //delete from array
    array_splice($array, 1, 1);

    echo "<br/>";

    function add($a, $b) {
        return $a + $b;
    }

    function avgOfThree($a, $b, $c) {
        return ($a + $b + $c) / 3;
    }

    
?>