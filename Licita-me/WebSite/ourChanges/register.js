$(document).ready(function () {
    let form = document.getElementById("form12");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let nome = document.getElementById("nome").value;
        let apelido = document.getElementById("apelido").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const registerDetails = {
            nome: nome,
            apelido: apelido,
            email: email,
            pass: password
        }

        $.ajax({
            url: './ourChanges/newUser.php',
            type: 'POST',
            data: { data: registerDetails },
            success: function (response) {
                if (response == "Sucesso") {
                    alert("Utilizador criado com sucesso!");
                    window.location.href = "login.php"; //redirecionar para o login depois de criar utilizador
                }
                else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});
