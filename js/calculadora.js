var val1 = 0
var val2 = 0
var operacao ="";

function soma()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
    operacao = "soma";
}
function subtracao()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
    operacao = "subtracao";
}
function multiplicacao()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
    operacao = "multiplicacao";
}
function divisao()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
    operacao = "divisao";
}

function limparALL()
{
    document.getElementsByClassName("inputVisorCalculadora")[0].value = 0;
    val1 = 0;
    val2 = 0;
    operacao = "";
}function limpar()
{
    document.getElementsByClassName("inputVisorCalculadora")[0].value = 0;
}
function num0()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 0
}
function num1()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 1
}
function num2()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 2
}
function num3()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 3
}
function num4()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 4
}
function num5()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 5
}
function num6()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 6
}
function num7()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 7
}
function num8()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 8
}
function num9()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    visor.value += 9
}

function calcular()
{
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0];
    val2 = parseFloat(visor.value);
    let result = 0;
    switch(operacao)
    {
        case "soma":
            result = val1 + val2;
            break;
        case "subtracao":
            result = val1 - val2;
            break;
        case "multiplicacao":
            result = val1 * val2;
            break;
        case "divisao":
            result = val1 / val2;
            break;
    }
    visor.value = result
}