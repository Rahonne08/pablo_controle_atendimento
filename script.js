document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const tableBody = document.getElementById("data-table-body");
    const contract = document.getElementById("contract").value;
    const subject = document.getElementById("subject").value;
    const status = document.getElementById("status").value;
    const date = document.getElementById("date").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${contract}</td>
        <td>${subject}</td>
        <td class="status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</td>
        <td>${date}</td>
    `;

    tableBody.appendChild(newRow);

    // Reset the form
    document.getElementById("add-form").reset();
});
let contadorID = 1;

        function adicionarAtendimento() {
            const tabela = document.getElementById("tabela-atendimentos");

            const contaContrato = document.getElementById("conta-contrato").value;
            const cpf = document.getElementById("cpf").value;
            const dataNascimento = document.getElementById("data-nascimento").value;
            const dataVerificacao = document.getElementById("data-verificacao").value;
            const status = document.getElementById("status").value;

            if (contaContrato && cpf && dataNascimento && dataVerificacao && status) {
                const novaLinha = document.createElement("tr");

                novaLinha.innerHTML = `
                    <td>${contadorID++}</td>
                    <td>${contaContrato}</td>
                    <td>${cpf}</td>
                    <td>${dataNascimento}</td>
                    <td>${dataVerificacao}</td>
                    <td class="status-${status.toLowerCase().replace(' ', '-')}">${status}</td>
                `;

                tabela.appendChild(novaLinha);

                // Limpar os campos do formulário
                document.getElementById("conta-contrato").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("data-nascimento").value = "";
                document.getElementById("data-verificacao").value = "";
                document.getElementById("status").value = "Resolvido";
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        }