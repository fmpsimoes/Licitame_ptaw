//Preechimento autom+atico dos campos de caracter pessoal
document.getElementById("autoFilling").onchange = function () {
  if (this.checked) {
    $.ajax({
      url: 'ourChanges/getUserData.php',
      type: 'POST',
      success: function (response) {
        const data = JSON.parse(response);
        console.log(data);
        $('#firstname').val(data['nome']);
        $('#lastname').val(data['apelido']);
        $("#contact").val(data['contactotelefonico']);
        $('#email').val(data['email']);
        $('#address').val(data['morada']);
        $("#porta").val(data['porta']);
        $('#concelho').val(data['concelho']);
        $('#zipcode').val(data['codigopostal']);
      },
      error: function (xhr, status, error) {
        console.error(error);
      }
    });
  } else {
    // Limpa os valores dos campos preenchidos
    $('#firstname').val("");
    $('#lastname').val("");
    $("#contact").val("");
    $('#email').val("");
    $('#address').val("");
    $("#porta").val("");
    $('#concelho').val("");
    $('#zipcode').val("");
  }
}





$(document).ready(function () {

  let form = document.getElementById("form");
  let dataStartItem = document.getElementById("dataStartItem");
  let dataEndItem = document.getElementById("dataEndItem");
  let certificationFile = document.getElementById('certification');
  let certifyCheckbox = document.getElementById('certificationCheckBox');

  certifyCheckbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      certificationFile.value = null;
      certificationFile.disabled = true;
    } else {
      certificationFile.disabled = false;
    }
  });
  certificationFile.addEventListener('change', (event) => {
    if (certificationFile.files.length > 0) {
      $("#certificationCheckBox").prop("checked", false);
      certifyCheckbox.disabled = true;
    } else {
      certifyCheckbox.disabled = false;
    }
  });
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
      //Insere anuncio
      event.preventDefault();
      setAnuncio();
    }
  });
});



function setAnuncio() {
  let certificationFile = document.getElementById('certification');
  const obj = {
    nome: $('#nameItem').val(),
    categoria: $('#category').find(":selected").val(),
    materiais: $('#materials').val(),
    dataPrefeInicio: $('#dataStartItem').val(),
    dataPrefeTermino: $('#dataEndItem').val(),
    dimensoes: $('#dimensions').val(),
    peso: $('#weight').val(),
    autor: $('#author').val(),
    estado: $('#estado').val(),
    valorInicial: $('#valueBase').val(),
    valorCompraImediata: $('#valueBuyNow').val(),
    descricao: $('#description').val()
  }
  console.log(obj);
  $.ajax({
    url: 'ourChanges/insert-auction.php',
    type: 'POST',
    data: { data: obj },
    success: function (response) {
      alert("Leilão publicado com sucesso!");
      //Insere fotos para o anuncio colocado apos receber o id do anuncio colocado (Provavelmente verificação irá ser inutil quando as imagens passarem a ser obrigatorias)
      if (images.files.length > 0) {
        insertPhotos(JSON.parse(response['idLeilao']));
      }
      ///Insere certificado para o anuncio colocado apos receber o id do anuncio colocado
      if (certificationFile.files.length > 0) {
        insertCertificado(JSON.parse(response['idLeilao']));
      }
      window.location.href = "./dashboard.php";
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
}

function insertPhotos(id_leilao) {
  const fileInput = document.querySelector("#images");
  const endpoint = "./ourChanges/insertImagesAuction.php";
  const formData = new FormData();

  formData.append("id_leilao", id_leilao);

  for (let i = 0; i < fileInput.files.length; i++) {
    formData.append("photos[]", fileInput.files[i]);
  }
  fetch(endpoint, {
    method: "post",
    body: formData
  })
    .then(response => {
      if (response['status'] == 200) {
        console.log("Anuncio publicado com fotos");
      } else {
        console.log(response)
      };
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function insertCertificado(id_certificado) {
  const fileInput = document.querySelector("#certification");
  const endpoint = "./ourChanges/insertCertificadoAuction.php";
  const formData = new FormData();

  formData.append("id_certificado", id_certificado);

  for (let i = 0; i < fileInput.files.length; i++) {
    formData.append("certificado[]", fileInput.files[i]);
  }
  fetch(endpoint, {
    method: "post",
    body: formData
  })
    .then(response => {
      if (response['status'] == 200) {
        console.log("Anuncio publicado com certificado");
      } else {
        console.log(response)
      };
    })
    .catch(error => {
      console.error("Error:", error);
    });
}