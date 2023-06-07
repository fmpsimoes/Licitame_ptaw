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


  form.addEventListener("submit", function (event) {
    // Calcula a diferença em dias entre as datas
    $("#eviar").disabled="true";
    var data1 = new Date(dataStartItem.value);
    var data2 = new Date(dataEndItem.value);
    var diferencaDias = (data2 - data1) / (1000 * 60 * 60 * 24);

    var currentCategory = document.querySelector('.nice-select .current').textContent;
    var container = document.querySelector(".container1");
    
      if (currentCategory === "Escolha a categoria...") {
        event.preventDefault();
        alert("Selecione uma categoria válida!");
      } else {
        if (diferencaDias < 7 || diferencaDias > 30) {
          event.preventDefault(); // impede o envio do formulário
          alert("As datas devem ter uma diferença mínima de 7 dias e máxima de 30 dias!");
        } else {
          if (container.childElementCount === 0) {
            event.preventDefault(); // Prevent the form from submitting
            alert("Adicione o mínimo de uma imagem ao anúncio!");
          } else {
          setAnuncio(event);
        }
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



//--------------------------------------------------------

function setAnuncio(event) {
  let certificationFile = document.getElementById('certification');
  const obj = {
    primeiroNomeVendedor: $('#firstname').val(),
    ultimoNomeVendedor: $('#lastname').val(),
    contacto: $('#contact').val(),
    email: $('#email').val(),
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
    descricao: $('#description').val(),
    morada: $('#address').val(),
    concelho: $('#concelho').val(),
    porta: $('#porta').val(),
    codigopostal: $('#zipcode').val()
  }
  console.log(obj);
  $.ajax({
    url: 'ourChanges/insert-auction.php',
    type: 'POST',
    data: { data: obj },
    success: function (response) {
      console.log(files);
        
        insertPhotos(JSON.parse(response));

      ///Insere certificado para o anuncio colocado apos receber o id do anuncio colocado
      if (certificationFile.files.length > 0) {
        insertCertificado(JSON.parse(response));
      }
      alert("Leilão publicado com sucesso!");
      window.location.href = "./dashboard.php";
    },
    error: function (xhr, status, error) {
      event.preventDefault();
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
      console.log(response);
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
        console.log("Anuncio publicado com certificado" + response);
      } else {
        console.log(response)
      };
    })
    .catch(error => {
      console.error("Error:", error);
    });
}