const btnCadastrar = document.getElementById("Cadastrar");
btnCadastrar.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("nomesubmit").innerHTML = "Nome: " +nome;
});
btnCadastrar.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    document.getElementById("emailsubmit").innerHTML = "E-mail: " +email;
});
btnCadastrar.addEventListener("click", () => {
    let dtnasc = document.getElementById("dtnasc").value;
    document.getElementById("dtnascsubmit").innerHTML = "Data de Nascimento: " +dtnasc;
});
const btnReset = document.getElementById("Reset");
btnReset.addEventListener ("click", () => {
    document.getElementById("nomesubmit").innerHTML = "Nome: ";
    document.getElementById("emailsubmit").innerHTML = "E-mail: ";
    document.getElementById("dtnascsubmit").innerHTML = "Data de Nascimento: ";
});
