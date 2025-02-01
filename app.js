let amigos = []; //armazenará os nomes inseridos

function adicionarAmigo(amigo) { //função pra adicionar amigos digitados
    amigo = document.querySelector ('input').value; 
    //pega o valor digitado e adiciona no parametro da funç.

    if (amigo !== '') { //se o campo estiver diferente de vazio
        amigos.push (amigo);  //junta no array dos amigos lá em cima

    } else { //se não, pede pra inserir um valor válido
        alert('Por favor, insira um nome.');
    }
    atualizarAmigos();
    limparCampo ();
    //chamada da função que limpa a caixa de texto
    //alert(amigos); //teste pra ver se tá juntando no array
}

function atualizarAmigos () {
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        //obrigada pela ajuda ! Linn do Discord!
    }
    
}
listaAmigos.innerHTML = '';

function limparCampo () {
    amigo = document.querySelector ('input');
    amigo.value = '';
    //limpar caixa de texto
}

