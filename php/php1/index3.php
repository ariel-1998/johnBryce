<?php
    $person = new stdClass();

    $person->firstName = "ariel";

    print_r($person);

    class Person {
        public $firstName;
        public $lastName;
    public function __constructor($firstName, $lastName) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function __toString() {
        return $this->firstName . " " . $this->lastName;
    }
    }
?>