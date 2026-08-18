// Auth - Registration

// Step 1 : Getting DOM reference to the form element
const registerForm = document.querySelector('#register-form');

// registerForm.remove();

// Step 2 : Adding an event listener to the form

registerForm.addEventListener('submit', 
    function (e){

        e.preventDefault();

        const userName = document.querySelector('#username-input');
        const email    = document.querySelector('#email-input');
        const password = document.querySelector('#pwd-input');
        const password2= document.querySelector('#pwd-input2');

        // if (userName.value === ''){
        //     alert("Type username");
        // }

        const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email_regex.test(email)){
            alert("errorrrr");
        }
        if(!pwd_regex.test(password)) {
            document.querySelector('#pwd-qual-errors').style.display = 'block';
        }
    }
)