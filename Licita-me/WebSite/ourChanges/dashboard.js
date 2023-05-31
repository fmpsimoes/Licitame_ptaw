$(document).ready(function () {
    getDataPessoal();

    $("#actualizar").on("click", function () {
        updateDataPessoal();
    });
    //getLeiloesGanhosTESTE();
    //getHistoricoLicitacoes();
    //getLeiloesGanhos();
    //getMeusLeiloes();
});
window.onload = function () {
    var existingDiv = document.querySelector('#contabtn');
    var existingDiv1 = document.querySelector('#contabtn1');

    var anunciar = createAnunciarContainer1();
    var anunciar1 = createAnunciarContainer2();

    existingDiv.parentNode.insertBefore(anunciar, existingDiv);
    existingDiv1.parentNode.insertBefore(anunciar1, existingDiv1);
}

function getMeusLeiloes(){
    let table;
    let div;
    div = document.getElementById("tableosmeusleiloes");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaPorRever";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Data Prevista Fim";
    let th4 = document.createElement('th');
    th4.textContent = "Categoria";
    let th5 = document.createElement('th');
    th5.textContent = "Condição";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: '*.php',
        type: 'POST',
        //data: { data:},
        success: function (response) {
            //let tbody = document.createElement('tbody');
            for (let i = 0; i < tamarr; i++) {
                let tr = document.createElement('tr');
                tr.id = 'row';
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = '#';
                img.alt = '#';
                td1.appendChild(img);
                let td2 = document.createElement('td');
                //td2.textContent = response['pecasarte'][i]["titulo"];
                let td3 = document.createElement('td');
                //td3.textContent = response['pecasarte'][i]["datatermino"];
                let td4 = document.createElement('td');
                //td4.textContent = response['pecasarte'][i]["categoria"];
                let td5 = document.createElement('td');
                //td5.textContent = //response['pecasarte'][i]["condicao"];
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr)
            }
            table.appendChild(thead);
            table.appendChild(tbody);
            div.appendChild(table);
            let row = document.getElementById("row")
            row.addEventListener("click", function () {
                alert("Clicável");
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
            div.appendChild(table);
        }
    });  
}

function getHistoricoLicitacoes() {
    let table;
    let div;
    div = document.getElementById("tablelicitacoes");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaHistoricoLicitacoes";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título Leilão";
    let th3 = document.createElement('th');
    th3.textContent = "Sua Licitação";
    let th4 = document.createElement('th');
    th4.textContent = "Valor Atual";
    let th5 = document.createElement('th');
    th5.textContent = "Estado";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: '*.php',
        type: 'POST',
        //data: { data:},
        success: function (response) {
            //let tbody = document.createElement('tbody');
            for (let i = 0; i < tamarr; i++) {
                let tr = document.createElement('tr');
                tr.id = 'row';
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = '#';
                img.alt = '#';
                td1.appendChild(img);
                let td2 = document.createElement('td');
                //td2.textContent = response['utilizadores'][i]["nome"];
                let td3 = document.createElement('td');
                //td3.textContent = response['utilizadores'][i]["idade"];
                let td4 = document.createElement('td');
                //td4.textContent = response['utilizadores'][i]["idade"];
                let td5 = document.createElement('td');
                //td5.textContent = //response['utilizadores'][i]["categoria"];
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr)
            }
            table.appendChild(thead);
            table.appendChild(tbody);
            div.appendChild(table);
            let row = document.getElementById("row")
            row.addEventListener("click", function () {
                alert("Clicável");
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
            div.appendChild(table);
        }
    });
}
function getLeiloesGanhos() {
    let table;
    let div;
    div = document.getElementById("tableLeiloesGanhos");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaLeiloesGanhos";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Preço";
    let th4 = document.createElement('th');
    th4.textContent = "Estado";
    let th5 = document.createElement('th');
    th5.textContent = "Pagamento";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    $.ajax({
        url: '*.php',
        type: 'POST',
        data: { data: obj}, //
        success: function (response) {
            //let tbody = document.createElement('tbody');
            for (let i = 0; i < tamarr; i++) {
                let tr = document.createElement('tr');
                tr.id = 'row';
                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = '#';
                img.alt = '#';
                td1.appendChild(img);
                let td2 = document.createElement('td');
                //td2.textContent = response['utilizadores'][i]["nome"];
                let td3 = document.createElement('td');
                //td3.textContent = response['utilizadores'][i]["idade"];
                let td4 = document.createElement('td');
                //td4.textContent = response['utilizadores'][i]["idade"]; //
                let td5 = document.createElement('td');
                //td5.textContent = //response['utilizadores'][i]["categoria"]; 
                //let td = response['utilizadores'][i]["categoria"]; //
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr)
            }
            table.appendChild(thead);
            table.appendChild(tbody);
            div.appendChild(table);
            let row = document.getElementById("row")
            row.addEventListener("click", function () {
                alert("Clicável");
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
            div.appendChild(table);
        }
    });
}


function getLeiloesGanhosTESTE() {
    let table;
    let div;
    div = document.getElementById("tablelicitacoes");
    table = document.createElement("table");
    table.classList.add('eg-table', 'order-table', 'table', 'mb-0', 'display');
    table.id = "tabelaPorRever";
    let thead = document.createElement('thead');
    thead.id = "theadRev";
    let tr2 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Imagem";
    let th2 = document.createElement('th');
    th2.textContent = "Título";
    let th3 = document.createElement('th');
    th3.textContent = "Data Prevista Inicio";
    let th4 = document.createElement('th');
    th4.textContent = "Categoria";
    let th5 = document.createElement('th');
    th5.textContent = "Status";
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    thead.appendChild(tr2);
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    tr.id = 'row';
    let td1 = document.createElement('td');
    let img = document.createElement('img');
    img.classList.add('img-fluid');
    img.src = '#';
    img.alt = '#';
    //td1.setAttribute('data-label', 'Image');
    td1.appendChild(img);
    let td2 = document.createElement('td');
    //td2.setAttribute('data-label', 'titulo');
    td2.textContent = "Quim Barreiros";
    let td3 = document.createElement('td');
    //td3.setAttribute('data-label', 'DataPrevistaInicio');
    td3.textContent = "23-13-1223";
    let td4 = document.createElement('td');
    //td4.setAttribute('data-label', 'Categoria');
    td4.textContent = "Musica";
    let td5 = document.createElement('td');
    //td5.setAttribute('data-label', 'Status');
    td5.textContent = "Aprovado";
    let id = 1;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    /*
    let row = document.getElementById("row")
    row.addEventListener("click", function () {
        alert("Clicável");
    });
    */
    table.appendChild(thead);
    table.appendChild(tbody);
    div.appendChild(table);
    let row = document.getElementById("row")
    row.addEventListener("click", function () {
        alert("Clicável");
        //window.location.href = `getLeilaoData.php?idLeilao=${id}`;
    });
}

function logout() {
    $.ajax({
        type: "POST",
        url: './ourChanges/logout.php',
        data: { logout: 1 },
        success: function (response) {
            window.location.href = "login.php"; //redirecionar para o login depois de terminar sessão
        }
    });
}
$('table').ready(function () {
    $('table').DataTable();
});




function getDataPessoal() {
    $.ajax({
        type: "POST",
        url: './ourChanges/getUserData.php',
        success: function (response) {
            const data = JSON.parse(response);
            console.log(data);
            $('#firstname').val(data['nome']);
            $('#lastname').val(data['apelido']);
            $("#contact").val(data['contactotelefonico']);
            $('#email').val(data['email']);
            $('#address').val(data['morada']);
            $("#porta").val(data['porta']);
            $('#concelho').val(data['concelho']);
            $('#zipcode').val(data['codigopostal']);
            $("#ttNome").html(data['nome'] + " " + data['apelido']);
            $("#ttEmail").html(data['email']);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function updateDataPessoal() {
    const obj = {
        nome: $('#firstname').val(),
        apelido: $('#lastname').val(),
        contacto: $("#contact").val(),
        email: $('#email').val(),
        morada: $('#address').val(),
        porta: $("#porta").val(),
        concelho: $('#concelho').val(),
        codpostal: $('#zipcode').val(),
        pass1: $('#password').val(),
        pass2: $('#password2').val(),
    }
    if (obj['pass1'] == obj['pass2']) {
        $.ajax({
            type: "POST",
            url: './ourChanges/setUserData.php',
            data: { data: obj },
            success: function (response) {
                console.log(response)
                alert(JSON.parse(response));
                const loginDetails = {
                    email: obj['email'],
                    pass: obj['pass1']
                }
                $.ajax({
                    url: './ourChanges/loginTry.php',
                    type: 'POST',
                    data: { data: loginDetails },
                    success: function (response) {
                        let jsonResponse = JSON.parse(response);

                        if (jsonResponse == "dashboard.php" || jsonResponse == "dashboardAdmin.php" || jsonResponse == "dashboardPerito.php") {
                            window.location.href = jsonResponse; //redirecionar para o respetivo painel depois de inciar sessão
                        }
                        else {
                            alert(jsonResponse);
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error(error);
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    } else {
        alert("As novas passwords não coincidem");
        $('#password').val("");
        $('#password').val("");
    }

}

//Add botão anunciar tamanho pequeno janela
function createAnunciarContainer1() {
    // Create the new div element
    var anunciarCont = document.createElement("div");
    anunciarCont.setAttribute("id", "AnunciarContainer");
    anunciarCont.classList.add("eg-btn", "btn--primary", "mobile-visible", "header-btn");
    anunciarCont.style.display = "block";
    anunciarCont.style.visibility = "initial";
    anunciarCont.style.margin = "0px 0px 10px 0px"

    // Create the anchor element
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "form-auction.php");
    anchor.textContent = "Anunciar";

    // Append the anchor to the contaContainer
    anunciarCont.appendChild(anchor);

    return anunciarCont;
}

//Add botão anunciar tamanho grande janela
function createAnunciarContainer2() {
    var anunciarCont1 = document.createElement("div");
    anunciarCont1.classList.add("eg-btn", "btn--primary", "header-btn");
    anunciarCont1.setAttribute("id", "contabtn1");
    anunciarCont1.style.margin = "0px 10px 0px 0px"
    // Create the anchor element
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "form-auction.php");
    anchor.textContent = "Anunciar";

    // Append the anchor to the contaContainer
    anunciarCont1.appendChild(anchor);
    return anunciarCont1;
}

/*
const obj = {
    nome: response['nome'],
    apelido: password['apelido'],
    contacto: password['contactotelefonico'],
    email: password['email'],
    morada: password['morada'],
    porta: password['porta'],
    concelho: password['concelho'],
    codigopostal: password['codigopostal'],
    password: password['pass']
};
return obj;
*/