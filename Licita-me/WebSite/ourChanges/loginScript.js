$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault();
  
    var formData = $(this).serializeArray();

    
        
    $.ajax({
      url: "ourChanges/login.php",
      type:"POST",
      data: formData,
      dataType: "json",   
      
      success: function(result){
          // Código para processar os dados de “response”
          if(result.redirect){  

                    // Redirect based on user role

              window.location.href =result.redirect;
          }else {
            $("#errorMessage").html( result.error );
            $("#errorMessage").css("display", "block");
          }   
      },

      error: function(xhr, status, error) {
          // Código para processar a mensagem de erro
          console.log("Error:", error);
          console.log("Status:", status);
          console.log("Response:", xhr.responseText);
        
      }
      
    })
  });
});