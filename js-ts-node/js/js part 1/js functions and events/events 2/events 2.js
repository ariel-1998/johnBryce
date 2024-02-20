function firstNameValidity(){
    const element = document.getElementById(`firstName`).value
    if(element === ``){
        alert(`you havent entered your first name.`)
    }else{
        alert(`first name is ${element}`)
    }
}

//2
function firstNameValidity2(){
    const element = document.getElementById(`firstNameTwo`)
    if(element.value === ``){
        alert(`you havent entered your first name.`)
        element.style.backgroundColor = `red`
    }else{
        alert(`first name is ${element.value}`)
        element.style.backgroundColor = `revert`

    }
}

//3
function firstNameValidity3(){
    const span = document.getElementById(`invalidSpan`);
    const element = document.getElementById(`firstNameThree`);
    const val = element.value;
    if(val === ``){
        alert(`you havent entered your first name.`)
        element.style.backgroundColor = `red` ;
        span.style.display= `block`
    }else{
        alert(`first name is ${val}`)
        element.style.backgroundColor = `revert`
        span.style.display= `none`

    }
}

//4
function fullNameValidity(event){
    const firstName = document.getElementById(`firstNameFour`);
    const lastName = document.getElementById(`lastNameFour`);
    const firstNameInvalid = document.getElementById(`firstNameInvalidFour`)
    const lastNameInvalid = document.getElementById(`lastNameInvalidFour`)
    if(firstName.value === ``){
        firstName.style.backgroundColor = `red`;
        firstName.focus();
        firstNameInvalid.style.display = `inline`;
        event.preventDefault()
    }
    else{
        firstName.style.backgroundColor = `revert`;
        firstNameInvalid.style.display = `none`;

    } 
    if(lastName.value === ''){
            lastName.style.backgroundColor = `red`;
            lastName.focus();
            lastNameInvalid.style.display = `inline`
            event.preventDefault()
    }
    else{
        lastName.style.backgroundColor = `revert`;
        lastNameInvalid.style.display = `none`;
    }
    if(firstName.value !== '' && lastName.value !== ``){
        alert(`your full name is: ${firstName.value} ${lastName.value}`)
    }
}

//5
function fullNameMailValidity(){
    const firstName = document.getElementById(`firstNameFive`);
    const lastName = document.getElementById(`lastNameFive`);
    const email = document.getElementById(`emailFive`);
    const firstNameInvalid = document.getElementById(`firstNameInvalidFive`);
    const lastNameInvalid = document.getElementById(`lastNameInvalidFive`);
    const emailInvalid = document.getElementById(`emailInvalidFive`);
    if(firstName.value === ``){
        firstName.style.backgroundColor = `red`;
        firstName.focus();
        firstNameInvalid.style.display = `inline`;
    }
    else{
        firstName.style.backgroundColor = `revert`;
        firstNameInvalid.style.display = `none`;

    } 
    if(lastName.value === ''){
            lastName.style.backgroundColor = `red`;
            lastName.focus();
            lastNameInvalid.style.display = `inline`
    }
    else{
        lastName.style.backgroundColor = `revert`;
        lastNameInvalid.style.display = `none`;
    }
    if(email.value === ''){
        email.style.backgroundColor = `red`;
        email.focus();
        emailInvalid.style.display = `inline`
    }
    else{
        email.style.backgroundColor = `revert`;
        emailInvalid.style.display = `none`;
    }
    if(firstName.value !== '' && lastName.value !== `` && email.value !== ''){
        alert(`your full name is: ${firstName.value} ${lastName.value} \n your email is: ${email.value}`)
    }
}

//6
function fullNameMailValidityTwo(){
    const firstName = document.getElementById(`firstNameSix`);
    const lastName = document.getElementById(`lastNameSix`);
    const email = document.getElementById(`emailSix`);
    const shortFirstName = document.getElementById(`firstNameInvalidSixS`);
    const longFirstName = document.getElementById(`firstNameInvalidSixL`);
    const shortLastName = document.getElementById(`lastNameInvalidSixS`);
    const longLastName = document.getElementById(`lastNameInvalidSixL`);
    const shortEmail = document.getElementById(`emailInvalidSixS`);
    const longEmail = document.getElementById(`emailInvalidSixL`);

    if(firstName.value.length < 2){
        firstName.style.backgroundColor = `red`;
        firstName.focus();
        shortFirstName.style.display = `inline`;
        longFirstName.style.display = `none`;
    }
    else if(firstName.value.length > 30){
        firstName.style.backgroundColor = `red`;
        firstName.focus();
        longFirstName.style.display = `inline`;
        shortFirstName.style.display = `none`;
    }  
    else{
        firstName.style.backgroundColor = `revert`;
        longFirstName.style.display = `none`;
        shortFirstName.style.display = `none`;
    }

    if(lastName.value.length < 2){
        lastName.style.backgroundColor = `red`;
        lastName.focus();
        shortLastName.style.display = `inline`;
        longLastName.style.display = `none`;
    }
    else if(lastName.value.length > 30){
        lastName.style.backgroundColor = `red`;
        lastName.focus();
        longLastName.style.display = `inline`;
        shortLastName.style.display = `none`;
    }  
    else{
        lastName.style.backgroundColor = `revert`;
        longLastName.style.display = `none`;
        shortLastName.style.display = `none`;
    }

    if(email.value.length < 2){
        email.style.backgroundColor = `red`;
        email.focus();
        shortEmail.style.display = `inline`;
        longEmail.style.display = `none`;
    }
    else if(email.value.length > 30){
        email.style.backgroundColor = `red`;
        email.focus();
        longEmail.style.display = `inline`;
        shortEmail.style.display = `none`;
    }  
    else{
        email.style.backgroundColor = `revert`;
        longEmail.style.display = `none`;
        shortEmail.style.display = `none`;
    }
    ifValid(firstName, lastName, email)
}

function ifValid(firstName, lastName, email){
    if(firstName.value.length <  30 && firstName.value.length > 2
        && lastName.value.length < 30 && lastName.value.length > 2
        && email.value.length < 30 && email.value.length > 2){
        alert(`your full name is: ${firstName.value} ${lastName.value} \n your email is: ${email.value}`)
    }
}
