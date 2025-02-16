document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const pseudo = document.getElementById('pseudo');


    pseudo.addEventListener('input', function() {
        if(this.value.length >= 6) {
            this.style.borderColor = '#4CAF50'; 
            this.nextElementSibling.textContent = '';
        } else {
            this.style.borderColor = '#f44336'; 
            this.nextElementSibling.textContent = 'Le pseudo doit contenir au moins 6 caractères';
        }
    });

  
    email.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(this.value)) {
            this.style.borderColor = '#4CAF50';
            this.nextElementSibling.textContent = '';
        } else {
            this.style.borderColor = '#f44336';
            this.nextElementSibling.textContent = 'Veuillez entrer une adresse email valide';
        }
    });


    password.addEventListener('input', function() {
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(passwordRegex.test(this.value)) {
            this.style.borderColor = '#4CAF50';
            this.nextElementSibling.textContent = '';
        } else {
            this.style.borderColor = '#f44336';
            this.nextElementSibling.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre';
        }
        
    
        if(confirmPassword.value) {
            validatePasswordMatch();
        }
    });


    confirmPassword.addEventListener('input', validatePasswordMatch);

    function validatePasswordMatch() {
        if(password.value === confirmPassword.value && password.value !== '') {
            confirmPassword.style.borderColor = '#4CAF50';
            confirmPassword.nextElementSibling.textContent = '';
        } 
        else {
            confirmPassword.style.borderColor = '#f44336';
            confirmPassword.nextElementSibling.textContent = 'Les mots de passe ne correspondent pas';
        }
    }


    document.querySelectorAll('.error-message').forEach(error => {
        error.style.color = '#f44336';
        error.style.fontSize = '12px';
        error.style.marginTop = '5px';
    });

 
    document.querySelectorAll('input').forEach(input => {
        input.style.transition = 'border-color 0.3s ease';
        input.style.border = '2px solid #ccc';
    });
});