class Login {                                                                       //class
    constructor(userName, password) {                                               //constructor
        this.userName = userName;
        this.password = password;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;
        const sbmtBtn = document.getElementById('sbmtBtn');
        const userError = document.getElementById('userError');
        const passError = document.getElementById('passError');

        //VALIDATION

        if (!password.trim() || !userName.trim()) {
            if (!userName.trim()) {
                userError.textContent = 'Please Enter UserName!!';
                document.getElementById("userName").style.border = '1px solid';
                document.getElementById("userName").style.borderColor = 'red';
                userError.style.color = 'red';
                sbmtBtn.style.border = '1px solid red';
            }
            else {
                userError.textContent = '';
                document.getElementById("userName").style.border = '';
                document.getElementById("userName").style.borderColor = '';
                sbmtBtn.style.border = '';
            }


            if (!password.trim()) {
                passError.textContent = 'Please Enter Password!!';
                document.getElementById("password").style.border = '1px solid';
                document.getElementById("password").style.borderColor = 'red';
                passError.style.color = 'red';
                sbmtBtn.style.border = '1px solid red';
            }
            else {
                passError.textContent = '';
                document.getElementById("password").style.border = '';
                document.getElementById("password").style.borderColor = '';
                sbmtBtn.style.border = '';
            }
        }
        
        //AUTHENTICATION
        else {
            const user = new Login(userName, password);

            userError.textContent = '';
            passError.textContent = '';
            document.getElementById("userName").style.border = '';
            document.getElementById("userName").style.borderColor = '';
            document.getElementById("password").style.border = '';
            document.getElementById("password").style.borderColor = '';
            sbmtBtn.style.border = '';

            if (user.userName == 'admin' && user.password == 'adminPassword') {
                window.location.href = "Admin.html";
            }
            else if (user.userName == 'user' && user.password == 'userPassword') {
                window.location.href = "User.html";
            }
            else {
                alert("Wrong Credentials!!")
                form.reset();
            }

        }

    });
}); 