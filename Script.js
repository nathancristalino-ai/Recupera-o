const feedbackErro = document.getElementById("feedback-erro");

// Função chamada quando o jogador clica na resposta CORRETA
function proximaFase(faseAtual, faseSeguinte) {
    // Limpa qualquer mensagem de erro acumulada da fase anterior
    if (feedbackErro) {
        feedbackErro.textContent = "";
    }

    const divAtual = document.getElementById(`fase${faseAtual}`);
    const divProxima = document.getElementById(`fase${faseSeguinte}`);

    // Verifica se os elementos realmente existem na tela antes de aplicar as classes
    if (divAtual && divProxima) {
        divAtual.classList.remove("ativa");
        divProxima.classList.add("ativa");
    }
}

// Função chamada quando o jogador clica em uma resposta ERRADA
function respostaErrada(botaoClicado) {
    if (feedbackErro) {
        feedbackErro.textContent = "Resposta incorreta! Tente novamente.";
    }
    
    // Feedback visual temporário no botão selecionado
    if (botaoClicado) {
        botaoClicado.style.backgroundColor = "#d32f2f";
        setTimeout(() => {
            botaoClicado.style.backgroundColor = "#4caf50";
        }, 500);
    }
}

// Função para voltar para a primeira fase ao terminar o jogo
function reiniciarJogo() {
    if (feedbackErro) {
        feedbackErro.textContent = "";
    }
    
    // Busca a fase que está ativa atualmente para escondê-la
    const faseAtivaAtual = document.querySelector(".fase.ativa");
    if (faseAtivaAtual) {
        faseAtivaAtual.classList.remove("ativa");
    }
    
    // Força a volta segura para a primeira fase
    const primeiraFase = document.getElementById("fase1");
    if (primeiraFase) {
        primeiraFase.classList.add("ativa");
    }
}
