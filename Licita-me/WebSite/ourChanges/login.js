$("#loginButton").on("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const loginDetails = {
      email: email,
      pass: password
  }

  $.ajax({
      url: './ourChanges/loginTry.php',
      type: 'POST',
      data: { data: loginDetails },
      success: function (response) {
          if(response == "dashboardAdmin.php" || response == "dashboard.php" || response == "dashboardPerito.php"){
              window.location.href = response; //redirecionar para o respetivo painel depois de inciar sessão
          }
          else{
              alert(response);
              console.log(response);
          }
      },
      error: function (xhr, status, error) {
      console.error(error);
      }
  });
});