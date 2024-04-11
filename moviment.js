document.querySelector(".btn").addEventListener("click", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
    } else {
        document.write("Bem-vindo!");
    }
});
