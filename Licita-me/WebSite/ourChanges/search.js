// Retrieving the response data from local storage
let responseData = JSON.parse(localStorage.getItem("responseData"));
if (responseData === null) {
  $("#searchContent").append(
    `<h2 class=" text-cente" >Pesquise por algo primeiro.</h2>`
  );
} else {
  console.log("responseData is defined.");

  console.log(responseData);
  let timeEffect = 0.2;
  let auctionCard = ``;
  $("#searchContent").before(
    `<h2 class="mb-5" >Resultados da pesquisa: "<i>${responseData.search}</i>"</h2>`
  );
  responseData.response.forEach(function (item) {
    auctionCard = `
              <div class="col-lg-3 col-sm-10">
                  <div
                  data-wow-duration="1.5s"
                  data-wow-delay="${timeEffect}s"
                  class="eg-card auction-card1 wow animate fadeInDown h-100"
                  >
                      <div class="auction-img">
                          <img alt="Imagem do Leilão" src="${item.dirimagem.substring(
                            1
                          )}"  />
                          
                          <div class="auction-timer w-75">
                            <div class="countdown" id="timerSearch${item.id}">
                                <h5 style="margin: 0">
                                <span id="daysSearch${item.id}">05</span>D :
                                <span id="hoursSearch${item.id}">05</span>H :
                                <span id="minutesSearch${item.id}">52</span>M :
                                <span id="secondsSearch${item.id}">32</span>S
                                </h5>
                            </div>
                          </div>
                      </div>
                      <div class="auction-content"  >
                          <h4 style="min-height: 9vh;">
                          <a href="auction-details.html?id=${item.id}"
                              >${item.titulo}</a
                          >
                          </h4>
                          <p>
                          Preço Atual : <span><span>${
                            item.precoatual
                          } €</span></span>
                          </p>
                          <div class="auction-card-bttm">
                          <a href="auction-details.html?id=${
                            item.id
                          }" class="eg-btn btn--primary btn--sm" >Licitar</a
                          >
                          </div>
                      </div>
                  </div>
              </div>`;
    timeEffect += 0.2;
    // Append data to HTML elements or perform other operations
    $("#searchContent").append(auctionCard);
    var endDateAuction = item.datafim;
    var preID = "Search";
    setInterval(function () {
      makeTimer(preID, `${item.id}`, endDateAuction);
    }, 1000);
  });
  //Clearing the data from local storage
  localStorage.removeItem("responseData");
}

// Timer para o tempo restante do leilão
function makeTimer(beforeId, id, endDate) {
  var endTime = new Date(endDate);
  var endTime = Date.parse(endTime) / 1000; //replace these two lines with the unix timestamp from the server

  var now = new Date();
  var now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (days < "10") {
    days = "0" + days;
  }
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  // Find the IDs of the spans inside the specified timer element
  let daysId = `#days${beforeId}${id}`;
  let hoursId = `#hours${beforeId}${id}`;
  let minutesId = `#minutes${beforeId}${id}`;
  let secondsId = `#seconds${beforeId}${id}`;

  $(daysId).text(days);
  $(hoursId).text(hours);
  $(minutesId).text(minutes);
  $(secondsId).text(seconds);
}
// timer end
