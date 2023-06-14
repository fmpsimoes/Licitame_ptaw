 $(document).ready(function () {
        let form = document.getElementById("form12");
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let nome = document.getElementById("nomeConstactos").value;
            let email = document.getElementById("emailConstactos").value;
            let telemovel = document.getElementById("telemovelContactos").value;
            let assunto = document.getElementById("assuntoConstactos").value;
            let mensagem = document.getElementById("mensagemContactos").value;
    
            const contactDetails = {
                email: email,
                nome: nome,
                telemovel: telemovel,
                assunto: assunto,
                mensagem: mensagem
            }
    
            $.ajax({
                url: './ourChanges/emails/emailFormularioContactos.php',
                type: 'POST',
                data: { data: contactDetails },
                success: function (response) {
                    if (response == "Sucesso") {
                        alert("Email enviado com sucesso");
                        window.location.href = "./index.html"; //redirecionar para página inicial depois de enviar email
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