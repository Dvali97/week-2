function fun1(a, b, n) {
    var a, b, n;

    for (var j = 0; j <= n; j++) {
        for (var i = a; i <= b; i++) {
            document.write(Math.round(Math.random(i) * b) + "<br>");
        }
    }
}

fun1(0, 5, 0);