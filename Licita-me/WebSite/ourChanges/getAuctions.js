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

    /*
    $(".category-card1").click(function () {
      var categoryName = $(this).find("h5").text();
      // Remove background color and font color from other elements
      $(".category-card1").not(this).css("background-color", "");

      // Apply the specified style to the clicked element
      $(this).css("background-color", "#35d876");

      alert(categoryName);
    });
    */
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

/*
$(".nav-link").click(function () {
  /*
  // Get the category card with background-color of #6de58a
  var selectedCard = $(".category-card1").filter(function () {
    return $(this).css("background-color") === "#35d876";
  });

  // Check if a card with the desired background color is found
  if (selectedCard.length > 0) {
    // Do something with the selected card
    console.log("Selected card:", selectedCard);
  } else {
    // No card with the desired background color found
    console.log("No card with the specified background color found");
  }
  */
/*
  var value = $(this).val();
  var tab = $(this).attr("data-bs-target");
  // Add your code here based on the button's value and tab
  console.log("Button clicked. Value: " + value + ", Tab: " + tab);
});

/*
// Buscar todos os leilões ativos~
carregaLeiloes("ascendant", "all");

function carregaLeiloes(orderbyParam, catParam) {
  $.ajax({
    url: "./ourChanges/getAllActiveAutions.php",
    type: "POST",
    dataType: "json",
    data: { orderby: orderbyParam, cat: catParam },
    success: function (response) {
      //console.log(response);
    },
    error: function (xhr, status, error) {
      // Código para processar a mensagem de erro
      console.log("Error:", error);
      console.log("Status:", status);
      console.log("Response:", xhr.responseText);
    },
  });
}
*/
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
function getAllAuctions() {}
