const urlviaCEP = "https://viacep.com.br/ws/[[cep]]/json";

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

function buscaCEPFetch()
{
    const requestOptions = {method: "GET", redirect: "follow"}; //Exemplifica qual instrução http será utilizada (GET)

    let CEP = document.getElementsByClassName("CEP")[0].value;
    
    let url = urlviaCEP.replace("[[cep]]", CEP);

    fetch(url, requestOptions)
        .then((response) =>
        {
            if(response.ok)
            {
                return response.json(); //Converte a resposta em JSON
            }
            throw new Error(`ERRO: HTTP ${response.status}`)
        })
        .then((result) => 
        {
            document.getElementsByClassName("endereco")[0].value = result.logradouro || "";     //Previne que o programa quebre se não houver 
            document.getElementsByClassName("complemento")[0].value = result.complemento || ""; // alguma informação deixando o campo como vazio
            document.getElementsByClassName("bairro")[0].value = result.bairro || "";
            document.getElementsByClassName("cidade")[0].value = result.localidade || "";
            document.getElementsByClassName("uf")[0].value = result.uf || "";

            document.getElementsByClassName("endereco")[0].disabled = true;
            document.getElementsByClassName("complemento")[0].disabled = true;
            document.getElementsByClassName("bairro")[0].disabled = true;
            document.getElementsByClassName("cidade")[0].disabled = true;
            document.getElementsByClassName("uf")[0].disabled = true;

            document.getElementsByClassName("numero")[0].focus();
        })
        .catch((erro) =>
        {
            alert(`Erro ao buscar o CEP\n${erro}`)
        });
}

function buscaCEP()
{
    let CEP = document.getElementsByClassName("CEP")[0].value;
    let url = urlviaCEP.replace("[[cep]]", CEP);

    //De "xml-http-request"
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function()
    {
        if(xhr.readyState === 4 || xhr.status === 200)
        {
            const resultado = JSON.parse(xhr.responseText); //Converte o texto em um objeto JSON : Ainda não entendi

            document.getElementsByClassName("endereco")[0].value = resultado.logradouro || "";     //Previne que o programa quebre se não houver 
            document.getElementsByClassName("complemento")[0].value = resultado.complemento || ""; // alguma informação deixando o campo como vazio
            document.getElementsByClassName("bairro")[0].value = resultado.bairro || "";
            document.getElementsByClassName("cidade")[0].value = resultado.localidade || "";
            document.getElementsByClassName("uf")[0].value = resultado.uf || "";

            // document.getElementsByClassName("endereco")[0].disabled = true;
            // document.getElementsByClassName("complemento")[0].disabled = true;
            // document.getElementsByClassName("bairro")[0].disabled = true;
            // document.getElementsByClassName("cidade")[0].disabled = true;
            // document.getElementsByClassName("uf")[0].disabled = true;

            const inputs = ["endereco","complemento","bairro","cidade","uf"];

            inputs.forEach((inputclass) =>
            {
                document.getElementsByClassName(inputclass)[0].disabled = true;
            })

            document.getElementsByClassName("numero")[0].focus();
        }else
        {
            alert("Erro ao buscar CEP. Status HTTP: ", xhr.status);
        }
    }
    xhr.onerror = function()
    {
        alert("Erro ao buscar CEP. Status HTTP: ", xhr.status); 
    }
    xhr.send();
}