// Garante que o código só rode após o HTML carregar
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os botões de resposta e o botão de reiniciar
    const botoesResposta = document.querySelectorAll(".btn-resposta");
    const botaoReiniciar = document.getElementById("btn-reiniciar");

    // Adiciona o evento de clique para cada botão de resposta
    botoesResposta.forEach(botao => {
        botao.addEventListener("click", (evento) => {
            const botaoClicado = evento.target;
            
            // Verifica se o atributo 'data-correta' é igual a "true"
            const acertou = botaoClicado.getAttribute("data-correta") === "true";

            // Desativa todos os botões para o jogador não clicar em mais de um
            botoesResposta.forEach(btn => btn.disabled = true);

            if (acertou) {
                botaoClicado.classList.add("btn-correto");
                alert("Parabéns! Você acertou! A rotação de culturas protege o solo. 🌾");
            } else {
                botaoClicado.classList.add("btn-errado");
                alert("Ah que pena, resposta incorreta! Tente novamente. 🍂");
                
                // Opcional: Mostra qual era a resposta certa mesmo se ele errou
                botoesResposta.forEach(btn => {
                    if (btn.getAttribute("data-correta") === "true") {
                        btn.classList.add("btn-correto");
                    }
                });
            }

            // Exibe o botão de reiniciar após a resposta
            botaoReiniciar.style.display = "inline-block";
        });
    });

    // Configura o botão de reiniciar para voltar ao estado original
    botaoReiniciar.addEventListener("click", () => {
        botoesResposta.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove("btn-correto", "btn-errado");
        });
        botaoReiniciar.style.display = "none";
    });

});
