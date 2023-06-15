// Carrega os Leilão com mais licitações
$.ajax({
  url: "./ourChanges/getMostPopularIndex.php",
  type: "POST",
  dataType: "json",

  success: function (response) {
    if (response.ErrorMessage == undefined) {
      let timeEffect = 0.2;
      let html = ``;
      $.each(response, function (key, value) {
        html = `
            <div class="col-lg-3 col-sm-10">
                <div data-wow-duration="1.5s" data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow animate fadeInDown h-100">
                    <div class="auction-img">
                        <img alt="Imagem do Leilão" src="${value.dirimagem.substring(1)}"/>
                        <div class="auction-timer w-75">
                          <div class="countdown" id="timerMostPopular${value.id}">
                              <h5 style="margin: 0">
                              <span id="daysMostPopular${value.id}">05</span>D :
                              <span id="hoursMostPopular${value.id}">05</span>H :
                              <span id="minutesMostPopular${value.id}">52</span>M :
                              <span id="secondsMostPopular${value.id}">32</span>S
                              </h5>
                          </div>
                        </div>
                    </div>
                    <div class="auction-content"  >
                        <h4 style="min-height: 9vh;">
                        <a onclick="pagLicitar(${value.id})"
                            >${value.titulo}</a
                        >
                        </h4>
                        <p>
                        Preço Atual : <span><span>${value.precoatual} €</span></span>
                        </p>
                        <div class="auction-card-bttm">
                        <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a
                        >
                        </div>
                    </div>
                </div>
            </div>`;
        timeEffect += 0.2;
        $("#mostPopular").append(html);

        var endDateAuction = value.datafim;
        var preID = "MostPopular";
        setInterval(function () {
          makeTimer(preID, `${value.id}`, endDateAuction);
        }, 1000);
      });
      html = `<div class="row d-flex justify-content-center">
                <div class="col-md-4 text-center">
                    <a
                    href="live-auction.html"
                    class="eg-btn btn--primary btn--md mx-auto"
                    >Ver todos</a
                    >
                </div>
            </div>`;
      $("#mostPopular").after(html);
    } else {
      html = `<h2 style="text-align: center; color: red;" >${response.ErrorMessage}</h2>`;
      $("#mostPopular").html(html);
    }
  },
  error: function (xhr, status, error) {
    // Código para processar a mensagem de erro
    console.log("Error:", error);
    console.log("Status:", status);
    console.log("Response:", xhr.responseText);
    let errorMsg = `<h2 style="text-align: center; color: red;" >${xhr.responseText}</h2>`;
    $("#mostPopular").html(errorMsg);
  },
});

// Carrega os Leilões perto de terminar
$.ajax({
  url: "./ourChanges/getToFinishIndex.php",
  type: "POST",
  dataType: "json",

  success: function (response) {
    if (response.ErrorMessage == undefined) {
      let timeEffect = 0.2;
      let html = ``;
      $.each(response, function (key, value) {
        html = `
            <div class="col-lg-3 col-sm-10">
                <div
                data-wow-duration="1.5s"
                data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow animate fadeInDown h-100"
                >
                    <div class="auction-img">
                        <img alt="Imagem do Leilão" src="${value.dirimagem.substring(
          1
        )}"  />
                        
                        <div class="auction-timer w-75">
                          <div class="countdown" id="timerToFinish${value.id}">
                              <h5 style="margin: 0">
                              <span id="daysToFinish${value.id}">05</span>D :
                              <span id="hoursToFinish${value.id}">05</span>H :
                              <span id="minutesToFinish${value.id}">52</span>M :
                              <span id="secondsToFinish${value.id}">32</span>S
                              </h5>
                          </div>
                        </div>
                    </div>
                    <div class="auction-content"  >
                        <h4 style="min-height: 9vh;">
                        <a onclick="pagLicitar(${value.id})"
                            >${value.titulo}</a
                        >
                        </h4>
                        <p>
                        Preço Atual : <span><span>${value.precoatual
          } €</span></span>
                        </p>
                        <div class="auction-card-bttm">
                        <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a
                        >
                        </div>
                    </div>
                </div>
            </div>`;
        timeEffect += 0.2;
        $("#toFinish").append(html);

        var endDateAuction = value.datafim;
        var preID = "ToFinish";
        setInterval(function () {
          makeTimer(preID, `${value.id}`, endDateAuction);
        }, 1000);
      });
      html = `<div class="row d-flex justify-content-center">
                <div class="col-md-4 text-center">
                    <a
                    href="live-auction.html"
                    class="eg-btn btn--primary btn--md mx-auto"
                    >Ver todos</a
                    >
                </div>
            </div>`;
      $("#toFinish").after(html);
    } else {
      html = `<h2 style="text-align: center; color: red;" >${response.ErrorMessage}</h2>`;
      $("#toFinish").html(html);
    }
  },
  error: function (xhr, status, error) {
    // Código para processar a mensagem de erro
    console.log("Error:", error);
    console.log("Status:", status);
    console.log("Response:", xhr.responseText);
    let errorMsg = `<h2 style="text-align: center; color: red;" >${xhr.responseText}</h2>`;
    $("#toFinish").html(errorMsg);
  },
});

// Carrega os Leilões mais Recentes
$.ajax({
  url: "./ourChanges/getMostRecentIndex.php",
  type: "POST",
  dataType: "json",

  success: function (response) {
    if (response.ErrorMessage == undefined) {
      let timeEffect = 0.2;
      let html = ``;
      $.each(response, function (key, value) {
        html = `
            <div class="col-lg-3 col-sm-10">
                <div
                data-wow-duration="1.5s"
                data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow animate fadeInDown h-100"
                >
                    <div class="auction-img">
                        <img alt="Imagem do Leilão" src="${value.dirimagem.substring(
          1
        )}"  />
                        
                        <div class="auction-timer w-75">
                          <div class="countdown" id="timerMostRecent${value.id
          }">
                              <h5 style="margin: 0">
                              <span id="daysMostRecent${value.id}">05</span>D :
                              <span id="hoursMostRecent${value.id}">05</span>H :
                              <span id="minutesMostRecent${value.id
          }">52</span>M :
                              <span id="secondsMostRecent${value.id}">32</span>S
                              </h5>
                          </div>
                        </div>
                    </div>
                    <div class="auction-content"  >
                        <h4 style="min-height: 9vh;">
                        <a onclick="pagLicitar(${value.id})"
                            >${value.titulo}</a
                        >
                        </h4>
                        <p>
                        Preço Atual : <span><span>${value.precoatual
          } €</span></span>
                        </p>
                        <div class="auction-card-bttm">
                        <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a
                        >
                        </div>
                    </div>
                </div>
            </div>`;
        timeEffect += 0.2;
        $("#mostRecent").append(html);

        var endDateAuction = value.datafim;
        var preID = "MostRecent";
        setInterval(function () {
          makeTimer(preID, `${value.id}`, endDateAuction);
        }, 1000);
      });
      html = `<div class="row d-flex justify-content-center">
                <div class="col-md-4 text-center">
                    <a
                    href="live-auction.html"
                    class="eg-btn btn--primary btn--md mx-auto"
                    >Ver todos</a
                    >
                </div>
            </div>`;
      $("#mostRecent").after(html);
    } else {
      html = `<h2 style="text-align: center; color: red;" >${response.ErrorMessage}</h2>`;
      $("#mostRecent").html(html);
    }
  },
  error: function (xhr, status, error) {
    // Código para processar a mensagem de erro
    console.log("Error:", error);
    console.log("Status:", status);
    console.log("Response:", xhr.responseText);
    let errorMsg = `<h2 style="text-align: center; color: red;" >${xhr.responseText}</h2>`;
    $("#mostRecent").html(errorMsg);
  },
});
