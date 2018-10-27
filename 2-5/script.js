var cont = document.getElementById("container");
var all_img = cont.getElementsByTagName('img');
var x = Math.round(Math.random() * 4);


var table = document.getElementById("table");
var tr = table.getElementsByTagName('tr');
var td = tr.getElementsByTagName('td');

function fun1() {
    for (var i = 0; i <= all_img.length; i++) {
        // all_img[x].style.display = "block";
        for (var j = 0; j <= td.length; j++) {
            td[j].innerHTML = '<img src="img/1.jpg" alt="">';
        }
    }
}

fun1();