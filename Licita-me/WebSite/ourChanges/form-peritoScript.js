var dataInicio;
var dataTermino;
var dataInicioAux;


$(document).ready(function () {
  var currentUrl = window.location.href;
  let form = document.getElementById("form");
  var idLeilao = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
  getLeilaoData(idLeilao);

  $("#rejeitado").on("click", function () {
    setAnuncioVerificado("Rejeitado", idLeilao);
  });



  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var clickedButtonValue = event.submitter.value;

    if (clickedButtonValue === "button1") {
      var container = document.querySelector(".container1");
      if (container.childElementCount === 0) {
        event.preventDefault(); // Prevent the form from submitting
        alert("Adicione o mínimo de uma imagem ao anúncio!");
      } else {
        setAnuncioVerificado("Aprovado", idLeilao);
      }
    }
  });
  $(".container1").sortable();
});

//Input Images
//--------------------------------------------------------
let files = [];
let button = document.getElementById('upload');
let form1 = document.querySelector('#form1');
let container = document.querySelector('.container1');
let text = document.querySelector('.inner1');
let browse = document.querySelector('.select1');
let input = document.querySelector('#fotos');
let card = document.querySelector('#card1');

browse.addEventListener('click', () => input.click());

input.addEventListener('change', () => {

  let file = input.files;
  for (let i = 0; i < file.length; i++) {
    if (files.every(e => e.name != file[i].name)) {
      files.push(file[i]);
    }
  }
  console.log(files);
  showImages();
});

const showImages = () => {
  let images = '';
  files.forEach((e, i) => {
    images += `<div class="image1">
        <img src="${URL.createObjectURL(e)}" alt="image"> 
        <span onclick="delImage(${i})">&times;</span>
        </div>`;
  });
  container.innerHTML = images;
};

function delImage(index) {
  files.splice(index, 1);
  showImages();
}
card.addEventListener('dragover', e => {
  e.preventDefault();
  card.classList.add('dragover');
})

card.addEventListener('dragleave', e => {
  e.preventDefault();
  card.classList.remove('dragover');
})

card.addEventListener('drop', e => {
  e.preventDefault();

  card.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for (let i = 0; i < file.length; i++) {
    if (files.every(e => e.name != file[i].name)) {
      files.push(file[i]);
    }
  }
  showImages();

})
//----------------------------------------------------

let dirCertificado;
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
      dataInicio = data['datainicio'];
      dataInicioAux = data['datainicio'];
      dataTermino = data['datafim'];
      $("#nameItem").val(data['titulo']);
      $("#category").niceSelectSelectByValue(data['categoria']);
      $("#materials").val(data['materiais']);
      $("#dimensions").val(data['dimensoes']);
      $("#weight").val(data['peso']);
      $("#author").val(data['autor']);
      $("#periodEstimated").val(data['periodo']);
      $("#valueBasePerito").val(data['precobase']);
      $("#valueBuyNowPerito").val(data['precocomprarja']);
      $("#description").val(data['descricao']);
      $("#condicao").val(data['condicao']);
      dirCertificado = data['dircertificado'];
      if (data['dircertificado'] == null) {
        createInputFile();
      } else {
        setFile(data['dircertificado']);
      }
      setImages(auxfotos);
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
}

function setImages(auxfotos) {
  const fetchPromises = auxfotos.map(auxfotos => {
    const filePath = auxfotos.dirimagem.substring(1);
    return fetch(filePath)
      .then(response => response.blob())
      .then(blob => new File([blob], auxfotos.dirimagem.substring(11)));
  });

  Promise.all(fetchPromises)
    .then(fetchedFiles => {
      files.push(...fetchedFiles);
      console.log(files); // You can access the files array here or perform further operations
      let images = '';
      files.forEach((e, i) => {
        images += `<div class="image1">
        <img src="${URL.createObjectURL(e)}" alt="image"> 
        <span onclick="delImage(${i})">&times;</span>
        </div>`;
      });
      container.innerHTML = images;
    })
    .catch(error => {
      console.error('Error fetching the files:', error);
    });
}

function setFile(path) {
  const body = document.getElementById("certificadoDiv");
  const a = document.createElement("a");
  a.href = path.substring(1);
  a.download = "certificado.pdf";
  a.text = "Download Certificado";
  body.appendChild(a);
}

function setAnuncioVerificado(estado, idLeilao) { // Falta o verificação de se a verificação for feita apos a data pretendida pelo cliente
  const datasCorrigidas = ajustarDatas(dataInicio, getCurrentDate(), dataTermino);
  if (datasCorrigidas.estado && estado === "Aprovado") {
    estado = "Ativo";
  }
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
    estado: estado,
    datainicio: datasCorrigidas.dataInicio,
    datafim: datasCorrigidas.dataFim
  }
  console.log(obj);

  $.ajax({
    url: 'ourChanges/insertAuctionPerito.php',
    type: 'POST',
    data: { data: obj },
    success: function (response) {
      alert(response);
      insertPhotos(idLeilao);
      if (dirCertificado == null) {
        insertCertificado(idLeilao);
      }
      window.location.href = "./dashboardPerito.php";
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
}

function insertPhotos(id_leilao) {
  const endpoint = "./ourChanges/insertImagesAuction.php";
  const formData = new FormData();

  formData.append("id_leilao", id_leilao);

  files.forEach((e, i) => formData.append(`photos[${i}]`, e));

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

function createInputFile() {
  var inputElement = document.createElement("input");
  inputElement.setAttribute("type", "file");
  inputElement.setAttribute("name", "certification");
  inputElement.setAttribute("id", "certification");
  inputElement.setAttribute("accept", "application/pdf");
  inputElement.setAttribute("multiple", "");
  inputElement.setAttribute('required', '');

  // Append the created <input> element to the existing <div id="certificadoDiv">
  var certificadoDiv = document.getElementById("certificadoDiv");
  certificadoDiv.appendChild(inputElement);
}

function ajustarDatas(datainicio, dataactual, datafim) {
  var dataInicio = new Date(datainicio);
  var dataAtual = new Date(dataactual);
  var dataFim = new Date(datafim);
  var estado = false;
  dataInicio.setUTCHours(dataInicio.getUTCHours() + 1); // Para Colocar no Fuso horario de portugal
  dataAtual.setUTCHours(dataAtual.getUTCHours() + 1); // Para Colocar no Fuso horario de portugal
  dataFim.setUTCHours(dataFim.getUTCHours() + 1); // Para Colocar no Fuso horario de portugal

  if (dataAtual > dataInicio) {
    dataInicio = dataAtual;
    dataFim = new Date(dataInicio);
    dataFim.setDate(dataFim.getDate() + 7);
    estado = true;
  }

  return {
    estado: estado,
    dataInicio: dataInicio.toISOString(),
    dataFim: dataFim.toISOString()
  };
}
