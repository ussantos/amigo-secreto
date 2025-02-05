//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para armaznar os nomes dos amigos secretos
let amigosSecrectos = [];

//função para adicionar amigos ao array de amigos secretos
function adicionarAmigoSecreto(){
    //Adiciona o nome fornecido no input ao array de amigos secretos

    let nomeFornecido = document.querySelector('.input-name'); 

    if (nomeFornecido.value != "") {
        amigosSecrectos.push(nomeFornecido.value);
        //retoma a mensagem original, pedindo ao usuário para digitar o nome dos amigos
        let mensagemNomeValido = document.getElementById('mensagemNome');
        mensagemNomeValido.innerHTML = "Digite o próximo nome.";
        //limpa o input após adicionar o nome ao array
        nomeFornecido.value = '' ;
        
    }
    else {
        //caso o usuário não digite um nome válido, uma mensagem de erro é exibida
        let mensagemNomeValido = document.getElementById('mensagemNome');
        mensagemNomeValido.innerHTML = "Por favor, digite um nome válido!";
    }

}