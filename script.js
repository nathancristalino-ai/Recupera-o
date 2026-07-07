const feedbackErro = document.getElementById("feedback-erro");

// Avança o jogo limpando erros antigos
function proximaFase(faseAtual, faseSeguinte) {
    if (feedbackErro) {
        feedbackErro.textContent = "";
        feedbackErro.classList.remove("visivel");
    }

    const divAtual = document.getElementById(`fase${faseAtual}`);
    const divProxima = document.getElementById(`fase${faseSeguinte}`);

    if (divAtual && divProxima) {
        divAtual.classList.remove("ativa");
        divProxima.classList.add("ativa");
    }
}

// Sinaliza erro com animação visual no botão
function respostaErrada(botaoClicado) {
    if (feedbackErro) {
        feedbackErro.textContent = "Essa alternativa prejudica o avanço sustentável. Tente outra!";
        feedbackErro.classList.add("visivel");
    }
    
    if (botaoClicado) {
        botaoClicado.style.backgroundColor = "#d32f2f";
        botaoClicado.style.transform = "translateX(4px)";
        
        setTimeout(() => {
            botaoClicado.style.backgroundColor = "#2e7d32";
            botaoClicado.style.transform = "none";
        }, 400);
    }
}

// Reinicia o fluxo jogando o usuário de volta para o primeiro bloco
function reiniciarJogo() {
    if (feedbackErro) {
        feedbackErro.textContent = "";
        feedbackErro.classList.remove("visivel");
    }
    
    const faseAtivaAtual = document.querySelector(".fase.ativa");
    if (faseAtivaAtual) {
        faseAtivaAtual.classList.remove("ativa");
    }
    
    const primeiraFase = document.getElementById("fase1");
    if (primeiraFase) {
        primeiraFase.classList.add("ativa");
    }
}
