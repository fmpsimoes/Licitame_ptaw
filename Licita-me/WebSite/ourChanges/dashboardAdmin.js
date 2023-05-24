function logout() {
    $.ajax({
         type: "POST",
         url: './ourChanges/logout.php',
         data:{ logout: 1},
         success:function(response) {
            window.location.href = "login.php"; //redirecionar para o login depois de terminar sessão
         }
function logout() {
    $.ajax({
        type: "POST",
        url: './ourChanges/logout.php',
        data:{ logout: 1},
        success: function (response) {
            window.location.href = "login.php"; //redirecionar para o login depois de terminar sessão
        }
