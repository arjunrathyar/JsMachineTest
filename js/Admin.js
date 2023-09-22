document.addEventListener("DOMContentLoaded", function () {

    const lgtBtn = document.getElementById('logOutbtn');

    function logout() {
        window.location.href = "Login.html";
    }
    
    lgtBtn.addEventListener('click', logout);
    

});