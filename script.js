const form = document.getElementById("form");
const imgAvatar = '<img src="./imgs/avatar.png" alt="Foto de Avatar">';
const contatos = [];
const numerosTel = [];

let linhas = '';

form.addEventListener("submit", (event) => {
    event.preventDefault();

    addLinhas();
    atualizarTabela();
    atualizarTotal();
});

const addLinhas = () => {
    const inputNomeContato = document.getElementById("nome_contato");
    const inputTelefoneContato = document.getElementById("telefone_contato");
    let nomeContato = inputNomeContato.value;
    let telefoneContato = inputTelefoneContato.value;

    if (contatos.includes(nomeContato) || numerosTel.includes(telefoneContato)) {
        alert("Contato ou Número já cadastrado!");
    } else {
        contatos.push(nomeContato);
        numerosTel.push(telefoneContato);

        let linha = '<tr>';
        linha += `<td class="avatar">
        ${imgAvatar}
        <p>${nomeContato}</p>
        </td>`
        linha += `<td>${telefoneContato}</td>`
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeContato.value = "";
    inputTelefoneContato.value = "";
};

const atualizarTabela = () => {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
};

const atualizarTotal = () => {
    const totalContatos = document.getElementById("total_contatos");
    totalContatos.innerHTML = contatos.length;
};