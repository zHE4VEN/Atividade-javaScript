const input = document.getElementById('inputTarefa');
const btnAdd = document.getElementById('btnAdicionar');
const listaUl = document.getElementById('listaTarefas');

// 1. Carregar tarefas do localStorage ao abrir a página
let tarefas = JSON.parse(localStorage.getItem('minhas_tarefas')) || [];

function salvarNoStorage() {
    localStorage.setItem('minhas_tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
    listaUl.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        if (tarefa.concluida) li.classList.add('concluido');

        li.innerHTML = `
            <span>${tarefa.texto}</span>
            <button class="btn-del" onclick="removerTarefa(${index})">Remover</button>
        `;

        // Clique para alternar concluída
        li.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                tarefas[index].concluida = !tarefas[index].concluida;
                renderizarTarefas();
                salvarNoStorage();
            }
        });

        listaUl.appendChild(li);
    });
}

btnAdd.addEventListener('click', () => {
    if (input.value.trim() === "") return;

    tarefas.push({
        texto: input.value,
        concluida: false
    });

    input.value = '';
    renderizarTarefas();
    salvarNoStorage();
});

window.removerTarefa = function(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
    salvarNoStorage();
}

renderizarTarefas();