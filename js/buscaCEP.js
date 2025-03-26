function limpar()
{
    document.getElementsByClassName("CEP")[0].value = "";
    document.getElementsByClassName("endereco")[0].value = "";
    document.getElementsByClassName("complemento")[0].value = "";
    document.getElementsByClassName("numero")[0].value = "";
    document.getElementsByClassName("bairro")[0].value = "";
    document.getElementsByClassName("cidade")[0].value = "";
    document.getElementsByClassName("uf")[0].value = "";

    document.getElementsByClassName("CEP")[0].focus();
}

function buscaCEP()
{

}