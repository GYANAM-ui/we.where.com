user = sessionStorage.getItem('user_name');
link = sessionStorage.getItem('link');
code = sessionStorage.getItem('code');
email = sessionStorage.getItem("user_email");
pass = sessionStorage.getItem("user_pass");
document.getElementById("user").innerHTML = user;
document.getElementById("code").innerHTML = code;
document.getElementById("name").innerHTML = user;
document.getElementById("email").innerHTML = email;
document.getElementById("pas").innerHTML = pass;

qure = '@' + user.toLowerCase() + '_';

document.getElementById("user_name").innerHTML = qure;

function goTo() {
    location.href = link;
}

function create() {
    location.href = "../../whering.html";
}

function imgGoTo() {
    location.href = "https://7p08exzifrh9lahkvluqja-on.drv.tw/PROVID%20MEET/kwitter.html";
}

function goToFacebook() {
    location.href = "https://m.facebook.com/story.php?story_fbid=2812670305621001&id=100006341765377&sfnsn=wiwspmo";
}

function infoDownload() {
    let div =
        document.getElementById('down');
    html2canvas(div).then(
        function(canvas) {
            document.getElementById('output').appendChild(canvas);
        })
}