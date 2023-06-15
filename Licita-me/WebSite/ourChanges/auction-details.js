let cur_bid;
let base_bid;
let avaliacao_perito;
let preco_imediato_vendedor;
var idLeilao;
var dataTermino;
var eSource;
let emailSession;
const displayBids = [];
$(document).ready(function () {
  checkLoggedIn().then(function (isLoggedIn) {
    if (isLoggedIn) {
      $("#licitar_form").append(gerform());
      iniTooltips();
      let form = document.getElementById("formBid");
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var clickedButtonValue = event.submitter.value;

        if (clickedButtonValue === "bid") {
          if ($("#bidnormal").val() != null) {
            $('#loader-container').addClass("slide");
            bidAction($("#bidnormal").val(), clickedButtonValue);
          }
          else {
            alert("Licitação normal sem valor atribuido");
          }
        }
        else if (clickedButtonValue === "bidcomprarja") {
          if ($("#bidcomprarja").val() != null) {
            $('#loader-container').addClass("slide");
            bidAction($("#bidcomprarja").val(), clickedButtonValue);
          }
          else {
            alert("Não altere o preço de licitar!!!");
          }
        }
        else if (clickedButtonValue === "bidauto") {
          if (document.getElementById("switch").checked) {
            if ($("#bidauto").val() != null) {
              bidAction($("#bidauto").val(), clickedButtonValue);
            }
            else {
              alert("Defina o valor maximo da licitação automatica!");
              $("#switch").checked = false;
            }
          }
        }
      });
    }
    else{let h4 = document.createElement("h4");
    h4.innerHTML = '<a href="login.php" style="color:#32c36c;">Inicie a sessão</a>, para poder licitar esta peça!';
    $("#licitar_form").append(h4);}
  }).catch(function (error) {
    let h4 = document.createElement("h4");
    h4.innerHTML = '<a href="login.php">Inicie a sessão</a>, para poder licitar esta peça!';
    $("#licitar_form").append(h4);
    console.log(error); // Handle any errors from the checkLoggedIn() function
  });


  idLeilao = sessionStorage.getItem('id_leilao');
  getLeilaoData(idLeilao);


});

function checkLoggedIn() {
  return new Promise(function (resolve, reject) {
    fetch('ourChanges/check_login.php')
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(function (data) {
        console.log(data);
        emailSession = data.email;
        resolve(data.loggedIn);
      })
      .catch(function (error) {
        console.log('Error:', error.message);
        reject(false);
      });
  });
}





function gerform() {
  let form = document.createElement("div");
  form.setAttribute("class", "bid-form");
  form.append(gerformtitle());
  form.append(gerformbody());
  return form;
}

function gerformtitle() {
  let formtitle = document.createElement("div");
  formtitle.setAttribute("class", "form-title");
  let lich5 = document.createElement("h5");
  lich5.innerHTML = "Licite agora";
  let licp = document.createElement("p");
  lich5.innerHTML = 'Montante : Mínimo <span id="minimo"></span>€';
  formtitle.append(lich5);
  formtitle.append(licp);
  return formtitle;
}

function gerformbody() {
  let forminput = document.createElement("input");
  forminput.setAttribute("type", "number");
  forminput.setAttribute("id", "bidnormal");
  let formbut = document.createElement("button");
  formbut.setAttribute("type", "submit");
  formbut.setAttribute("class", "eg-btn btn--primary3 btn--sm");
  //formbut.setAttribute("value", "licitar");
  formbut.setAttribute("id", "bid");
  formbut.setAttribute("value", "bid");
  formbut.innerHTML = "Licitar";
  let forminner = document.createElement("div");
  forminner.setAttribute("class", "form-inner gap-2");
  forminner.append(forminput);
  forminner.append(formbut);
  let coldiv = document.createElement("div");
  coldiv.setAttribute("class", "col-xl-12 col-lg-12 col-md-12");
  coldiv.append(forminner);
  let rowdiv = document.createElement("div");
  rowdiv.setAttribute("class", "row");
  rowdiv.append(coldiv);
  let forminputcj = document.createElement("input");
  forminputcj.setAttribute("type", "number");
  forminputcj.setAttribute("disabled", "disabled");
  forminputcj.setAttribute("id", "bidcomprarja");
  let formbutcj = document.createElement("button");
  formbutcj.setAttribute("type", "submit");
  formbutcj.setAttribute("class", "eg-btn btn--primary2 btn--sm");
  formbutcj.setAttribute("id", "bidcomprarjabut");
  formbutcj.setAttribute("value", "bidcomprarja");
  formbutcj.innerHTML = "Comprar já";
  let forminnercj = document.createElement("div");
  forminnercj.setAttribute("class", "form-inner gap-2");
  forminnercj.append(forminputcj);
  forminnercj.append(formbutcj);
  let coldiv2 = document.createElement("div");
  coldiv2.setAttribute("class", "col-xl-12 col-lg-12 col-md-12");
  coldiv2.append(forminnercj);
  let rowdiv2 = document.createElement("div");
  rowdiv2.setAttribute("class", "row");
  rowdiv2.append(coldiv2);
  let formbody = document.createElement("form");
  formbody.setAttribute("enctype", "multipart/form-data");
  formbody.setAttribute("method", "POST");
  formbody.setAttribute("id", "formBid");
  formbody.append(rowdiv);
  formbody.append(document.createElement("br"));
  //accordion
  let accordion = document.createElement("div");
  accordion.setAttribute("id", "accordionExample");
  accordion.setAttribute("class", "accordion");
  let accordionitem = document.createElement("div");
  accordionitem.setAttribute("class", "accordion-item");
  let accordionheader = document.createElement("h2");
  accordionheader.setAttribute("class", "accordion-header");
  accordionheader.setAttribute("id", "headingOne");
  let accordionbut = document.createElement("button");
  accordionbut.innerHTML = "Opções alternativas de licitar";
  //accordionbut.setAttribute("id","collapse")
  //accordionbut.setAttribute("href","#collapseExample")
  accordionbut.setAttribute("class", "accordion-button collapsed");
  accordionbut.setAttribute("type", "button");
  accordionbut.setAttribute("data-bs-toggle", "collapse");
  accordionbut.setAttribute("data-bs-target", "#collapseOne");
  accordionbut.setAttribute("aria-expanded", "true");
  accordionbut.setAttribute("aria-controls", "collapseOne");
  accordionheader.append(accordionbut);
  accordionitem.append(accordionheader);
  let accordioncollapse = document.createElement("div");
  accordioncollapse.setAttribute("id", "collapseOne");
  accordioncollapse.setAttribute("class", "accordion-collapse collapse");
  accordioncollapse.setAttribute("aria-labelledby", "headingOne");
  accordioncollapse.setAttribute("data-bs-parent", "#accordionExample");
  let accordionbody = document.createElement("div");
  accordionbody.setAttribute("class", "accordion-body");
  let p = document.createElement("p");
  p.setAttribute("id", "p2");
  p.innerHTML = "";
  let rowdiv4 = document.createElement("div");
  rowdiv4.setAttribute("class", "row");
  rowdiv4.append(p);
  let titlenow = document.createElement("h5");
  titlenow.innerHTML = "Compra imediata ";
  let infoicon2 = document.createElement("i");
  infoicon2.setAttribute("class", "bi-info-circle-fill");
  infoicon2.setAttribute("data-bs-toggle", "tooltip");
  infoicon2.setAttribute("data-bs-placement", "bottom");
  infoicon2.setAttribute("title", "Ao clicar no botão ´Comprar Já´, a peça será automaticamente sua pelo valor apresentado");
  titlenow.append(infoicon2);
  accordionbody.append(titlenow);
  accordionbody.append(rowdiv4);
  accordionbody.append(rowdiv2);
  let br = document.createElement("br");
  let titleauto = document.createElement("h5");
  titleauto.innerHTML = "Licitação automática ";
  let infoicon = document.createElement("i");
  infoicon.setAttribute("class", "bi-info-circle-fill");
  infoicon.setAttribute("data-bs-toggle", "tooltip");
  infoicon.setAttribute("data-bs-placement", "bottom");
  infoicon.setAttribute("title", "Ao ligar a ´Licitação Automática´, será introduzida de forma imediata uma licitação, até ao valor escolhido por si, sempre que algum utilizador supere a sua licitação anterior");
  titleauto.append(infoicon);
  let p2 = document.createElement("p");
  p2.setAttribute("id", "p3");
  p2.innerHTML = "";
  let rowdiv5 = document.createElement("div");
  rowdiv5.setAttribute("class", "row");
  rowdiv5.append(p2);
  accordionbody.append(br);
  accordionbody.append(titleauto);
  accordionbody.append(rowdiv5);
  let forminputcj2 = document.createElement("input");
  forminputcj2.setAttribute("type", "number");
  forminputcj2.setAttribute("id", "bidauto");
  let divswit = document.createElement("div");
  divswit.setAttribute("class", "form-check form-switch switchToggle");
  let formswitcj = document.createElement("input");
  formswitcj.setAttribute("id", "switch");
  formswitcj.setAttribute("type", "checkbox");
  formswitcj.setAttribute("role", "switch");
  formswitcj.setAttribute("class", "form-check-input");
  formswitcj.setAttribute("onchange", "this.form.submit()");
  formswitcj.setAttribute("value", "bidauto");
  divswit.append(formswitcj);
  let labelswit = document.createElement("label");
  labelswit.setAttribute("for", "switch");
  labelswit.innerHTML = "Toggle";
  divswit.append(labelswit);
  //formswitcj.setAttribute("value", precocomprarja())
  //formswitcj.innerHTML = "Licitar"
  let forminnercj2 = document.createElement("div");
  forminnercj2.setAttribute("class", "form-inner gap-2");
  forminnercj2.append(forminputcj2);
  forminnercj2.append(divswit);
  let coldiv3 = document.createElement("div");
  coldiv3.setAttribute("class", "col-xl-12 col-lg-12 col-md-12");
  coldiv3.append(forminnercj2);
  let rowdiv3 = document.createElement("div");
  rowdiv3.setAttribute("class", "row");
  rowdiv3.append(coldiv3);
  accordionbody.append(rowdiv3);
  accordioncollapse.append(accordionbody);
  accordionitem.append(accordioncollapse);
  accordion.append(accordionitem);
  formbody.append(accordion);
  return formbody;
}

function minbid() {
  return Number(cur_bid) + base_bid * 0.05;
}

function precocomprarja() {
  console.log("now")
  console.log(avaliacao_perito)
  console.log(preco_imediato_vendedor)
  console.log(cur_bid)
  return Math.max(Number(avaliacao_perito), Number(preco_imediato_vendedor), Number(cur_bid) * 1.5);
}

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
      if (data['estado'] != "Ativo") {
        alert("Leilao está desativo!");
        window.location.href = "./index.html";
      }
      base_bid = Number(data['valorapreciacaoprecobase']);
      avaliacao_perito = data['valorapreciacaocompraja'];
      if (data['precocomprarja'] != null) {
        preco_imediato_vendedor = data['precocomprarja']
      }
      else {
        preco_imediato_vendedor = 0
      }
      $("#titulo").html(data['titulo']);
      $("#descricao").html(data['descricao']);
      /*dataInicio = data['datainicio'];
      dataInicioAux = data['datainicio'];*/
      dataTermino = data['datafim'];
      //console.log(auxfotos)
      auxfotos.forEach(foto => {
        createImageDisplay(foto['dirimagem']);
      });
      /*data['categoria'];
      data['materiais'];
      data['dimensoes'];
      data['peso'];
      data['autor'];
      data['periodo'];*/


      $("#estimado").html(base_bid + "€ - " + avaliacao_perito + "€");
      for (const [key, value] of Object.entries(data)) {
        if (key == "categoria" || key == "materiais" || key == "dimensoes" || key == "peso" || key == "autor" || key == "periodo" || key == "condicao")
          $("#details-leilao").append(createDetailsRow(key, value));
      }


      /*$("#valueBuyNowPerito").val(data['precocomprarja']);*/

      /*$("#condicao").val(data['condicao']);*/
      dirCertificado = data['dircertificado'];
      eSource = new EventSource("ourChanges/realTimeBids.php?idLeilao=" + idLeilao);
      listenLicitacoes()
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
}

function createDetailsRow(key, value) {

  return `<div class="row">
            <div class="col-sm-3">${key}</div>
            <div class="col-sm-9">${value}</div>
          </div>`
}

function createImageDisplay(imgpathdb) {
  //console.log(typeof imgpathdb)
  let imgpath = imgpathdb.substring(1);
  let imgname = imgpath.split("/")[2].split(".")[0];
  let smalldiv = `<li class="nav-item">
              <div id="details-${imgname}" data-bs-toggle="pill" data-bs-target="#gallery-${imgname}" aria-controls="gallery-${imgname}">
                <img alt="image" src="${imgpath}" class="img-fluid" />
              </div>
            </li>`;
  $("#smallImgDisplay").append(smalldiv);
  let start = `<div class="tab-pane big-image fade`
  let imgnum = imgname.substring(imgname.length - 1);
  if (imgnum == "1") {
    start += ` show active`;
  }
  let largediv = `${start}" id="gallery-${imgname}">
  <div id="countdown-timer-${imgnum}" class="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap" style="color: white;">
  </div>
  <img alt="${imgname}" src="${imgpath}" class="img-fluid" style="height:400px;" />
</div>`;

  $("#largeImgDisplay").append(largediv);
  var preID = "Selected" + imgnum + "-";
  $(`#countdown-timer-${imgnum}`).html(`<h5 style="margin: 0">
                      <span id="days${preID}${idLeilao}">05</span>D :
                      <span id="hours${preID}${idLeilao}">05</span>H :
                      <span id="minutes${preID}${idLeilao}">52</span>M :
                      <span id="seconds${preID}${idLeilao}">32</span>S
                    </h5>`);

  setInterval(function () {
    makeTimer(preID, idLeilao, dataTermino);
  }, 1000);
}

function iniTooltips() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
/*
function listenLicitacoes() {
  eSource.onmessage = (event) => {
    console.log(event.licitacoes)
  };
  eSource.onopen = () => {
    console.log(`Connection to server opened!`);
  };
  eSource.onerror = () => {
    console.log(`EventSource failed!`);
  };

}*/

function listenLicitacoes() {
  eSource.addEventListener('licitacoes', function (event) {
    let licitacoes = JSON.parse(event.data);
    //console.log(licitacoes)
    licitacoes.forEach(bid => {
      console.log("hi")
      console.log(displayBids)
      if (!displayBids.some(existingBid => JSON.stringify(existingBid) === JSON.stringify(bid))) {
        newBid(bid.valorlicitacao);
        displayBids.push(bid);
        displayNewBid(bid);
      }
    });
  });

  eSource.addEventListener('error', function (event) {
    if (event.data == 0) {
      newBid(base_bid);
    }
    console.log(event);
  });
}

function displayNewBid(bid) {
  console.log(emailSession);

  if (emailSession !== "") {
    if (bid.email == emailSession) {
      $('#bid').prop('disabled', true);
      $('#bidcomprarjabut').prop('disabled', true);
      $('#switch').prop('disabled', true);
    } else {
      $('#bid').prop('disabled', false);
      $('#bidcomprarjabut').prop('disabled', false);
      $('#switch').prop('disabled', false);
    }
  }


  let bidli = `<li>
                <div class="row d-flex align-items-center">
                  <div class="col-7">
                    <div class="bidder-area">
                      <div class="bidder-img">
                        <img alt="image" src="assets/images/bg/bidder1.png" />
                      </div>
                      <div class="bidder-content">
                        <a >
                          <h6>${bid.nome} ${bid.apelido}</h6>
                        </a>
                        <p>${bid.valorlicitacao}€</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-5 text-end">
                    <div class="bid-time">
                      <p>${bid.datalicitacao}</p>
                    </div>
                  </div>
                </div>
              </li>`

  $('#bid-list').prepend(bidli)

}

function newBid(valor) {
  cur_bid = Number(valor);
  $('#preco').html(valor);
  $('#minimo').html(minbid());
  $('#bidnormal').val(minbid());
  $('#bidnormal').attr("min", minbid());
  $('#bidcomprarja').val(precocomprarja());
  $('#bidauto').attr("placeholder", "Valor limite (min.:" + (Number(minbid()) + (base_bid * 0.05)) + "€)");
  $('#bidauto').attr("min", (Number(minbid()) + (base_bid * 0.05)));
}

function bidAction(valor, bidType) {
  const obj = {
    idLeilao: idLeilao,
    tipo: bidType,
    date: getCurrentDate(),
    valor: valor
  }
  console.log(obj);

  $.ajax({
    url: 'ourChanges/insertBid.php',
    type: 'POST',
    data: { data: obj },
    success: function (response) {
      $('#loader-container').removeClass("slide");
      response = JSON.parse(response);
      alert(response['message']);
      if (response['message'] == "Leilao invalido" || response['message'] == "Peca comprada com sucesso") {
        window.location.href = "./index.html";
      }
      if (response['valor'] != null) {
        newBid(response['valor']);
      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
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