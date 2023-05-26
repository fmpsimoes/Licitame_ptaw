$(document).ready(function () {

  var currentUrl = window.location.href;
  var idLeilao = currentUrl.substring(currentUrl.lastIndexOf('=') + 1);
  console.log(idLeilao)

  $.ajax({
    url: './ourchanges/getLeilaoData.php',
    type: 'POST',
    data: {data: idLeilao},
    success: function (response) {
      const auxdata = JSON.parse(response);
      const data = auxdata[0];
      $("#nameItem").val(data['titulo']);
      $("#category").val(data['categoria']);
      $("#materials").val(data['materiais']);
      $("#dataStartItem").val(data['datainicio']);
      $("#dataEndItem").val(data['datatermino']);
      $("#dimensions").val(data['dimensoes']);
      $("#weight").val(data['peso']);
      $("#author").val(data['autor']);
      $("#periodEstimated").val(data['periodo']);
      $("#valueBase").val(data['precobase']);
      $("#valueBuyNow").val(data['precocomprarja']);
      $("#description").val(data['descricao']);
      $("#images").val(data['imagem']);
      $("#certification").val(data['dircertificado']);
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
});