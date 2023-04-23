//Preechimento autom+atico dos campos de caracter pessoal
document.getElementById("autoFilling").onchange = function () {
  if (this.checked) {
    $.ajax({
      url: 'ourChanges/getUserData.php',
      type: 'POST',
      data: $(this).serializeArray(),
      success: function (response) {
        document.getElementById("firstname").value = response['nome'];
        document.getElementById("lastname").value = response['apelido'];
        document.getElementById("contact").value = response['contacto'];
        document.getElementById("email").value = response['email'];
        document.getElementById("address").value = response['morada'];
        document.getElementById("city").value = response['cidade'];
        document.getElementById("freguesia").value = response['freguesia'];
        document.getElementById("zipcode").value = response['codPostal'];
        document.getElementById("country").value = response['pais'];
      },
      error: function (xhr, status, error) {
        console.error(error);
      }
    });
  } else {
    // Limpa os valores dos campos preenchidos
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("freguesia").value = "";
    document.getElementById("zipcode").value = "";
    document.getElementById("country").value = "";
  }
}

let form = document.getElementById("form");
let dataStartItem = document.getElementById("dataStartItem");
let dataEndItem = document.getElementById("dataEndItem");
let certificationFile = document.getElementById('certification');
let certifyCheckbox = document.getElementById('certificationCheckBox');

$(document).ready(function () {
  // Adiciona um evento de envio do formulário
  form.addEventListener("submit", function (event) {
    // Calcula a diferença em dias entre as datas
    var data1 = new Date(dataStartItem.value);
    var data2 = new Date(dataEndItem.value);
    var diferencaDias = (data2 - data1) / (1000 * 60 * 60 * 24);

    // Verifica se a diferença do minimo de 7 dias e do maximo de 30
    if (diferencaDias < 7 || diferencaDias > 30) {
      event.preventDefault(); // impede o envio do formulário
      alert("As datas devem ter uma diferença mínima de 7 dias e máxima de 30 dias");
      
    } else {
      // Verifica se pelo menos 1 dos campos acerca da sartificação se encontram com ficheiros ou checked
      if (certificationFile.files.length > 0 || certifyCheckbox.checked) {
        event.preventDefault();
        $.ajax({
          url: 'ourChanges/insert-auction.php',
          type: 'POST',
          data: $(this).serializeArray(),
          success: function (response) { 
            console.log(response);
          },
          error: function (xhr, status, error) {
            console.error(error);
          }
        });
      } else {
        event.preventDefault(); // impede o envio do formulário
        alert('Por favor, seleccione um ficheiro de certificação ou marque a caixa de verificação de certificação.');
        
      }
    }
  });
});