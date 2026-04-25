const paragrafo = document.getElementById('paragrafo');
const btnCor = document.getElementById('btnCor');
const btnFundo = document.getElementById('btnFundo');
const btnModo = document.getElementById('btnModo');
const corpo = document.body;

btnCor.addEventListener('click', () => {
    const cores = ['#ff5733', '#33ff57', '#3357ff', '#f333ff'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    paragrafo.style.color = corAleatoria;
});

btnFundo.addEventListener('click', () => {
    if (paragrafo.style.backgroundColor === 'yellow') {
        paragrafo.style.backgroundColor = 'transparent';
    } else {
        paragrafo.style.backgroundColor = 'yellow';
        paragrafo.style.padding = '10px';
        paragrafo.style.borderRadius = '5px';
    }
});

btnModo.addEventListener('click', () => {
    corpo.classList.toggle('dark-mode');
    corpo.classList.toggle('light-mode');
    if (corpo.classList.contains('dark-mode')) {
        btnModo.textContent = "Ativar Modo Claro";
    } else {
        btnModo.textContent = "Ativar Modo Escuro";
    }
});