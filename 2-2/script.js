function fun1(a, b) {
    for (var i = a; i <= b; i++) {
        console.log(Math.round(Math.random(i) * b));
    }
}

fun1(0, 10);