<?php

function isExist($array, $num) {
    // foreach($array as $arr ) {
    //     if($arr == $num) return true;
    // }
    // return false;
    if (in_array($num, $array)) return true;
    else return false;
}

?>