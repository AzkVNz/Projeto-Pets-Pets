var formAdd = document.getElementById('form');

formAdd.addEventListener("submit", (e) =>{
    e.preventDefault();    
      
    //Recebe os valores

    var nomeResp = document.getElementById('nomeResp').value;
    var nomePet = document.getElementById('nomePet').value;
    var raca = document.getElementById('raca').value;
    var servicoSelecioando = document.querySelector('input[name="servico"]:checked');
    var servico = servicoSelecioando.value;
    var dataHora = document.getElementById('data_agendamento').value;
    var situacao = "Agendado";


    //Array
    let clientes = new Array()

    //Vetifica se a propriedade no localStorage
    if(localStorage.hasOwnProperty("clientes")){
        clientes = JSON.parse(localStorage.getItem("clientes"));
        
    }
    
    //Cria um id para cada usuario adicionado 
    let id = clientes.length + 1;

    //Adiicionar um novo obejeto ao array
   
    clientes.push({id, nomeResp, nomePet, raca, servico, dataHora, situacao});

    

    //Salvar no localStorage
    localStorage.setItem("clientes", JSON.stringify(clientes));    
   
    //Limpa o formulario
    formAdd.reset();
})