let cur_bid = 465.0;
let base_bid = 400.0;
let avaliacao_perito = 600.0;
let preco_imediato_vendedor = 500.0;

(function ($) {
  "use strict";

  jQuery(window).on("load", function () {
    $(".preloader").delay(1600).fadeOut("slow");
  });

  // niceSelect
  $("select").niceSelect();

  // wow animate
  setTimeout(myGreeting, 1800);
  function myGreeting() {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window,
      resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
  }
  /*
  // sticky header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(
      "header.style-1, header.style-2, header.style-3"
    );
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // mobile-search-area
  $(".search-btn").on("click", function () {
    $(".mobile-search").addClass("slide");
  });

  $(".search-cross-btn").on("click", function () {
    $(".mobile-search").removeClass("slide");
  });

  // scroll button
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $(".scroll-btn").addClass("show");
    } else {
      $(".scroll-btn").removeClass("show");
    }
  });
  $(".scroll-btn").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // mobile-menu

  $(".mobile-menu-btn").on("click", function () {
    $(".main-menu").addClass("show-menu");
  });

  $(".menu-close-btn").on("click", function () {
    $(".main-menu").removeClass("show-menu");
  });

  // mobile-drop-down
  $(".dropdown-icon").on("click", function () {
    // $(this).next('.mob-submenu').slideToggle();
    $(this).toggleClass("active").next("ul").slideToggle();
    $(this).parent().siblings().children("ul").slideUp();
    $(this).parent().siblings().children(".active").removeClass("active");
  });

  // Menu Toggle button sidebar

  var toggleIcon = document.querySelectorAll(".sidebar-menu-icon");
  var closeIcon = document.querySelectorAll(".cross-icon");
  var searchWrap = document.querySelectorAll(".menu-toggle-btn-full-shape");

  toggleIcon.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((el) => {
        el.classList.add("show-sidebar");
      });
    });
  });

  closeIcon.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((el) => {
        el.classList.remove("show-sidebar");
      });
    });
  });

  window.onclick = function (event) {
    // Menu Toggle button sidebar
    searchWrap.forEach((el) => {
      if (event.target === el) {
        el.classList.remove("show-sidebar");
      }
    });
  };
  */
  // Home-1 banner slider
  /*
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
  */

  /*
  // timer start
  function makeTimer() {
    var endTime = new Date("June 01, 2022 00:00:00");
    var endTime = Date.parse(endTime) / 1000; //replace these two lines with the unix timestamp from the server
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var Xmas95 = new Date("December 25, 1995 23:15:30");
    // console.log(Xmas95);
    // console.log(Date.parse(timeLeft * 1000));
    var hour = Xmas95.getHours();
    // console.log(hour);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#timer #days").html(days.toString().substring(1));
    $("#timer #hours").html(hours);
    $("#timer #minutes").html(minutes);
    $("#timer #seconds").html(seconds);

    $("#timer1 #days1").html(days.toString().substring(1));
    $("#timer1 #hours1").html(hours);
    $("#timer1 #minutes1").html(minutes);
    $("#timer1 #seconds1").html(seconds);

    $("#timer2 #days2").html(days.toString().substring(1));
    $("#timer2 #hours2").html(hours);
    $("#timer2 #minutes2").html(minutes);
    $("#timer2 #seconds2").html(seconds);

    $("#timer3 #days3").html(days.toString().substring(1));
    $("#timer3 #hours3").html(hours);
    $("#timer3 #minutes3").html(minutes);
    $("#timer3 #seconds3").html(seconds);

    $("#timer4 #days4").html(days.toString().substring(1));
    $("#timer4 #hours4").html(hours);
    $("#timer4 #minutes4").html(minutes);
    $("#timer4 #seconds4").html(seconds);

    $("#timer5 #days5").html(days.toString().substring(1));
    $("#timer5 #hours5").html(hours);
    $("#timer5 #minutes5").html(minutes);
    $("#timer5 #seconds5").html(seconds);

    $("#timer6 #days6").html(days.toString().substring(1));
    $("#timer6 #hours6").html(hours);
    $("#timer6 #minutes6").html(minutes);
    $("#timer6 #seconds6").html(seconds);

    $("#timer7 #days7").html(days.toString().substring(1));
    $("#timer7 #hours7").html(hours);
    $("#timer7 #minutes7").html(minutes);
    $("#timer7 #seconds7").html(seconds);

    $("#timer8 #days8").html(days.toString().substring(1));
    $("#timer8 #hours8").html(hours);
    $("#timer8 #minutes8").html(minutes);
    $("#timer8 #seconds8").html(seconds);

    $("#timer9 #days9").html(days.toString().substring(1));
    $("#timer9 #hours9").html(hours);
    $("#timer9 #minutes9").html(minutes);
    $("#timer9 #seconds9").html(seconds);

    $("#timer10 #days10").html(days.toString().substring(1));
    $("#timer10 #hours10").html(hours);
    $("#timer10 #minutes10").html(minutes);
    $("#timer10 #seconds10").html(seconds);
  }
  setInterval(function () {
    makeTimer();
  }, 1000);
  // timer end

  // count-down-timer
  var setEndDate1 = "June 8, 2022 6:0:0";
  var setEndDate2 = "Jan 1, 2023 0:0:1";
  var setEndDate3 = "Jan 1, 2023 0:0:1";
  var setEndDate4 = "March 1, 2023 0:0:1";
  var setEndDate5 = "March 1, 2023 0:0:1";
  var setEndDate6 = "March 1, 2023 0:0:1";
  var setEndDate7 = "March 1, 2023 0:0:1";
  var setEndDate8 = "March 1, 2023 0:0:1";
  var setEndDate9 = "March 1, 2023 0:0:1";

  function startCountDownDate(dateVal) {
    var countDownDate = new Date(dateVal).getTime();
    return countDownDate;
  }

  function countDownTimer(start, targetDOM) {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = start - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Output the result in an element with countdown-timer-x"
    var el_up = document.getElementById(targetDOM);
    if (el_up) {
      document.querySelector("#" + targetDOM).textContent =
        days.toString().substring(2) +
        "D : " +
        hours.toString().substring(2) +
        "H : " +
        minutes.toString().substring(2) +
        "M : " +
        seconds.toString().substring(2) +
        "S ";
    }

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval();
      // document.querySelector("#" + targetDOM).textContent = "EXPIRED";
    }
  }

  var cdd1 = startCountDownDate(setEndDate1);
  var cdd2 = startCountDownDate(setEndDate2);
  var cdd3 = startCountDownDate(setEndDate3);
  var cdd4 = startCountDownDate(setEndDate4);
  var cdd5 = startCountDownDate(setEndDate5);
  var cdd6 = startCountDownDate(setEndDate6);
  var cdd7 = startCountDownDate(setEndDate7);
  var cdd8 = startCountDownDate(setEndDate8);
  var cdd9 = startCountDownDate(setEndDate9);

  setInterval(function () {
    countDownTimer(cdd1, "countdown-timer-1");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd2, "countdown-timer-2");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd3, "countdown-timer-3");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd4, "countdown-timer-4");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd5, "countdown-timer-5");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd6, "countdown-timer-6");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd7, "countdown-timer-7");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd8, "countdown-timer-8");
  }, 1000);
  setInterval(function () {
    countDownTimer(cdd9, "countdown-timer-9");
  }, 1000);
  */
  // password-hide and show

  const togglePassword = document.querySelector("#togglePassword");

  const password = document.querySelector("#password");

  if (togglePassword) {
    togglePassword.addEventListener("click", function (e) {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      // toggle the eye / eye slash icon
      this.classList.toggle("bi-eye");
    });
  }

  // confirm-password
  const togglePassword2 = document.getElementById("togglePassword2");

  const password2 = document.querySelector("#password2");

  if (togglePassword2) {
    togglePassword2.addEventListener("click", function (e) {
      // toggle the type attribute
      const type =
        password2.getAttribute("type") === "password" ? "text" : "password";
      password2.setAttribute("type", type);
      // toggle the eye / eye slash icon
      this.classList.toggle("bi-eye");
    });
  }

  // Odometer Counter
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });

  $(".counter-single").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });

  // Magnific Popup video
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });

  //licitar option

  $("#licitar_form").append(gerform());
})(jQuery);

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
  lich5.innerHTML = "Montante : Mínimo " + minbid() + "€";
  formtitle.append(lich5);
  formtitle.append(licp);
  return formtitle;
}

function gerformbody() {
  let forminput = document.createElement("input");
  forminput.setAttribute("type", "text");
  forminput.setAttribute("value", minbid());
  let formbut = document.createElement("button");
  formbut.setAttribute("type", "submit");
  formbut.setAttribute("class", "eg-btn btn--primary3 btn--sm");
  formbut.setAttribute("value", "licitar");
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
  forminputcj.setAttribute("type", "text");
  forminputcj.setAttribute("disabled", "disabled");
  forminputcj.setAttribute("value", precocomprarja() + "€");
  let formbutcj = document.createElement("button");
  formbutcj.setAttribute("type", "submit");
  formbutcj.setAttribute("class", "eg-btn btn--primary2 btn--sm");
  formbutcj.setAttribute("value", precocomprarja());
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
  infoicon2.setAttribute("title", "descricao funcionalidade");
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
  infoicon.setAttribute("title", "descricao funcionalidade");
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
  forminputcj2.setAttribute("type", "text");
  forminputcj2.setAttribute(
    "placeholder",
    "Valor limite (min.:" + minbid() + "€)"
  );
  let divswit = document.createElement("div");
  divswit.setAttribute("class", "form-check form-switch switchToggle");
  let formswitcj = document.createElement("input");
  formswitcj.setAttribute("id", "switch");
  formswitcj.setAttribute("type", "checkbox");
  formswitcj.setAttribute("role", "switch");
  formswitcj.setAttribute("class", "form-check-input");
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
  return cur_bid + base_bid * 0.05;
}

function precocomprarja() {
  return Math.max(avaliacao_perito, preco_imediato_vendedor, cur_bid * 1.5);
}
