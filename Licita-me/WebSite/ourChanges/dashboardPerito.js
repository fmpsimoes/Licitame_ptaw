$(document).ready(function () {
    getPorReverTESTE();
    //getPorRever();
    //getRevistos();
});



function getRevistos() {
    let table;
    let div;
    div = document.getElementById("tableRevistos");
    table = document.createElement("table");
    table.classList.add('ui', 'celled', 'table');
    table.id = "tabelaRevista";
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
                td2.textContent = response['utilizadores'][i]["nome"];
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
function getPorRever() {
    let table;
    let div;
    div = document.getElementById("tablePorRever");
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
                //let id = response['utilizadores'][i]["categoria"];
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


function getPorReverTESTE() {
    let table;
    let div;
    div = document.getElementById("tablePorRever");
    table = document.createElement("table");
    table.classList.add('ui', 'celled', 'table');
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
        window.location.href = `getLeilaoData.php?idLeilao=${id}`;
    });
}

function logout() {
    $.ajax({
         type: "POST",
         url: './ourChanges/logout.php',
         data:{ logout: 1},
         success:function(response) {
            window.location.href = "login.php"; //redirecionar para o login depois de terminar sessão
         }

    });
}

$('table').ready(function () {
    $('table').DataTable();
});