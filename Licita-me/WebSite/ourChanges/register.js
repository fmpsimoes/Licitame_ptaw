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
        let verificationcode=Math.floor(100000 + Math.random() * 900000);
        $.ajax({
            url: './ourChanges/emails/newUserVerificationEmail.php',
            //url: './emails/testeemail.php',
            type: 'POST',
            data: { data: {email:email,verificationcode:verificationcode} },
            success: function (response) {
                if (response == "Sucesso") {
                    alert("Verifique o seu email para obter o codigo de verificação")
                }
                else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });

        while(true){
            let verificationcode2=prompt("Verification Code:");
            if(verificationcode2==null){
                alert("Sign In canceled!!!")
                return;
            }
            if(verificationcode==verificationcode2){
                break;
            }
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
