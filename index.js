password = document.getElementById('password');
confirmPassword = document.getElementById('confirm-password');
passwordError = document.getElementById('password-error');
submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', e => {
    if (password.value != confirmPassword.value) {
        e.preventDefault();
        passwordError.style.visibility = 'visible';
    }
})

password.addEventListener('input', e => {
    if (passwordError.style.visibility == 'visible') {
        passwordError.style.visibility = 'hidden'
    }
})

confirmPassword.addEventListener('input', e => {
    if (passwordError.style.visibility == 'visible') {
        passwordError.style.visibility = 'hidden'
    }
})

