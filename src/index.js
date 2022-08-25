const cep = document.getElementById("cep");

cep.addEventListener("keyup", formatarCep);

function formatarCep(e){

var v= e.target.value.replace(/\D/g,"")                

v = v.replace(/^(\d{5})(\d{3})/,"$1-$2") 

e.target.value = v;

}