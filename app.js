//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para armaznar os nomes dos amigos secretos
let amigosSecretos = [];

// função para preparar o sistema para iniciar um novo sorteio

function prepararNovoSorteio(){
    //limpa o array de amigos secretos
    amigosSecretos = [];

    //limpa a lista de amigos anterior
    let novaListaAmigos = document.getElementById('listaAmigos');
    novaListaAmigos.innerHTML = "";

    //pede para o usuário digitar os nomes dos amigos
    let mensagemNomeValido = document.getElementById('mensagemNome');
    mensagemNomeValido.innerHTML = "Digite o nome do seu amigo.";
    
}

function mostrarListaAmigos(){
    //exibe a lista de amigos secretos no elemento div do html
    let listaAmigos = document.getElementById('listaAmigos');
    let lista = "";
    for (let i = 0; i < amigosSecretos.length; i++){
        lista += `<li>${amigosSecretos[i]}</li>`;
    }
    listaAmigos.innerHTML = lista;

}

//função para adicionar amigos ao array de amigos secretos
function adicionarAmigoSecreto(){
    //Adiciona o nome fornecido no input ao array de amigos secretos

    let nomeFornecido = document.querySelector('.input-name'); 

    //se algo for digitado no input, o nome é adicionado ao array
    if (nomeFornecido.value != "" && nomeFornecido.value != " "){
        amigosSecretos.push(nomeFornecido.value);
        //retoma a mensagem original, pedindo ao usuário para digitar o nome dos amigos
        let mensagemNomeValido = document.getElementById('mensagemNome');
        mensagemNomeValido.innerHTML = "Digite o nome do seu amigo.";
        //limpa o input após adicionar o nome ao array
        nomeFornecido.value = '' ;
        mostrarListaAmigos();

        //limpa o nome do amigo sorteado, caso haja um sorteio anterior
        let amigoSorteado = document.getElementById('amigoSorteado');
        amigoSorteado.innerHTML = "";
        
    }
    else {
        //caso o usuário não digite um nome válido, uma mensagem de erro é exibida
        let mensagemNomeValido = document.getElementById('mensagemNome');
        mensagemNomeValido.innerHTML = "Por favor, digite um nome antes de adicionar!";
    }
}

//função para sortear um amigo secreto

function sortearAmigo(){
    
    if (amigosSecretos.length > 0) {
        //sorteia um número aleatório entre 0 e o tamanho do array de amigos secretos
        let numeroSorteado = parseInt((Math.random() * amigosSecretos.length));
      
        //exibe o nome do amigo secreto sorteado
        let amigoSorteado = document.getElementById('amigoSorteado');
        amigoSorteado.innerHTML = `Seu amigo secreto é: ${amigosSecretos[numeroSorteado]}. Adicione novos amigos para fazer um novo sorterio.`;
                
        //prepara o sistema para um novo sorteio
        prepararNovoSorteio()
        numeroSorteado = -1;
    }
    else {
        //caso o array de amigos secretos esteja vazio, uma mensagem de erro é exibida
        let mensagemSorteio = document.getElementById('mensagemNome');
        mensagemSorteio.innerHTML = "Adicione pelo menos um amigo antes de sortear!";
    }
}