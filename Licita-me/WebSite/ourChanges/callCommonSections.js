$.ajax({
  url: "searchArea.html",
  dataType: "html",
  success: function (topbarHtml) {
    $("#searchArea").html(topbarHtml);
  },
});

$.ajax({
  url: "topbar.html",
  dataType: "html",
  success: function (topbarHtml) {
    $("#topbar").html(topbarHtml);
  },
});

$.ajax({
  url: "header.html",
  dataType: "html",
  success: function (headerHtml) {
    $("#header").html(headerHtml);
    headerHandling();
    $("#contabtn").before(createAnunciarContainer1());
    $("#contabtn1").before(createAnunciarContainer2());
  },
});

$.ajax({
  url: "footer.html",
  dataType: "html",
  success: function (footerHtml) {
    $("#footer").html(footerHtml);
  },
});

// All js related to header
function headerHandling() {
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

  $("#form-search-auction").on("submit", (event) => {
    event.preventDefault();
    let search = $("#input-search-auction").val();
    if (search.length < 4) {
      alert("O campo de pesquisa tem de conter pelo menos 4 caracteres!");
    } else {
      $.ajax({
        url: "./ourChanges/searchAuctions.php",
        type: "GET",
        dataType: "json",
        data: {
          search: search,
        },

        success: function (response) {
          console.log(response.ErrorMessage);

          if (response.ErrorMessage != undefined) {
            alert("Não existem resultados para a sua pesquisa.");
          } else {
            var dataToStore = {
              search: search,
              response: response,
            };

            // Storing the response data in local storage
            localStorage.setItem("responseData", JSON.stringify(dataToStore));

            // Redirecting to the other page
            window.location.href = "./search-auction.html";
          }
          //$("#footer").html(footerHtml);
        },
        error: function (xhr, status, error) {
          // Código para processar a mensagem de erro
          console.log("Error:", error);
          console.log("Status:", status);
          console.log("Response:", xhr.responseText);
          //let errorMsg = `<h2 style="text-align: center; color: red;" >${xhr.responseText}</h2>`;
          //$("#mostRecent").html(errorMsg);
        },
      });
    }
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
}
