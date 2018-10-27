function worker() {
    var tr = document.getElementById('col').value;
    var td = document.getElementById('row').value;
    var img = document.getElementById('img').value;
    var area = document.getElementById('result');

    table = "";
    table += '<table class="table">';
    for (var i = 0; i < tr; i++) {
        table += '<tr style="border:1px solid black">';
        for(var j = 0; j < td; j++) {
            var num = Math.round(Math.random() * img + 1);
            table += '<td><img src="img/image' + num + '.png></img></td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    area.innerHTML = table;
}