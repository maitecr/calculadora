var valor;
var resultado;

function botao(num){
   valor = document.calculadora.tela.value += num;
}
function apagar(){
    document.calculadora.tela.value = " "
}
function calcular(){
    resultado = eval(valor);
    document.calculadora.tela.value = resultado;
}
