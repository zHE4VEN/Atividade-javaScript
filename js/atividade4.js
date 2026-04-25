const input = document.getElementById('inputTarefa');
const btnAdd = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');

btnAdd.addEventListener('click', () => {
    const texto = input.value;

    if (texto.trim() === "") return;

    // 1. Criar o elemento LI
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${texto}</span>
        <button class="btn-remover">Remover</button>
    `;

    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('concluido');
    });

    li.querySelector('.btn-remover').addEventListener('click', function() {
        li.remove();
    });

    lista.appendChild(li);
    input.value = "";
    input.focus();
});