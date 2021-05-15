code = sessionStorage.getItem("user_code");
username = sessionStorage.getItem("name");

document.getElementById("joinFrameWork").src = "https://gyanam-ui.github.io/we.where.com/session.html" + code;
document.getElementById("name").innerHTML = username;

meetingURL = "https://gyanam-ui.github.io/we.where.com/session.html" + code;

document.getElementById("display_code").innerHTML = code;
document.getElementById("display_URL").innerHTML = meetingURL;