document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("termosLink");
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    button.addEventListener("click", function() {
      modal.style.display = "block";
      carregarTermos();
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  
    function carregarTermos() {
      fetch("termosCondicoes.json")
        .then(response => response.json())
        .then(data => {
          var meuTexto = data.meuTexto;
          var paragrafo1 = data.paragrafo1;
          var paragrafo12 = data.paragrafo12;
          var paragrafo13 = data.paragrafo13;
          var paragrafo2 = data.paragrafo2;
          var paragrafo22 = data.paragrafo22;
          var paragrafo3 = data.paragrafo3;
          var paragrafo32 = data.paragrafo32;
          var paragrafo4 = data.paragrafo4;
          var paragrafo42 = data.paragrafo42;
  
          var textoElemento = document.getElementById("texto");
          var textoElemento1 = document.getElementById("textoP1");
          var textoElemento12 = document.getElementById("textoP12");
          var textoElemento13 = document.getElementById("textoP13");
          var textoElemento2 = document.getElementById("textoP2");
          var textoElemento22 = document.getElementById("textoP22");
          var textoElemento3 = document.getElementById("textoP3");
          var textoElemento32 = document.getElementById("textoP32");
          var textoElemento4 = document.getElementById("textoP4");
          var textoElemento42 = document.getElementById("textoP42");
  
          textoElemento.textContent = meuTexto;
          textoElemento1.textContent = paragrafo1;
          textoElemento12.textContent = paragrafo12;
          textoElemento13.textContent = paragrafo13;
          textoElemento2.textContent = paragrafo2;
          textoElemento22.textContent = paragrafo22;
          textoElemento3.textContent = paragrafo3;
          textoElemento32.textContent = paragrafo32;
          textoElemento4.textContent = paragrafo4;
          textoElemento42.textContent = paragrafo42;
        })
        .catch(error => {
          console.error("Erro ao carregar o arquivo JSON:", error);
        });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var buttonPrivacy = document.getElementById("privacyLink");
    var modalPrivacy = document.getElementById("privacyModal");
    var closeBtnPrivacy = modalPrivacy.getElementsByClassName("close")[0];
  
    buttonPrivacy.addEventListener("click", function() {
      modalPrivacy.style.display = "block";
      carregarTermosPrivacy();
    });
  
    closeBtnPrivacy.addEventListener("click", function() {
      modalPrivacy.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modalPrivacy) {
        modalPrivacy.style.display = "none";
      }
    });
  
    function carregarTermosPrivacy() {
      // Carregar o arquivo JSON de privacidade 
      fetch("privacidade.json")
        .then(response => response.json())
        .then(data => {
          var meuTextoPrivacy = data.meuTextoPrivacy;
          var paragrafoPrivacy1 = data.paragrafoPrivacy1;
          var paragrafoPrivacy12 = data.paragrafoPrivacy12;
          var paragrafoPrivacy2 = data.paragrafoPrivacy2;
          var paragrafoPrivacy22 = data.paragrafoPrivacy22;
          var paragrafoPrivacy3 = data.paragrafoPrivacy3;
          var paragrafoPrivacy32 = data.paragrafoPrivacy32;
          var paragrafoPrivacy4 = data.paragrafoPrivacy4;
          var paragrafoPrivacy42 = data.paragrafoPrivacy42;
          var paragrafoPrivacy5 = data.paragrafoPrivacy5;
    
          var textoElementoPrivacy = document.getElementById("textoPrivacy");
          var textoElementoPrivacy1 = document.getElementById("textoPrivacyP1");
          var textoElementoPrivacy12 = document.getElementById("textoPrivacyP12");
          var textoElementoPrivacy2 = document.getElementById("textoPrivacyP2");
          var textoElementoPrivacy22 = document.getElementById("textoPrivacyP22");
          var textoElementoPrivacy3 = document.getElementById("textoPrivacyP3");
          var textoElementoPrivacy32 = document.getElementById("textoPrivacyP32");
          var textoElementoPrivacy4 = document.getElementById("textoPrivacyP4");
          var textoElementoPrivacy42 = document.getElementById("textoPrivacyP42");
          var textoElementoPrivacy5 = document.getElementById("textoPrivacyP5");
    
          textoElementoPrivacy.textContent = meuTextoPrivacy;
          textoElementoPrivacy1.textContent = paragrafoPrivacy1;
          textoElementoPrivacy12.textContent = paragrafoPrivacy12;
          textoElementoPrivacy2.textContent = paragrafoPrivacy2;
          textoElementoPrivacy22.textContent = paragrafoPrivacy22;
          textoElementoPrivacy3.textContent = paragrafoPrivacy3;
          textoElementoPrivacy32.textContent = paragrafoPrivacy32;
          textoElementoPrivacy4.textContent = paragrafoPrivacy4;
          textoElementoPrivacy42.textContent = paragrafoPrivacy42;
          textoElementoPrivacy5.textContent = paragrafoPrivacy5;
        })
        .catch(error => {
          console.error("Erro ao carregar o arquivo JSON:", error);
        });
    }
  });