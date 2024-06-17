//WHILE
function checarWhile() {
    var num = parseInt(document.getElementById("num").value);
    var somaPares = 0;
    var somaImpares = 0;
    var contador = 1;
    
    while (contador <= num) {
        if (contador % 2 === 0) {
            somaPares += contador;
        } else {
            somaImpares += contador;
        }
        contador++;
    }
    
    alert("Soma dos primeiros " + num + " números pares: " + somaPares);
    alert("Soma dos primeiros " + num + " números ímpares: " + somaImpares);
}

// DO WHILE
function checarDo() {
    var num = parseInt(document.getElementById("num").value);
    var somaPares = 0;
    var somaImpares = 0;
    var contador = 1;
    
    do {
        if (contador % 2 === 0) {
            somaPares += contador;
        } else {
            somaImpares += contador;
        }
        contador++;
    } while (contador <= num);
    
    alert("Soma dos primeiros " + num + " números pares: " + somaPares);
    alert("Soma dos primeiros " + num + " números ímpares: " + somaImpares);
}

//FOR
function checarFor() {
    var num = parseInt(document.getElementById("num").value);
    var somaPares = 0;
    var somaImpares = 0;
    
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            somaPares += i;
        } else {
            somaImpares += i;
        }
    }
    
    alert("Soma dos primeiros " + num + " números pares: " + somaPares);
    alert("Soma dos primeiros " + num + " números ímpares: " + somaImpares);
}
