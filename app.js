let amigos = []; //armazenará os nomes inseridos

function adicionarAmigo(amigo) { //função pra adicionar amigos digitados
    amigo = document.querySelector ('input').value; 
    //pega o valor digitado e adiciona no parametro da funç.
    if (amigo !== '') { //se o campo estiver diferente de vazio
        amigos.push (amigo);  //junta no array dos amigos lá em cima

    } else { //se não, pede pra inserir um valor válido
        alert('Por favor, insira um nome.');
    }
    atualizarAmigos ()
    limparCampo ();
    //chamada da função que limpa a caixa de texto
    //alert(amigos); //teste pra ver se tá juntando no array
}

function atualizarAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let conteudo = '';
    for (let i = 0; i < amigos.length; i++) {
        conteudo += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = conteudo;
}

function sortearAmigo() {
    if (amigos != '') {
        let sorteio = Math.floor(Math.random() * amigos.length);
        let ganhador = amigos[sorteio];
        resultado.innerHTML = `O amigo sorteado é ${ganhador}!`;
    } else {
        alert('Não há amigos para sortear.');
    }
}

function limparCampo () {
    amigo = document.querySelector ('input');
    amigo.value = '';
    //limpar caixa de texto
}

