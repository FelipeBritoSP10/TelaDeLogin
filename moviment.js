document.querySelector(".btn").addEventListener("click", function(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificar se o email e a senha estão vazios
    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
    } else {
        document.write("Bem-vindo!");
    }
});