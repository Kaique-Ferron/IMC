let dadosAtuais = null;

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    const btnSalvar = document.getElementById('btnSalvar');

    if (!peso || !altura) return alert("Preencha os campos!");

    const imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = "";

    if (imc < 18.5) mensagem = "Abaixo do peso";
    else if (imc < 24.9) mensagem = "Peso normal";
    else if (imc < 29.9) mensagem = "Sobrepeso";
    else mensagem = "Obesidade";

    document.getElementById('resultado').innerText = `Seu IMC: ${imc}`;
    document.getElementById('mensagem').innerText = mensagem;

    dadosAtuais = { peso, altura, imc, mensagem, data: new Date().toLocaleString() };
    document.getElementById('btnSalvar').disabled = false;
}

async function salvarDados() {
    if (dadosAtuais) {
        localStorage.setItem('meuIMC', JSON.stringify(dadosAtuais));
        alert("Dados salvos no navegador com sucesso!");
    }
}


    if (response.ok) {
        alert("Dados salvos no servidor!");
    }

