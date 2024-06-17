//WHILE
function checarWhile() {
    var num = parseInt(document.getElementById("num").value);
    var fibonacci = [];
    var a = 0, b = 1, temp;
    var index = 0;

    while (num > 0) {
        fibonacci[index] = a;
        temp = a + b;
        a = b;
        b = temp;
        num--;
        index++;
    }

    var fibonacciString = "Os primeiros " + index + " números da sequência de Fibonacci são: ";
    for (var i = 0; i < index; i++) {
        if (i > 0) {
            fibonacciString += ', ';
        }
        fibonacciString += fibonacci[i];
    }

    alert(fibonacciString);
}

//DO WHILE
function checarDo() {
    var num = parseInt(document.getElementById("num").value);
    var fibonacci = [];
    var a = 0, b = 1, temp;
    var index = 0;

    if (num >= 1) {
        fibonacci[index] = a;
        num--;
        index++;
    }
    
    if (num >= 1) {
        fibonacci[index] = b;
        num--;
        index++;
    }
    
    do {
        temp = a + b;
        a = b;
        b = temp;
        fibonacci[index] = a;
        num--;
        index++;
    } while (num > 0);

    var fibonacciString = "Os primeiros " + index + " números da sequência de Fibonacci são: ";
    for (var i = 0; i < index; i++) {
        if (i > 0) {
            fibonacciString += ', ';
        }
        fibonacciString += fibonacci[i];
    }

    alert(fibonacciString);
}


//FOR
function checarFor() {
    var num = parseInt(document.getElementById("num").value);
    var fibonacci = [0, 1];

    for (var i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    var fibonacciString = "Os primeiros " + num + " números da sequência de Fibonacci são: ";
    for (var i = 0; i < num; i++) {
        if (i > 0) {
            fibonacciString += ', ';
        }
        fibonacciString += fibonacci[i];
    }

    alert(fibonacciString);
}

