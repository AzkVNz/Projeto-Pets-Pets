document.addEventListener("DOMContentLoaded", () => {
    let tabela = document.getElementById("listaClient");

    // Recupera os dados do localStorage
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Preenche a tabela com os dados recuperados
    clientes.forEach((cliente) => {
        let tr = tabela.insertRow();

        let td_id = tr.insertCell();
        let td_nomeResp = tr.insertCell();
        let td_nomePet = tr.insertCell();
        let td_raca = tr.insertCell();
        let td_servico = tr.insertCell();
        let td_dataHora = tr.insertCell();
        let td_situacao = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = cliente.id;
        td_nomeResp.innerText = cliente.nomeResp;
        td_nomePet.innerText = cliente.nomePet;
        td_raca.innerText = cliente.raca;
        td_servico.innerText = cliente.servico;
        td_dataHora.innerText = cliente.dataHora;
        td_situacao.innerText = cliente.situacao;
        
        let imgEdit = document.createElement('img');
        imgEdit.src = 'assets/img/escrever.png';
      

        let imgDele = document.createElement('img');
        imgDele.src = 'assets/img/deletar-lixeira.png'
        imgDele.setAttribute("onclick", "deletar");

        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDele);
        
       

        function deletar(delet){
        
        clientes.splice(id, 1)

        }


    });

});

