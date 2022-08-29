let cep = document.getElementById("cep");
let btnEnviar = document.getElementById("btnEnviar");

const pesquisarCep = async () => {
    let cep = document.getElementById("cep").value;
    let url = `http://viacep.com.br/ws/${cep}/json/`;
    //const promessa =await fetch(url).then(response => response.json).then();
    let promessa = await fetch(url);
    let dados = await promessa.json();
    if (dados.hasOwnProperty('erro')) {
        Swal.fire({
            icon: 'error',
            title: 'CPF não existe, preencha novamente!',
            text: '',
        });
    } else {
        preencherDados(dados);
    }
}

const preencherDados = (dados) => {
    let logradouro = document.getElementById("logradouro").value = dados.logradouro;
    let bairro = document.getElementById("bairro").value = dados.bairro;
    let cidade = document.getElementById("cidade").value = dados.localidade;
    let estado = document.getElementById("estado").value = dados.uf;

}

function formatarCep(e) {

    var v = e.target.value.replace(/\D/g, "")

    v = v.replace(/^(\d{5})(\d{3})/, "$1-$2")

    e.target.value = v;

}
function confirmaFormulario() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Seu cadastro foi enviado!',
        showConfirmButton: false,
        timer: 1500
    })
}
btnEnviar.addEventListener("click", confirmaFormulario)
cep.addEventListener("focusout", pesquisarCep);
cep.addEventListener("keyup", formatarCep);



//17057360