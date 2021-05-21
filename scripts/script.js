function User() {
    user_name = document.getElementById("name").value;
    user_email = document.getElementById("email").value;
    user_pass = document.getElementById("password").value;

    if (user_name == "") {
        document.getElementById("error").innerHTML = "Enter a valid name";
        document.getElementById("er1").innerHTML = "Enter a valid email";
        document.getElementById("er2").innerHTML = "Enter a valid password";
        document.getElementById("msg_er_div").style.display = "block";
    } else {
        document.getElementById("msg_er_div").style.display = "none";
        sessionStorage.setItem("user_name", user_name);
        sessionStorage.setItem("user_email", user_email);
        sessionStorage.setItem("user_pass", user_pass);
        window.location = "session.html";
    }
}

function navD() {
    window.alert("There not download your information in the session you can see session profile click there and you can see there Download information button click them and download the info image.");
}

function issue() {
    location.href = "";
}

function noth() {
    window.alert("Are you sure you leave this page.");
    window.location = "index.html";
}