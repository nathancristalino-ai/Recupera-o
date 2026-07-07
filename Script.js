// Lista de fases do jogo (perguntas, opções e a resposta certa)
const fases = [
    {
        pergunta: "Qual é o principal objetivo do Projeto Agrinho?",
        opcoes: [
            "Estimular o comércio local",
            "Levar educação e cidadania para o meio rural",
            "Criar novos jogos de videogame",
            "Apenas plantar árvores"
        ],
        correta: 1 // Índice da resposta certa (começa do 0, então 1 é a segunda opção)
    },
    {
        pergunta: "Qual tema costuma ser muito importante nas ações do Agrinho?",
        opcoes: [
            "Sustentabilidade e meio ambiente",
            "Exploração espacial",
            "História do cinema antigo",
            "Culinária internacional"
        ],
        correta: 0 // Primeira opção é a correta
    },
    {
        pergunta: "Parabéns! Você concluiu o quiz sobre o Agrinho!",
        opcoes: ["Jogar Novamente"],
        correta: 0
    }
];

let faseAtual = 0;

// Elementos do HTML que vamos modificar
const faseTitulo = document.getElementById("fase-titulo");
const perguntaTexto = document.getElementById("pergunta-texto");
const opcoesContainer = document.getElementById("opcoes-container");
const mensagemFeedback = document.getElementById("mensagem-feedback");

// Função para carregar uma fase na tela
function carregarFase() {
    // Limpa feedbacks antigos
    mensagemFeedback.textContent = "";
    opcoesContainer.innerHTML = "";

    const dadosDaFase = fases[faseAtual];

    // Se for a última fase (tela de fim)
    if (faseAtual === fases.length - 1) {
        faseTitulo.textContent = "Fim de Jogo!";
        perguntaTexto.textContent = dadosDaFase.pergunta;
        
        const btnReiniciar = document.createElement("button");
        btnReiniciar.textContent = dadosDaFase.opcoes[0];
        btnReiniciar.onclick = reiniciarJogo;
        opcoesContainer.appendChild(btnReiniciar);
        return;
    }

    // Atualiza os textos da tela
    faseTitulo.textContent = `Fase ${faseAtual + 1}`;
    perguntaTexto.textContent = dadosDaFase.pergunta;

    // Cria os botões das alternativas
    dadosDaFase.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        
        // Define o que acontece ao clicar no botão
        botao.onclick = () => verificarResposta(indice);
        
        opcoesContainer.appendChild(botao);
    });
}

// Função que checa se o usuário acertou
function verificarResposta(indiceSelecionado) {
    const dadosDaFase = fases[faseAtual];

    if (indiceSelecionado === dadosDaFase.correta) {
        mensagemFeedback.className = "feedback correto";
        mensagemFeedback.textContent = "Resposta Correta! Avançando...";
        
        // Espera 1.2 segundos para o jogador ver que acertou e muda de fase
        setTimeout(() => {
            faseAtual++;
            carregarFase();
        }, 1200);
    } else {
        mensagemFeedback.className = "feedback errado";
        mensagemFeedback.textContent = "Resposta incorreta. Tente novamente!";
    }
}

// Função para recomeçar o quiz do zero
function reiniciarJogo() {
    faseAtual = 0;
    carregarFase();
}

// Inicializa o jogo assim que a página abre
carregarFase();
