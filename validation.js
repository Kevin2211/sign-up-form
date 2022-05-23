const form = document.getElementById('my-form');
const button = document.getElementById('submit-button');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) =>{

    e.preventDefault();
    checkinputs();
});



function checkinputs(){
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cPasswordVal = cPassword.value.trim();

    if(firstNameVal === ''){
        //shows error
        //add error message
        setErrorFor(firstName, 'First name cannot be blank')
    }else{
        //add success class
        setSuccess(firstName);  
    }

    if(lastNameVal === ''){
        //shows error
        //add error message
        setErrorFor(lastName, 'Last name cannot be blank')
    }else{
        //add success class
        setSuccess(lastName);  
    }


    if(emailVal === ''){
        setErrorFor(email, 'Email cannot be blank');

    } else if (!isEmail(emailVal)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccess(email);
    }

    if(phoneVal === ''){
        //shows error
        //add error message
        setErrorFor(phone, 'Phone number cannot be blank')
    }else if (!isPhone(phoneVal)){
        //add success class
        setErrorFor(phone, 'Invalid phone number');  
    }else{
        setSuccess(phone);
    }

    if(passwordVal === ''){
        //shows error
        //add error message
        setErrorFor(password, 'Password cannot be blank')
    }else if(passwordVal.length < 8){
        setErrorFor(password, 'Password must have at least 8 characters')
    }
    else{
        //add success class
        setSuccess(password);  
    }

    if(cPasswordVal === ''){
        //shows error
        //add error message
        setErrorFor(cPassword, 'Password cannot be blank')
    }else if(!isPasswordMatch(passwordVal, cPasswordVal)){
        setErrorFor(cPassword, "Password doesn't match")
    }
    else{
        //add success class
        setSuccess(cPassword);  
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error inside small tag
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function isPhone(phone){
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}

function isPasswordMatch(password, confirmPassword){
    return password === confirmPassword;
}