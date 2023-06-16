$(document).ready(function () {
    let form = document.getElementById("form12");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        $('#loader-container').addClass("slide");
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
            type: 'POST',
            data: { data: {email:email,verificationcode:verificationcode} },
            success: function (response) {
                if (response == "Sucesso") {
                    $('#loader-container').removeClass("slide");
                    displayVerificationModal();
                }
                else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });

        function displayVerificationModal() {
            let modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content" id="modalcontent">
                    <h3>Código de Verificação</h3>
                    <p>Verifique o seu email para obter o codigo de verificação.</p>
                    <input type="text" id="verificationCodeInput">
                    <button id="verifyButton">Confirmar</button>
                </div>
            `;
            document.body.appendChild(modal);
            modal.style.display = "block";

            let modalcontent = document.getElementById("modalcontent");
            modalcontent.style.width="50%";
            modalcontent.style.overflowY="auto";

            let verificationCodeInput = document.getElementById("verificationCodeInput");
            let verifyButton = document.getElementById("verifyButton");
            verifyButton.addEventListener("click", verifyCode);
            verifyButton.style.marginTop="10px";

            function verifyCode() {
                let enteredCode = verificationCodeInput.value;
                if (enteredCode == verificationcode) {
                    registerUser();
                    closeModal();
                } else {
                    alert("Código de verificação errado!");
                }
            }

            function closeModal() {
                document.body.removeChild(modal);
            }
        }
        
        function registerUser(){
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
        };
    });
})