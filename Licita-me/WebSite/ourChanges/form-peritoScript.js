$(document).ready(function () {
  var currentUrl = window.location.href;
  var idLeilao = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
  console.log(idLeilao)
  getLeilaoData(idLeilao)
  $("#aceite").addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    form.addEventListener("submit", function (event) {
      var data1 = new Date(dataStartItem.value);
      var data2 = new Date(dataEndItem.value);
      var diferencaDias = (data2 - data1) / (1000 * 60 * 60 * 24);
      if (diferencaDias < 7 || diferencaDias > 30) {
        event.preventDefault();
        alert("As datas devem ter uma diferença mínima de 7 dias e máxima de 30 dias");
      } else {
        event.preventDefault();
        setAnuncioVerificado("Aprovado" ,idLeilao);
      }
    });
  });
  $("#rejeitado").addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    form.addEventListener("submit", function (event) {
      var data1 = new Date(dataStartItem.value);
      var data2 = new Date(dataEndItem.value);
      var diferencaDias = (data2 - data1) / (1000 * 60 * 60 * 24);
      if (diferencaDias < 7 || diferencaDias > 30) {
        event.preventDefault();
        alert("As datas devem ter uma diferença mínima de 7 dias e máxima de 30 dias");
      } else {
        event.preventDefault();
        setAnuncioVerificado("Rejeitado" , idLeilao);
      }
    });
  });

});

function getLeilaoData(idLeilao) {
  $.ajax({
    url: './ourchanges/getLeilaoData.php',
    type: 'POST',
    data: { data: idLeilao },
    success: function (response) {
      const alldata = JSON.parse(response);
      const auxdata = alldata['data'];
      const data = auxdata[0];
      const auxfotos = alldata['fotos'];
      console.log(auxdata);
      console.log(data['categoria'])
      $("#nameItem").val(data['titulo']);
      $("#category").val(data['categoria']);
      $("#category").addClass('selected');      
      $("#materials").val(data['materiais']);
      $("#dimensions").val(data['dimensoes']);
      $("#weight").val(data['peso']);
      $("#author").val(data['autor']);
      $("#periodEstimated").val(data['periodo']);
<<<<<<< HEAD
      $("#valueBasePerito").val(data['precobase']);
      $("#valueBuyNowPerito").val(data['precocomprarja']);
=======
      $("#valueBase").val(data['precobase']);
      $("#valueBuyNow").val(data['precocomprarja']);
      $("#condition").val(data['condicao']);
>>>>>>> 563f7f58e97a04211f20a06ad6400557332fdb47
      $("#description").val(data['descricao']);
      $("#condicao").val(data['condicao']);
      setFile(data['dircertificado']);
      const filesInput = document.getElementById("images");
      while (filesInput.firstChild) {
        filesInput.removeChild(filesInput.firstChild);
      }
      auxfotos.forEach(element => {
        let foto = element['dirimagem'];
        console.log(foto);
        setImage(foto);
      });
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
}

function setImage(path) {
  const body = document.getElementById("nada");
  const a = document.createElement("img");
  a.href=path;
  a.download = "image1.jpg";
  a.text="nada";
  body.appendChild(a);

}

function setFile(path) {
  const body = document.getElementById("certificadoDiv");
  const a = document.createElement("a");
  a.href= path;
  a.download = "certificado.pdf";
  a.text="Download Certificado";
  body.appendChild(a);
}

function setAnuncioVerificado( estado, idLeilao) { // Falta o verificação de se a verificação for feita apos a data pretendida pelo cliente
  const obj = {
    idpeca: idLeilao, 
    nome: $('#nameItem').val(),
    categoria: $('#category').find(":selected").val(),
    materiais: $('#materials').val(),
    dimensoes: $('#dimensions').val(),
    peso: $('#weight').val(),
    autor: $('#author').val(),
    periodo: $('#periodEstimated').val(),
    valorInicialPerito: $('#valueBasePerito').val(),
    valorCompraImediataPerito: $('#valueBuyNowPerito').val(),
    descricao: $('#description').val(),
    condicao: $('#condicao').val(),
    datacertificacao: getCurrentDate(),
    estado: estado
  }
  console.log(obj);
  $.ajax({
    url: 'ourChanges/insertAuctionPerito.php',
    type: 'POST',
    data: { data: obj },
    success: function (response) {
      console.log("Anuncio publicado sem fotos");
      //insertPhotos(JSON.parse(response));
      //insertCertificado(JSON.parse(response));
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

function getCurrentDate() {
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  var day = String(currentDate.getDate()).padStart(2, "0");

  var hours = String(currentDate.getHours()).padStart(2, "0");
  var minutes = String(currentDate.getMinutes()).padStart(2, "0");
  var seconds = String(currentDate.getSeconds()).padStart(2, "0");

  var formattedDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

  return formattedDate;
}