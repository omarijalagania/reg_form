var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

//show input error
function showError(input, message){
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}

//show input success
function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//CHeck Valid Email
function checkEmail(input){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else {
        showError(input, 'Email is not valid');
    }

}

username.addEventListener('click', function(){
    username.className = 'username clicked';
});

//check input length

function checkLenght(input, min, max){
    if(input.value.length < min){
        showError(input, getFieldName(input) + ' Must be at least ' + min + ' charecters');
    }else if(input.value.length > max){
        showError(input, getFieldName(input) + ' Must be less than ' + max + ' charecters');
    }else {
        showSuccess(input);
    }
};

//check passwords

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

//Check required fields

function checkRequired(inputArr){
inputArr.forEach(function(input){
    if(input.value.trim() === ''){
        showError(input, getFieldName(input) + ' is required');
    }else {
        showSuccess(input);
    }
});
}

//get field name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLenght(username, 3, 15);
    checkLenght(password, 6, 15);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});

