const titulo = document.getElementById('meuTitulo');
const botao = document.getElementById('meuBotao');

botao.addEventListener('click', () => {
    titulo.textContent = "Alteração realiza com sucesso!!!";
    botao.textContent = "ALterou?"
});