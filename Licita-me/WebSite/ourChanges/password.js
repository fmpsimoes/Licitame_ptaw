document.addEventListener("DOMContentLoaded", function() {
    var forgotPassLink = document.querySelector('a[href="#password"]');
    var popup = document.getElementById("forgotPasswordPopup");
    var closeBtn = document.getElementById("closePopup");
    //var resultMessage = document.getElementById("result-message");
  
    forgotPassLink.addEventListener("click", function(event) {
      event.preventDefault();
      popup.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  
    var resetButton = document.querySelector(".popup-reset-button");
    resetButton.addEventListener("click", function() {
      var emailInput = document.getElementById("emailInput").value;

      if (emailInput === "") {
        return; // retorna para impedir o envio do email
      }

      // Verificar se o e-mail existe na base de dados
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./ourChanges/verificador.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
            var xhrEmail = new XMLHttpRequest();
            xhrEmail.open("Post", "./ourChanges/emails/recuperacaoPass.php", true);
            xhrEmail.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhrEmail.onreadystatechange = function(){
              if(xhrEmail.readyState == XMLHttpRequest.DONE){
                alert("Email enviado com sucesso, verifique o seu email para obter a nova password");
              }
            };
            xhrEmail.send("data=" + encodeURIComponent(JSON.stringify(response)));
          } else {
            // O e-mail não existe na base de dados
            alert("O e-mail não existe na base de dados");

          }
        } else {
          console.error("Erro na solicitação AJAX:", xhr.status);
        }
      }
    };
    xhr.send("email=" + encodeURIComponent(emailInput));

  
      document.getElementById("emailInput").value = "";
      popup.style.display = "none";

    });
  });
  
  var emailInput = document.getElementById("email");
  var popupEmailInput = document.getElementById("emailInput");
  
  emailInput.addEventListener("input", function() {
    popupEmailInput.value = emailInput.value;
  });
  