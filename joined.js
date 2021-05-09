code = sessionStorage.getItem("user_code");

document.getElementById("joinFrameWork").src = "https://cvugl0ctbjpcs2zz5ji33a-on.drv.tw/we.where.com/session.html" + code;

meetingURL = "https://cvugl0ctbjpcs2zz5ji33a-on.drv.tw/we.where.com/session.html" + code;

document.getElementById("display_code").innerHTML = code;
document.getElementById("display_URL").innerHTML = meetingURL;