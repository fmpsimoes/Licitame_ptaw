$(document).ready(function () {
  console.log("ready!");

  let categorySelected = `Todas`;
  let orderBy = `ASC`;
  let sideFilter = `v-pills-viewAll-tab`;

  // Buscar as categorias
  $.ajax({
    url: "./ourChanges/getCategories.php",
    type: "POST",
    dataType: "json",

    success: function (response) {
      console.log(response);
      let html = ``;
      if (response.ErrorMessage == undefined) {
        //O response.ErrorMessage, só acontece quanto há erro

        html = `
      <div class="container position-relative">
        <div class="row d-flex justify-content-center">
          <div class="swiper category1-slider">
            <div class="swiper-wrapper">`;
        let time = 200;
        $.each(response, function (key, value) {
          html += `
              <div class="swiper-slide">
                <div
                  class="eg-card category-card1 h-100 wow animate fadeInDown "
                  data-wow-duration="1500ms"
                  data-wow-delay="${time}ms"
                  
                >
                  <div class="cat-icon">
                  <img src="assets/images/icons/${value.nome}.png"
                
                    width="50"
                    height="50"
                    />
                  </div>
                    <h5>${value.nome}</h5>
                </div>
              </div>`;
          time += 200;
        });
        html += `
      <div class="swiper-slide">
        <div
          class="eg-card category-card1 h-100 wow animate fadeInDown selected "
          data-wow-duration="1500ms"
          data-wow-delay="${time}ms"
          
        >
          <div class="cat-icon">
          <img src="assets/images/icons/all.png"
        
            width="50"
            height="50"
            />
          </div>
            <h5>Todas</h5>
        </div>
      </div>`;

        html += `
            </div>
          </div>
        </div>
        <div
          class="slider-arrows text-center d-xl-flex d-none justify-content-end"
        >
        <div
          class="category-prev1 swiper-prev-arrow"
          tabindex="0"
          role="button"
          aria-label="Previous slide"
        >
          <i class="bx bx-chevron-left"></i>
        </div>
        <div
          class="category-next1 swiper-next-arrow"
          tabindex="0"
          role="button"
          aria-label="Next slide"
        >
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>
    `;
      } else {
        html = `<h2 style="text-align: center; color: red;" >${response.ErrorMessage}</h2>`;
      }
      $("#categories").html(html);
      categorySliderHandling();

      // Ao clicar numa das categorias
      $(".category-card1").click(function () {
        // Remove "selected" class from other elements
        $(".category-card1").not(this).removeClass("selected");

        // Add "selected" class to the clicked element
        $(this).addClass("selected");
        categorySelected = $(this).find("h5").text();
        console.log(categorySelected);
        if (sideFilter === `v-pills-viewAll-tab`) {
          getAllAuctions(categorySelected, orderBy);
        }
        if (sideFilter === `v-pills-mostPopular-tab`) {
          getMostPopularAuctions(categorySelected, orderBy);
        }

        if (sideFilter === `v-pills-almostFinish-tab`) {
          getToFinishAuctions(categorySelected, orderBy);
        }
        if (sideFilter === `v-pills-mostRecent-tab`) {
          getAllMostRecentAutions(categorySelected, orderBy);
        }
      });
    },
    error: function (xhr, status, error) {
      // Código para processar a mensagem de erro
      console.log("Error:", error);
      console.log("Status:", status);
      console.log("Response:", xhr.responseText);

      let html = `<h5 style="text-align: center; color: red;" >${xhr.responseText}</h5>`;
      $("#categories").html(html);
    },
  });

  // Primeiramente irá buscar todos o leilões ativos
  getAllAuctions(categorySelected, orderBy);

  // Este ao clicar nos sidefilters
  $(".nav-link").click(function () {
    sideFilter = this.id;
    console.log("SIDEFILTER ID: " + this.id);
    if (sideFilter === `v-pills-viewAll-tab`) {
      getAllAuctions(categorySelected, orderBy);
    }
    if (sideFilter === `v-pills-mostPopular-tab`) {
      getMostPopularAuctions(categorySelected, orderBy);
    }

    if (sideFilter === `v-pills-almostFinish-tab`) {
      getToFinishAuctions(categorySelected, orderBy);
    }

    if (sideFilter === `v-pills-mostRecent-tab`) {
      getAllMostRecentAutions(categorySelected, orderBy);
    }
  });

  //Ao clicar no ordenar
  $(".list li").click(function () {
    // Perform further actions or retrieve the clicked element's data-value attribute
    orderBy = $(this).data("value");
    console.log("SIDEFILTER ID: " + sideFilter + "ORDER: " + orderBy);
    if (sideFilter === `v-pills-viewAll-tab`) {
      getAllAuctions(categorySelected, orderBy);
    }
    if (sideFilter === `v-pills-mostPopular-tab`) {
      getMostPopularAuctions(categorySelected, orderBy);
    }

    if (sideFilter === `v-pills-almostFinish-tab`) {
      getToFinishAuctions(categorySelected, orderBy);
    }

    if (sideFilter === `v-pills-mostRecent-tab`) {
      getAllMostRecentAutions(categorySelected, orderBy);
    }
  });

  // All js related to category slider
  function categorySliderHandling() {
    // Home-1 banner slider
    var heroSliderTwo = new Swiper(".banner1", {
      slidesPerView: 1,
      speed: 1500,
      loop: true,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      roundLengths: true,
      parallax: true,
      effect: "fade",
      navigation: false,
      fadeEffect: {
        crossFade: true,
      },
      // navigation: {
      //   nextEl: '.hero-next3',
      //   prevEl: '.hero-prev3',
      // },

      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".hero-one-pagination",
        clickable: true,
        // renderBullet: function(index, className) {
        //   return '<span class="' + className + '">' +  0  + (index + 1) + "</span>";
        // }
      },
    });

    // category1-slider

    var swiper = new Swiper(".category1-slider", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      roundLengths: true,
      navigation: {
        nextEl: ".category-prev1",
        prevEl: ".category-next1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
      },
    });

    var swiper = new Swiper(".category2-slider", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      roundLengths: true,
      pagination: false,
      navigation: {
        nextEl: ".category-prev2",
        prevEl: ".category-next2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        380: {
          slidesPerView: 2,
        },
        540: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
      },
    });

    // coming-feature-slider1

    var swiper = new Swiper(".upcoming-slider", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".coming-prev1",
        prevEl: ".coming-next1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
    var swiper = new Swiper(".upcoming-slider2", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".coming-prev2",
        prevEl: ".coming-next2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          pagination: false,
        },
        480: {
          slidesPerView: 1,
          pagination: false,
        },
        768: {
          slidesPerView: 2,
          pagination: false,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".upcoming-slider3", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".coming-prev3",
        prevEl: ".coming-next3",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    // blog-slider-slider1

    var swiper = new Swiper(".blog-slider", {
      slidesPerView: 2,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: ".blog-prev1",
        prevEl: ".blog-next1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    // testimonial-slider

    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: ".testi-prev1",
        prevEl: ".testi-next1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
          autoplay: true,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
    var swiper = new Swiper(".testimonial-slider2", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: ".testi-prev2",
        prevEl: ".testi-next2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
          autoplay: true,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    // slick slider
    $("#slick1").slick({
      rows: 2,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 350,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Função para ir buscar todos os leilões
  function getAllAuctions(categoryParam, orderByParam) {
    $.ajax({
      url: "./ourChanges/getAllActiveAutions.php",
      type: "GET",
      dataType: "json",
      data: {
        category: categoryParam,
        orderBy: orderByParam,
      },
      success: function (response) {
        console.log(response);
        if (response.ErrorMessage == undefined) {
          //O response.ErrorMessage, só acontece quanto há erro

          let timeEffect = 0.2;
          let htmlMostPopular = ``;
          $("#showAll").html(htmlMostPopular);
          $.each(response, function (key, value) {
            htmlMostPopular = `
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div
                data-wow-duration="1.5s"
                data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow fadeInDown h-100"
              >
              <div class="auction-img">
              <img alt="Imagem do Leilão" src="${value.dirimagem.substring(
              1
            )}"  />
                <div class="auction-timer w-75">
                <div class="countdown" id="timerShowAll${value.id}">
                    <h5 style="margin: 0">
                      <span id="daysShowAll${value.id}">05</span>D :
                      <span id="hoursShowAll${value.id}">05</span>H :
                      <span id="minutesShowAll${value.id}">52</span>M :
                      <span id="secondsShowAll${value.id}">32</span>S
                    </h5>
                </div>
                </div>
              </div>
              <div class="auction-content">
                <h4 style="min-height: 9vh;">
                <a onclick="pagLicitar(${value.id})"
                    >${value.titulo}</a>
                </h4>
                <p>
                  Preço Atual : <span><span>${value.precoatual} €</span></span>
                </p>
                <div class="auction-card-bttm">
                  <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a>
                </div>
              </div>
            </div></div>
            `;
            timeEffect += 0.2;
            $("#showAll").append(htmlMostPopular);
            var endDateAuction = value.datafim;
            var preID = "ShowAll";
            setInterval(function () {
              makeTimer(preID, `${value.id}`, endDateAuction);
            }, 1000);
          });
        } else {
          html = `<h2 style="text-align: center; color: red;" >${response.ErrorMessage}</h2>`;
          $("#showAll").html(html);
        }
      },
      error: function (xhr, status, error) {
        // Código para processar a mensagem de erro
        console.log("Error:", error);
        console.log("Status:", status);
        console.log("Response:", xhr.responseText);
      },
    });
  }

  // Função para ir buscaros leilões mais Licitados
  function getMostPopularAuctions(categoryParam, orderByParam) {
    $.ajax({
      url: "./ourChanges/getAllMostPopularAutions.php",
      type: "GET",
      dataType: "json",
      data: {
        category: categoryParam,
        orderBy: orderByParam,
      },
      success: function (response) {
        console.log(response);
        if (response.ErrorMessage == undefined) {
          //O response.ErrorMessage, só acontece quanto há erro

          let timeEffect = 0.2;
          let htmlMostPopular = ``;
          $("#mostPopular").html(htmlMostPopular);
          $.each(response, function (key, value) {
            htmlMostPopular = `
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div
                data-wow-duration="1.5s"
                data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow fadeInDown h-100"
              >
              <div class="auction-img">
              <img alt="Imagem do Leilão" src="${value.dirimagem.substring(
              1
            )}"  />
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
              <div class="auction-content">
                <h4 style="min-height: 9vh;">
                <a onclick="pagLicitar(${value.id})"
                    >${value.titulo}</a>
                </h4>
                <p>
                  Preço Atual : <span><span>${value.precoatual} €</span></span>
                </p>
                <div class="auction-card-bttm">
                  <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a>
                </div>
              </div>
            </div></div>
            `;
            timeEffect += 0.2;
            $("#mostPopular").append(htmlMostPopular);
            var endDateAuction = value.datafim;
            var preID = "MostPopular";
            setInterval(function () {
              makeTimer(preID, `${value.id}`, endDateAuction);
            }, 1000);
          });
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
      },
    });
  }

  // Função para ir buscar os leilões mais perto de terminar
  function getToFinishAuctions(categoryParam, orderByParam) {
    $.ajax({
      url: "./ourChanges/getAllToFinishAutions.php",
      type: "GET",
      dataType: "json",
      data: {
        category: categoryParam,
        orderBy: orderByParam,
      },
      success: function (response) {
        console.log(response);
        if (response.ErrorMessage == undefined) {
          //O response.ErrorMessage, só acontece quanto há erro

          let timeEffect = 0.2;
          let htmlalmostFinish = ``;
          $("#almostFinish").html(htmlalmostFinish);
          $.each(response, function (key, value) {
            htmlalmostFinish = `
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div
                data-wow-duration="1.5s"
                data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow fadeInDown h-100"
              >
              <div class="auction-img">
              <img alt="Imagem do Leilão" src="${value.dirimagem.substring(
              1
            )}"  />
                <div class="auction-timer w-75">
                <div class="countdown" id="timerAlmostFinish${value.id}">
                    <h5 style="margin: 0">
                      <span id="daysAlmostFinish${value.id}">05</span>D :
                      <span id="hoursAlmostFinish${value.id}">05</span>H :
                      <span id="minutesAlmostFinish${value.id}">52</span>M :
                      <span id="secondsAlmostFinish${value.id}">32</span>S
                    </h5>
                </div>
                </div>
              </div>
              <div class="auction-content">
                <h4 style="min-height: 9vh;">
                <a onclick="pagLicitar(${value.id})"
                    >${value.titulo}</a>
                </h4>
                <p>
                  Preço Atual : <span><span>${value.precoatual} €</span></span>
                </p>
                <div class="auction-card-bttm">
                  <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a>
                </div>
              </div>
            </div></div>
            `;
            timeEffect += 0.2;
            $("#almostFinish").append(htmlalmostFinish);
            var endDateAuction = value.datafim;
            var preID = "AlmostFinish";
            setInterval(function () {
              makeTimer(preID, `${value.id}`, endDateAuction);
            }, 1000);
          });
        } else {
          html = `<h2 style="text-align: center; color: red;" >${response.ErrorMessage}</h2>`;
          $("#almostFinish").html(html);
        }
      },
      error: function (xhr, status, error) {
        // Código para processar a mensagem de erro
        console.log("Error:", error);
        console.log("Status:", status);
        console.log("Response:", xhr.responseText);
      },
    });
  }

  function getAllMostRecentAutions(categoryParam, orderByParam) {
    $.ajax({
      url: "./ourChanges/getAllMostRecentAutions.php",
      type: "GET",
      dataType: "json",
      data: {
        category: categoryParam,
        orderBy: orderByParam,
      },
      success: function (response) {
        console.log(response);
        if (response.ErrorMessage == undefined) {
          //O response.ErrorMessage, só acontece quanto há erro

          let timeEffect = 0.2;
          let htmlmostRecent = ``;
          $("#mostRecent").html(htmlmostRecent);
          $.each(response, function (key, value) {
            htmlmostRecent = `
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div
                data-wow-duration="1.5s"
                data-wow-delay="${timeEffect}s"
                class="eg-card auction-card1 wow fadeInDown h-100"
              >
              <div class="auction-img">
              <img alt="Imagem do Leilão" src="${value.dirimagem.substring(
              1
            )}"  />
                <div class="auction-timer w-75">
                <div class="countdown" id="timerMostRecent${value.id}">
                    <h5 style="margin: 0">
                      <span id="daysMostRecent${value.id}">05</span>D :
                      <span id="hoursMostRecent${value.id}">05</span>H :
                      <span id="minutesMostRecent${value.id}">52</span>M :
                      <span id="secondsMostRecent${value.id}">32</span>S
                    </h5>
                </div>
                </div>
              </div>
              <div class="auction-content">
                <h4 style="min-height: 9vh;">
                <a onclick="pagLicitar(${value.id})"
                    >${value.titulo}</a>
                </h4>
                <p>
                  Preço Atual : <span><span>${value.precoatual} €</span></span>
                </p>
                <div class="auction-card-bttm">
                  <a onclick="pagLicitar(${value.id})" class="eg-btn btn--primary btn--sm" >Licitar</a>
                </div>
              </div>
            </div></div>
            `;
            timeEffect += 0.2;
            $("#mostRecent").append(htmlmostRecent);
            var endDateAuction = value.datafim;
            var preID = "MostRecent";
            setInterval(function () {
              makeTimer(preID, `${value.id}`, endDateAuction);
            }, 1000);
          });
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
      },
    });
  }
});
