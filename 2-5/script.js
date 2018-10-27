var images = document.getElementsByClassName("images").src;
var td = document.getElementsByClassName("td");
var x = Math.round(Math.random() * 4);

function fun1() {
    for (var i = 0; i <= images.length; i++) {
        for (var j = 0; j <= td.length; j++) {
            td[0].src = "img/1.jpg";
            td[1].src = "img/1.jpg";
            td[2].src = "img/1.jpg";
            td[3].src = "img/1.jpg";
            td[4].src = "img/1.jpg";
            td[5].src = "img/1.jpg";
            td[6].src = "img/1.jpg";
        }
    }


}

fun1();