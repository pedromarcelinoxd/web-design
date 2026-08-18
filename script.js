const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const tarefa = document.createElement("li");

    tarefa.innerHTML = `
        <span>${texto}</span>
        <button class="remover">Remover</button>
    `;

    const botaoRemover = tarefa.querySelector(".remover");

    botaoRemover.addEventListener("click", function () {
        tarefa.remove();
    });

    lista.appendChild(tarefa);

    input.value = "";
    input.focus();
}