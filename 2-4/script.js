function fun1() {
    var y = Math.round(Math.random() * 10);
    var x = document.body.children;

    for (var i = 0; i <= x.length; i++) {
        x[y].style.display = "block";
    }
}

fun1();