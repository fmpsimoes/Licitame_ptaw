$(document).ready(function () {
  let form = document.getElementById("form12");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const loginDetails = {
      email: email,
      pass: password,
    };

    $.ajax({
      url: "./ourChanges/loginTry.php",
      type: "POST",
      data: { data: loginDetails },
      success: function (response) {
        let jsonResponse = JSON.parse(response);
        if (
          jsonResponse == "dashboard.php" ||
          jsonResponse == "dashboardPerito.php"
        ) {
          window.location.href = "index.html"; //redirecionar para o respetivo painel depois de inciar sessão
        } else {
          alert(jsonResponse);
          $("#password").val("");
        }
      },
      error: function (xhr, status, error) {
        console.error(error);
      },
    });
  });
});
