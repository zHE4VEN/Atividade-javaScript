// 1. Mapear os elementos que vamos usar
const campoTexto = document.getElementById('inputTarefa');
const botaoAdd = document.getElementById('btnAdicionar');
const listaUl = document.getElementById('listaTarefas');

// 2. Criar a função principal
function adicionarTarefa() {
    const valorInput = campoTexto.value;

    if (valorInput.trim() === "") {
        alert("Por favor, digite algo!");
        return;
    }

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `
        <span>${valorInput}</span>
        <button onclick="this.parentElement.remove()" style="background:none; color:red; border:none; cursor:pointer;">X</button>
    `;

    listaUl.appendChild(novoItem);
    campoTexto.value = "";
    campoTexto.focus();
}

botaoAdd.addEventListener('click', adicionarTarefa);
campoTexto.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});