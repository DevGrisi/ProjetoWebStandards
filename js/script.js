function Login()
{
    let login = document.getElementsByName("Login")[0].value;
    let senha = document.getElementsByName("Senha")[0].value;

    if(login == ""|| senha=="")
    {
        alert("Há campos em branco!");
        limparLogin();
    }else if(login == "admin"&& senha =="12345")
    {
        console.log("Ir para página principal.html");
        window.location.href = "./paginas/principal.html";
    }else
    {
        alert("Login e/ou senha incorreto!");
        limparLogin();
    }
}
function limparLogin()
{
    document.getElementsByName("Login")[0].value ="";
    document.getElementsByName("Senha")[0].value ="";
    document.getElementsByName("Login")[0].focus();
}
function BuscaCEPcorreio()
{
    window.location.href = "buscaCEPcorreios.html"
}
function BuscaCEPviaCEP()
{
    window.location.href = "buscaCEPviaCEP.html"
}