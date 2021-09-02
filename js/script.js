
async function pesquisaCep() {

    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    if(validadoCep(cep)){
        const dadosColetados = await fetch(url);
        const dadosJson = await dadosColetados.json();
        console.log(dadosJson);
        limparCampos();
        preencheCampos(dadosJson);
    } else {
        console.log("Cep Inválido!"); 
        limparCampos();
        document.getElementById("info-cep").innerHTML = "Cep Inválido";
    }
}

function validadoCep(cep) {

    //Expressão Regular... " ^ = significa que esta no início e tem que ser um número " , " $ = significa fim e somente um número" , " + = significa um ou mais caracteres "
    if(cep.length == 8 && /^[0-9]+$/.test(cep)){
        return true;
    } else {
        return false;
    }
}

function preencheCampos(dadosJson) {
    document.getElementById("logradouro").value = dadosJson.logradouro;
    document.getElementById("bairro").value = dadosJson.bairro;
    document.getElementById("localidade").value = dadosJson.localidade;
    document.getElementById("uf").value = dadosJson.uf;

}

function limparCampos(){
    document.getElementById("info-cep").innerHTML = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("localidade").value = "";
    document.getElementById("uf").value = "";
}

document.getElementById("cep").addEventListener('focusout',pesquisaCep);
