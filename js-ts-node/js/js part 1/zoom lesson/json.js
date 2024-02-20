function save(event){
    let array = window.localStorage.getItem(`prof`);

    let array2 = JSON.parse(array)
    

    event.preventDefault();

    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const age = document.getElementById(`age`).value;
    const email = document.getElementById(`email`).value;

    let person = {
        "firstName":firstName,
        "lastName":lastName,
        "age":age,
        "email":email
    }

    array2.push(person)


    window.localStorage.setItem(`prof` ,JSON.stringify(person))
}
console.log(localStorage)