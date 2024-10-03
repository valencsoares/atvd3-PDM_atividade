let somar = function () {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let saida = document.getElementById("saida1")

    let soma = parseFloat(num1) + parseFloat(num2)
    saida.innerHTML = soma
}

let mediaArit = function () {
    let n1 = document.getElementById("nota1").value
    let n2 = document.getElementById("nota2").value
    let n3 = document.getElementById("nota3").value
    let n4 = document.getElementById("nota4").value
    let saida = document.getElementById("saida2")

    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4
    if (media >= 7) {
        saida.innerHTML = "Aprovado!"
    } else {
        saida.innerHTML = "Reprovado."
    }
}

let tabuada = function () {
    let num = document.getElementById("num").value
    let aux = 0
    let result = 0
    let resultado = ""
    let saida = document.getElementById("saida3")

    while (aux <= 10) {
        result = aux * parseFloat(num)
        resultado = resultado + num + " * " + aux + " = " + result + " | "
        aux = parseInt(aux) + 1
    }

    saida.innerHTML = resultado
}

/* let bNum = function(){
    let num = document.getElementById("positiveNum").value
    let saida = document.getElementById("saida4")
    let maior = 0
    if (parseFloat(num) > maior){
            maior = parseFloat(num)
            console.log("entrou")
            console.log(maior)
    }
    console.log(maior)
    if (num == -1){
        saida.innerHTML = maior
    }
} */

let bNum = function () {
    let num = document.getElementById("positiveNum").value
    let saida = document.getElementById("saida4")
    let maior = 0

    while (parseInt(num) > parseInt(maior)) {
        maior = num
        console.log(maior)
    }
    console.log(maior)
    if (num == -1) {
        saida.innerHTML = maior
        console.log(maior)
    }
}

let array = function () {
    let saida = document.getElementById("saida5")
    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let impares = []
    aux = 0

    while (aux < 10) {
        if ((vetor[aux] % 2) != 0) {
            impares.push(vetor[aux])
            console.log(impares)
        }
        aux = aux + 1
    }
    impares.forEach(function (impar) {
        saida.innerHTML = impar
    });

    let impar = impares.map(function (impar) {
        return " " + impar;
    });
    saida.innerHTML = impar
}

let salario = function(){
    let s = document.getElementById("salario").value
    let saida = document.getElementById("saida6")
    let salarios = []

    while (parseInt(s) > 1412){
        salarios.push(s)
    }

    saida.innerHTML = salarios
}