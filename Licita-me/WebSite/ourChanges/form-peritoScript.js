$(document).ready(function () {
      $.ajax({
        url: '*.php',
        type: 'POST',
        data: $(this).serializeArray(),
        success: function (response) {
          document.getElementById("nameItem").value = response['titulo'];
          document.getElementById("category").value = response['categoria'];
          document.getElementById("materials").value = response['materiais'];
          document.getElementById("dataStartItem").value = response['datainicio'];
          document.getElementById("dataEndItem").value = response['datatermino'];
          document.getElementById("dimensions").value = response['dimensoes'];
          document.getElementById("weight").value = response['peso'];
          document.getElementById("author").value = response['autor'];
          document.getElementById("periodEstimated").value = response['periodo'];
          document.getElementById("valueBase").value = response['valorbase'];
          document.getElementById("valueBuyNow").value = response['valorcomprarja'];
          document.getElementById("description").value = response['descricao'];
          document.getElementById("images").value = response['imagem'];
          document.getElementById("certification").value = response['dircertificado'];
        },
        error: function (xhr, status, error) {
          console.error(error);
        }
      });
    });