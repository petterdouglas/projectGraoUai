// Seleciona os botões e comentários
const Button1 = document.querySelector(".btn1");
const Button2 = document.querySelector(".btn2");
const comment1 = document.querySelector('.comment1');
const comment2 = document.querySelector('.comment2');

// Variável para controlar o índice do comentário atual
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    comment1.classList.add('active')
})

// Função para exibir apenas o comentário especificado
function showComment(index) {
    // Remove a classe .active de ambos os comentários
    comment1.classList.remove('active')
    comment2.classList.remove('active')

    // Adiciona a classe .active no comentário selecionado
    if (index === 0) {
        comment1.classList.add('active')
    } else if (index === 1) {
        comment2.classList.add('active')
    }

    // Atualiza o índice do comentário atual
    currentIndex = index;
}

// Função para alternar automaticamente entre os comentários
function autoSwitchComment() {
    currentIndex = (currentIndex + 1) % 2; // Alterna entre 0 e 1
    showComment(currentIndex);
}

// Adiciona eventos de clique para os botões
Button1.addEventListener('click', () => showComment(0)) // Exibe o comentário 1
Button2.addEventListener('click', () => showComment(1)) // Exibe o comentário 2

// Inicia a troca automática a cada 5 segundos
setInterval(autoSwitchComment, 8000); // 5000ms = 5 segundos
