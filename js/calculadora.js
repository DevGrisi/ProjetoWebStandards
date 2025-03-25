var val1 = 0
var val2 = 0

function soma()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
}
function subtracao()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
}
function multiplicacao()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
}
function divisao()
{
    val1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    limpar();
}

function limpar()
{
    document.getElementsByClassName("inputVisorCalculadora")[0].value = 0
}
function carregar()
{
    document.getElementsByClassName("inputVisorCalculadora")[0].value = 0
}
function num0()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 0
}
function num1()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 1
}
function num2()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 2
}
function num3()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 3
}
function num4()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 4
}
function num5()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 5
}
function num6()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 6
}
function num7()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 7
}
function num8()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 8
}
function num9()
{    
    let visor = document.getElementsByClassName("inputVisorCalculadora")[0]
    visor.value += 9
}