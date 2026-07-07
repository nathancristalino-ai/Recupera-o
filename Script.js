const feedbackErro = document.getElementById("feedback-erro");

// Função chamada apenas quando o jogador clica na resposta CORRETA
function proximaFase(faseAtual, faseSeguinte) {
    // Limpa qualquer mensagem de erro anterior
    feedbackErro.textContent = "";

    // Seleciona a fase atual e a próxima fase usando os IDs do HTML
    const divAtual = document.getElementById(`fase${faseAtual}`);
    const divProxima = document.getElementById(`fase${faseSeguinte}`);

    if (divAtual && divProxima) {
        divAtual.classList.remove("ativa");  // Esconde a fase atual
        divProxima.classList.add("ativa");   // Mostra a próxima fase
    }
}

// Função chamada quando o jogador clica em uma resposta ERRADA
function respostaErrada(botaoClicado) {
    feedbackErro.textContent = "Resposta incorreta! Tente novamente.";
    
    // Efeito visual rápido de piscar no botão que o usuário errou
    botaoClicado.style.backgroundColor = "#d32f2f";
    setTimeout(() => {
        botaoClicado.style.backgroundColor = "#4caf50";
    }, 500);
}

// Função para voltar para a primeira fase ao terminar o jogo
function reiniciarJogo() {
    feedbackErro.textContent = "";
    
    // Remove o "ativa" de qualquer fase que esteja aparecendo
    document.querySelector(".fase.ativa").classList.remove("ativa");
    
    // Coloca a primeira fase ativa de novo
    document.getElementById("fase1").classList.add("ativa");
}
